import React from "react";

function Login() {
  return (
    <div
      className="min-vh-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#f8fafc" }}
    >
      <div
        className="bg-white p-4 rounded shadow-sm"
        style={{ width: "380px" }}
      >
        <h4 className="fw-semibold mb-3" style={{ color: "#1f355e" }}>
          Sign in
        </h4>

        <p className="text-muted small mb-4">
          Access the Wafer Yield Analytics dashboard
        </p>

        <div className="mb-3">
          <label className="form-label small text-muted">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
          />
        </div>

        <div className="mb-4">
          <label className="form-label small text-muted">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <button
          className="btn w-100"
          style={{
            backgroundColor: "#1f355e",
            color: "#ffffff",
          }}
        >
          Login
        </button>

        <div className="text-center mt-3">
          <span className="text-muted small">
            Authorized users only
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
