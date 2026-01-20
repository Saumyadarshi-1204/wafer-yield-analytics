import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Register() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleRegister = () => {
    if (!username || !password) {
      setError("All fields are required.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const userExists = users.some((u) => u.username === username);
    if (userExists) {
      setError("User already exists. Please login.");
      return;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    navigate("/login", { replace: true });
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", background: "var(--bg-main)" }}
    >
      <div className="card-theme p-4" style={{ width: "380px" }}>
        <h5 className="fw-semibold mb-3">Create account</h5>

        {error && (
          <div className="text-danger small mb-2">
            {error}
          </div>
        )}

        <label className="mb-1 text-secondary-theme">Username</label>
        <input
          className="form-control mb-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className="mb-1 text-secondary-theme">Password</label>
        <input
          type="password"
          className="form-control mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary w-100 mb-3" onClick={handleRegister}>
          Sign Up
        </button>

        <div className="text-center small text-secondary-theme">
          Already have an account?{" "}
          <span
            style={{ cursor: "pointer", color: "var(--accent)" }}
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
