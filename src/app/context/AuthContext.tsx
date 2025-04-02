"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  register: (name: string, email: string, password: string) => boolean; 
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]); 

  const login = (email: string, password: string) => {
    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      setUser(existingUser);
      return true;
    }
    return false;
  };

  const register = (name: string, email: string, password: string) => {
    const userExists = users.some((u) => u.email === email);
    if (!userExists) {
      const newUser = { name, email };
      setUsers([...users, newUser]); 
      setUser(newUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
