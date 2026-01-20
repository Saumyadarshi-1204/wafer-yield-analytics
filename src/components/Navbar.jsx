import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, logout } = useAuth();

  const isLandingPage = location.pathname === "/";

  return (
    <nav
      className="navbar px-4 d-flex align-items-center justify-content-between"
      style={{
        backgroundColor: "var(--bg-card)",
        borderBottom: "1px solid var(--border-color)",
      }}
    >
      {/* BRAND */}
      <div
        className="d-flex align-items-center gap-2 fw-semibold"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(isAuthenticated ? "/dashboard" : "/")}
      >
      <img
        src="/images/logo.png"
        alt="Wafer Analytics Logo"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          objectFit: "cover"
        }}
      />
        <span>Wafer Yield Analytics</span>
      </div>
      
      <div className="d-flex gap-3 align-items-center">
        {isAuthenticated && (
          <span
            style={{
              cursor: "pointer",
              fontWeight: location.pathname === "/dashboard" ? 600 : 400,
              color:
                location.pathname === "/dashboard"
                  ? "var(--accent)"
                  : "var(--text-primary)",
            }}
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </span>
        )}

        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={toggleTheme}
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>

        {!isAuthenticated && isLandingPage && (
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}

        {isAuthenticated && (
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => {
              logout();
              navigate("/", { replace: true });
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
