"use client";

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  loggedIn: false,
  signIn: () => {},
  signOut: () => {},
});

export function AuthProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("cf-logged-in");
    setLoggedIn(stored === "true");
  }, []);

  const signIn = () => {
    setLoggedIn(true);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("cf-logged-in", "true");
    }
  };

  const signOut = () => {
    setLoggedIn(false);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("cf-logged-in", "false");
    }
  };

  return (
    <AuthContext.Provider value={{ loggedIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
