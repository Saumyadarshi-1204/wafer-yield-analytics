import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const navigate = useNavigate();

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="navbar bg-white border-bottom px-4"
    >
      <span
        className="fw-bold"
        style={{ color: "#1f355e", cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        Wafer Yield Analytics
      </span>

      <div className="ms-auto d-flex gap-4 align-items-center">
        <span
          className="text-muted small"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </span>
        <span className="text-muted small">Analytics</span>
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </motion.nav>
  );
}

export default Navbar;
