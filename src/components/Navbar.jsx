import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, logout } = useAuth();

  const [mobileOpen, setMobileOpen] = useState(false);
  const isLandingPage = location.pathname === "/";

  const go = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  return (
    <nav
      className="px-4 py-2"
      style={{
        backgroundColor: "var(--bg-card)",
        borderBottom: "1px solid var(--border-color)",
      }}
    >
      {/* TOP BAR */}
      <div className="d-flex align-items-center justify-content-between">
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
              width: 36,
              height: 36,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <span>Wafer Yield Analytics</span>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="btn btn-sm btn-outline-secondary d-md-none"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>

        {/* DESKTOP ACTIONS */}
        <div className="d-none d-md-flex gap-3 align-items-center">
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
            title={theme === "dark" ? "Light" : "Dark"}
          >
            {theme === "dark" ? "☀️ Light" : "◑ Dark"}
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
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="d-md-none mt-3 d-flex flex-column gap-2">
          {isAuthenticated && (
            <>
              <button className="btn btn-outline-secondary" onClick={() => go("/dashboard")}>
                Dashboard
              </button>
              <button className="btn btn-outline-secondary" onClick={() => go("/wafer-analysis")}>
                Wafer Analysis
              </button>
              <button className="btn btn-outline-secondary" onClick={() => go("/lot-comparison")}>
                Lot Comparison
              </button>
              <button className="btn btn-outline-secondary" onClick={() => go("/data-upload")}>
                Data Upload
              </button>
            </>
          )}

          <button
            className="btn btn-outline-secondary"
            onClick={() => {
              toggleTheme();
              setMobileOpen(false);
            }}
            title={theme === "dark" ? "Light" : "Dark"}
          >
            {theme === "dark" ? "☀️ Light" : "◑ Dark"}
          </button>

          {!isAuthenticated && isLandingPage && (
            <button
              className="btn btn-outline-primary"
              onClick={() => go("/login")}
            >
              Login
            </button>
          )}

          {isAuthenticated && (
            <button
              className="btn btn-outline-danger"
              onClick={() => {
                logout();
                navigate("/", { replace: true });
                setMobileOpen(false);
              }}
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
