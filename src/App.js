import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider, useAuth } from "./context/AuthContext";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import WaferAnalysis from "./pages/WaferAnalysis";
import LotComparison from "./pages/LotComparison";
import DataUpload from "./pages/DataUpload";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/wafer-analysis"
        element={
          <ProtectedRoute>
            <WaferAnalysis />
          </ProtectedRoute>
        }
      />

      <Route
        path="/lot-comparison"
        element={
          <ProtectedRoute>
            <LotComparison />
          </ProtectedRoute>
        }
      />

      <Route
        path="/data-upload"
        element={
          <ProtectedRoute>
            <DataUpload />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
