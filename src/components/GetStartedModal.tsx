// src/components/GetStartedModal.tsx
import { useState } from "react";
import { authService } from "@/services/authService";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
// ...import GoogleButton from your actual Google SSO component

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}



type AuthMode = "login" | "register";

export default function GetStartedModal({ isOpen, onClose }: GetStartedModalProps) {
  const navigate = useNavigate();
  const [mode, setMode] = useState<AuthMode>("login");
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handles both input changes and form toggling
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => setForm(f => ({
    ...f, [e.target.name]: e.target.value
  }));
  const handleToggle = () => {
    setMode(m => (m === "login" ? "register" : "login")); 
    setError(""); setForm({ username: "", email: "", password: "" });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const result = mode === "login"
        ? await authService.login(form.username, form.password)
        : await authService.register(form.username, form.email, form.password);

      if (result.success) {
        onClose(); // Close modal
        navigate('./home', { replace: true }); // Navigate to Home page
        // No need for window.location.reload() - React Router will handle it
      } else {
        setError(result.error ?? "Authentication failed");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">
            {mode === "login" ? "Welcome Back!" : "Register on UniteX"}
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col gap-3">
          {/* Google Sign-In always shown */}
          <Button className="w-full" variant="outline" disabled={loading} onClick={() => {
            // trigger your Google SSO logic here!
          }}>
            {/* Or use your custom GoogleButton component */}
            Sign in with Google
          </Button>

          {/* Divider */}
          <div className="text-center text-xs text-muted-foreground my-2">or</div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <Input
              name="username"
              value={form.username}
              onChange={handleInput}
              placeholder={mode === "login" ? "Username or Email" : "Choose a username"}
              disabled={loading}
              required
            />
            {mode === "register" && (
              <Input
                name="email"
                type="email"
                value={form.email}
                onChange={handleInput}
                placeholder="Email"
                disabled={loading}
                required
              />
            )}
            <Input
              name="password"
              type="password"
              value={form.password}
              onChange={handleInput}
              placeholder={mode === "login" ? "Password" : "Create a password"}
              disabled={loading}
              required
            />
            {error && <div className="text-red-600 text-sm text-center">{error}</div>}
            <Button type="submit" className="w-full mt-2" disabled={loading}>
              {loading
                ? "Loading..."
                : mode === "login" ? "Sign In" : "Create Account"}
            </Button>
          </form>

          <div className="text-center pt-3">
            <button
              type="button"
              onClick={handleToggle}
              className="text-blue-600 hover:underline text-sm"
              disabled={loading}
            >
              {mode === "login"
                ? "Don't have an account? Sign up"
                : "Already have an account? Login"}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
