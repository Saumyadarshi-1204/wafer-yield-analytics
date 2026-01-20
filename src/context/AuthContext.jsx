import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuth") === "true"
  );

  useEffect(() => {
    const syncAuth = () => {
      setIsAuthenticated(localStorage.getItem("isAuth") === "true");
    };

    window.addEventListener("storage", syncAuth);
    return () => window.removeEventListener("storage", syncAuth);
  }, []);

  const login = () => {
    localStorage.setItem("isAuth", "true");
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("isAuth");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
