    import { api } from "@/lib/api";

    interface AuthResponse {
    success: boolean;
    user?: any;
    token?: string;
    error?: string;
    }

    export const authService = {
    async login(username: string, password: string): Promise<AuthResponse> {
        try {
        const response = await api.post('/api/auth/login', { username, password });
        const { token, user } = response.data;
        
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        
        return { success: true, user, token };
        } catch (error: any) {
        return { 
            success: false, 
            error: error.response?.data?.error || 'Login failed' 
        };
        }
    },

    async register(username: string, email: string, password: string): Promise<AuthResponse> {
        try {
        const response = await api.post('/api/auth/register', { username, email, password });
        const { token, user } = response.data;
        
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        
        return { success: true, user, token };
        } catch (error: any) {
        return { 
            success: false, 
            error: error.response?.data?.error || 'Registration failed' 
        };
        }
    },

    // Add these missing methods
    async getCurrentUser(): Promise<AuthResponse> {
        try {
        const response = await api.get('/api/auth/me');
        return { success: true, user: response.data.user };
        } catch (error: any) {
        return { success: false, error: 'Failed to get user' };
        }
    },

    logout(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },

    getToken(): string | null {
        return localStorage.getItem('token');
    },

    getUser(): any {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    },

    isAuthenticated(): boolean {
        return !!this.getToken();
    }
    };
