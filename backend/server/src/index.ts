// backend/src/index.ts
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const app = express();
const PORT = process.env.PORT || 4000;
const JWT_SECRET = process.env.JWT_SECRET || 'uniteX-demo-secret';

app.use(cors({ origin: 'http://localhost:8080' }));
app.use(express.json());

// Temporary in-memory users (replace with database later)
const users = [
  {
    id: 1,
    username: 'admin',
    email: 'admin@unitex.com',
    password: bcrypt.hashSync('password123', 10),
    role: 'admin'
  },
  {
    id: 2,
    username: 'user',
    email: 'user@unitex.com',
    password: bcrypt.hashSync('user123', 10),
    role: 'user'
  }
];

// Extend Request interface to include user property
declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

// JWT authentication middleware
function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  try {
    const user = jwt.verify(token, JWT_SECRET) as any;
    req.user = user;
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Invalid token' });
  }
}

// Register route
app.post('/api/auth/register', async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  
  if (!username || !email || !password) {
    return res.status(400).json({ error: 'All fields required' });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters' });
  }

  // Check if user already exists
  if (users.find(u => u.username === username || u.email === email)) {
    return res.status(400).json({ error: 'Username or email already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: users.length + 1,
    username,
    email,
    password: hashedPassword,
    role: 'user'
  };

  users.push(newUser);

  const token = jwt.sign(
    { id: newUser.id, username: newUser.username, email: newUser.email, role: newUser.role },
    JWT_SECRET,
    { expiresIn: '24h' }
  );

  res.status(201).json({
    token,
    user: {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      role: newUser.role
    }
  });
});

// Login route
app.post('/api/auth/login', async (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password required' });
  }

  // Find user by username or email
  const user = users.find(u => u.username === username || u.email === username);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Verify password
  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  // Generate token
  const token = jwt.sign(
    { id: user.id, username: user.username, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: '24h' }
  );

  res.json({
    token,
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role
    }
  });
});

// Get current user (protected route)
app.get('/api/auth/me', authenticateToken, (req: Request, res: Response) => {
  const userId = req.user?.id;
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json({
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role
    }
  });
});

// Protected routes
app.get('/api/topics', authenticateToken, (_req: Request, res: Response) => {
  res.json([
    { name: 'React 19', posts: '1.2K posts' },
    { name: 'AI Development', posts: '2.8K posts' },
    { name: 'Web3', posts: '945 posts' },
    { name: 'Next.js', posts: '1.8K posts' },
    { name: 'TypeScript', posts: '3.1K posts' }
  ]);
});

app.get('/api/creators', authenticateToken, (_req: Request, res: Response) => {
  res.json([
    { name: 'John Doe', role: 'Frontend', followers: '45.2K' },
    { name: 'Jane Smith', role: 'Backend', followers: '38.7K' },
    { name: 'Bob Wilson', role: 'Mobile', followers: '29.4K' }
  ]);
});

app.post('/api/contact', authenticateToken, (req: Request, res: Response) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  
  // Here you would typically save to database
  res.json({ ok: true, message: 'Contact form submitted successfully' });
});

// Health check (public route)
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ 
    ok: true, 
    service: 'backend', 
    time: new Date().toISOString() 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 API running on http://localhost:${PORT}`);
});
