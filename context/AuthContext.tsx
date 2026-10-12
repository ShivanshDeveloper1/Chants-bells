"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  userEmail: string | null;
  login: (email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  userEmail: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const savedEmail = localStorage.getItem("user_email");
    if (savedEmail) {
      setUserEmail(savedEmail);
    }
  }, []);

  const login = (email: string) => {
    localStorage.setItem("user_email", email);
    setUserEmail(email);
  };

  const logout = () => {
    localStorage.removeItem("user_email");
    setUserEmail(null);
  };

  return (
    <AuthContext.Provider value={{ userEmail, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);