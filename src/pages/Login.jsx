import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isAuthenticated = localStorage.getItem("isAuth") === "true";

  /*  Prevent authenticated users from seeing login page */
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = () => {
    if (!username || !password) return;

    // Simulated authentication
    localStorage.setItem("isAuth", "true");
    setTimeout(() => navigate("/dashboard"), 0);

  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        background: "var(--bg-main)",
      }}
    >
      <div
        className="card-theme p-4"
        style={{ width: "360px" }}
      >
        <h5 className="fw-semibold mb-3">Sign in</h5>

        <label className="mb-1 text-secondary-theme">Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control mb-3"
          style={{
            backgroundColor: "var(--bg-main)",
            color: "var(--text-primary)",
            border: "1px solid var(--border-color)",
          }}
        />

        <label className="mb-1 text-secondary-theme">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control mb-4"
          style={{
            backgroundColor: "var(--bg-main)",
            color: "var(--text-primary)",
            border: "1px solid var(--border-color)",
          }}
        />

        <button
          className="btn btn-primary w-100"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
