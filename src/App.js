import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import WaferAnalysis from "./pages/WaferAnalysis";
import LotComparison from "./pages/LotComparison";
import DataUpload from "./pages/DataUpload";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuth") === "true"
  );

  // Keep auth state in sync with localStorage
  useEffect(() => {
    const syncAuth = () => {
      setIsAuthenticated(localStorage.getItem("isAuth") === "true");
    };

    window.addEventListener("storage", syncAuth);
    return () => window.removeEventListener("storage", syncAuth);
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
            }
          />

          <Route
            path="/wafer-analysis"
            element={
              isAuthenticated ? <WaferAnalysis /> : <Navigate to="/login" replace />
            }
          />

          <Route
            path="/lot-comparison"
            element={
              isAuthenticated ? <LotComparison /> : <Navigate to="/login" replace />
            }
          />

          <Route
            path="/data-upload"
            element={
              isAuthenticated ? <DataUpload /> : <Navigate to="/login" replace />
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
