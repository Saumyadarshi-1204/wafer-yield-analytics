import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import WaferAnalysis from "./pages/WaferAnalysis";
import LotComparison from "./pages/LotComparison";

function App() {
  const isAuthenticated = localStorage.getItem("isAuth") === "true";

  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
          />

          <Route
            path="/wafer-analysis"
            element={isAuthenticated ? <WaferAnalysis /> : <Navigate to="/login" />}
          />

          <Route
            path="/lot-comparison"
            element={isAuthenticated ? <LotComparison /> : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
