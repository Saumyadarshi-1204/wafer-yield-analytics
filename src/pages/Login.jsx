import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = () => {
    if (!username || !password) return;
    login();
    navigate("/dashboard", { replace: true });
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh", background: "var(--bg-main)" }}
    >
      <div className="card-theme p-4" style={{ width: "360px" }}>
        <h5 className="fw-semibold mb-3">Sign in</h5>

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

        <button className="btn btn-primary w-100" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
