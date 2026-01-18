import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isAuthenticated = localStorage.getItem("isAuth") === "true";
  const isLandingPage = location.pathname === "/";

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    navigate("/");
  };

  return (
    <nav
      className="navbar px-4 d-flex align-items-center justify-content-between"
      style={{
        backgroundColor: "var(--bg-card)",
        borderBottom: "1px solid var(--border-color)",
      }}
    >
      {/* BRAND */}
      <span
        className="fw-semibold"
        style={{ cursor: "pointer" }}
        onClick={() => navigate(isAuthenticated ? "/dashboard" : "/")}
      >
        Wafer Yield Analytics
      </span>

      {/* RIGHT SIDE */}
      <div className="d-flex gap-3 align-items-center">
        {/* INTERNAL NAVIGATION (AUTHENTICATED ONLY) */}
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

        {/* THEME TOGGLE (ALWAYS AVAILABLE) */}
        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={toggleTheme}
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>

        {/* PUBLIC: LOGIN (ONLY ON LANDING, NOT AUTHENTICATED) */}
        {!isAuthenticated && isLandingPage && (
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}

        {/* PRIVATE: LOGOUT (AUTHENTICATED ONLY) */}
        {isAuthenticated && (
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
