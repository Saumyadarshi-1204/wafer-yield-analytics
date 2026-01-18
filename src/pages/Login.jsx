import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("isAuth", "true");
    navigate("/dashboard");
  };

  return (
    <MainLayout>
      <div className="d-flex justify-content-center align-items-center py-5">
        <div
          className="card-theme p-4 rounded"
          style={{ width: "380px" }}
        >
          <h4 className="fw-semibold mb-3">Sign in</h4>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label text-secondary-theme">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                style={{
                  backgroundColor: "var(--bg-main)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border-color)",
                }}
              />
            </div>

            <div className="mb-4">
              <label className="form-label text-secondary-theme">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                style={{
                  backgroundColor: "var(--bg-main)",
                  color: "var(--text-primary)",
                  border: "1px solid var(--border-color)",
                }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}

export default Login;
