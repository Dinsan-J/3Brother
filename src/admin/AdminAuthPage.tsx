import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, UserPlus, LogIn } from "lucide-react";

const AdminAuthPage = ({ onAuth }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      if (form.username === "admin" && form.password === "admin123") {
        onAuth(); // This sets adminAuthed to true in App.tsx
      } else {
        setError("Invalid credentials");
      }
    } else {
      setIsLogin(true);
      setError("Signup successful! Please login.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
      <Card className="w-full max-w-md shadow-xl">
        <CardContent className="p-8">
          <div className="flex flex-col items-center mb-6">
            <Lock className="h-10 w-10 text-primary mb-2" />
            <h2 className="text-2xl font-bold mb-1">
              {isLogin ? "Admin Login" : "Admin Signup"}
            </h2>
            <p className="text-muted-foreground text-sm">
              {isLogin
                ? "Sign in to access the admin dashboard"
                : "Create an admin account"}
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
            />
            <Input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}
            <Button type="submit" className="w-full" variant="hero">
              {isLogin ? (
                <>
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </>
              ) : (
                <>
                  <UserPlus className="h-4 w-4 mr-2" />
                  Signup
                </>
              )}
            </Button>
          </form>
          <div className="mt-4 text-center">
            <button
              className="text-primary underline text-sm"
              onClick={() => {
                setIsLogin((v) => !v);
                setError("");
              }}
            >
              {isLogin
                ? "Don't have an account? Signup"
                : "Already have an account? Login"}
            </button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default AdminAuthPage;
