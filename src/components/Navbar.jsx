import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className="navbar px-4 d-flex align-items-center justify-content-between"
      style={{
        backgroundColor: "var(--bg-card)",
        borderBottom: "1px solid var(--border-color)",
      }}
    >
      <span
        className="fw-semibold"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        Wafer Yield Analytics
      </span>

      <div className="d-flex gap-3 align-items-center">
        <span
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </span>

        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={toggleTheme}
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>

        <button
          className="btn btn-sm btn-outline-primary"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
