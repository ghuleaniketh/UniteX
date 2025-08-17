// src/contexts/AuthContext.tsx
import { createContext, useContext, useState, useEffect } from 'react';
import { authService } from '../services/authService';

interface AuthContextType {
  user: any;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const initAuth = async () => {
      console.log("🔄 AuthContext: Initializing auth..."); // Debug log
      
      if (authService.isAuthenticated()) {
        console.log("✅ AuthContext: Token found, getting current user"); // Debug log
        const result = await authService.getCurrentUser();
        if (result.success) {
          console.log("✅ AuthContext: User loaded:", result.user); // Debug log
          setUser(result.user);
        } else {
          console.log("❌ AuthContext: Failed to get user, logging out"); // Debug log
          authService.logout();
        }
      } else {
        console.log("❌ AuthContext: No token found"); // Debug log
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  const login = async (username: string, password: string) => {
    console.log("🔄 AuthContext: Login attempt for:", username); // Debug log
    const result = await authService.login(username, password);
    console.log("🔄 AuthContext: Login result:", result); // Debug log
    
    if (result.success) {
      console.log("✅ AuthContext: Setting user in context:", result.user); // Debug log
      setUser(result.user);
    }
    return result;
  };

  const logout = () => {
    console.log("🔄 AuthContext: Logging out"); // Debug log
    authService.logout();
    setUser(null);
    window.location.href = '/';
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    loading
  };

  console.log("🔄 AuthContext: Current state:", { 
    user: !!user, 
    isAuthenticated: !!user, 
    loading 
  }); // Debug log

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
