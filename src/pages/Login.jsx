import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // FORCE auth flag
    localStorage.setItem("isAuth", "true");
    navigate("/dashboard", { replace: true });
  };

  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#f8fafc" }}
    >
      <div className="bg-white p-4 rounded shadow-sm" style={{ width: "380px" }}>
        <h4 className="fw-semibold mb-3" style={{ color: "#1f355e" }}>
          Sign in
        </h4>

        <div className="mb-3">
          <label className="form-label small text-muted">Username</label>
          <input type="text" className="form-control" />
        </div>

        <div className="mb-4">
          <label className="form-label small text-muted">Password</label>
          <input type="password" className="form-control" />
        </div>

        <button
          className="btn w-100"
          style={{ backgroundColor: "#1f355e", color: "#fff" }}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
