import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      {/* TOP BAR */}
      <nav className="navbar bg-white border-bottom px-4 d-flex justify-content-between">
        <span className="fw-semibold" style={{ color: "#1f355e" }}>
          Wafer Yield Analytics — Dashboard
        </span>

        <button
          className="btn btn-sm btn-outline-secondary"
          onClick={handleLogout}
        >
          Logout
        </button>
      </nav>

      {/* CONTENT */}
      <div className="container-fluid p-4">
        <div className="row g-3 mb-4">
          <div className="col-md-3">
            <div className="bg-white border rounded p-3">
              <div className="text-muted small">Average Yield</div>
              <div className="fs-4 fw-semibold">— %</div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="bg-white border rounded p-3">
              <div className="text-muted small">Total Wafers</div>
              <div className="fs-4 fw-semibold">—</div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="bg-white border rounded p-3">
              <div className="text-muted small">Active Lots</div>
              <div className="fs-4 fw-semibold">—</div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="bg-white border rounded p-3">
              <div className="text-muted small">Fail Density</div>
              <div className="fs-4 fw-semibold">—</div>
            </div>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-7">
            <div className="bg-white border rounded p-3">
              <h6 className="fw-semibold mb-3">Recent Wafers</h6>
              <table className="table table-sm">
                <thead className="table-light">
                  <tr>
                    <th>Wafer ID</th>
                    <th>Lot ID</th>
                    <th>Yield %</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>—</td>
                    <td>—</td>
                    <td>—</td>
                    <td>—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="bg-white border rounded p-3 h-100">
              <h6 className="fw-semibold mb-3">Wafer Map Preview</h6>
              <div
                className="d-flex align-items-center justify-content-center text-muted"
                style={{
                  height: "240px",
                  backgroundColor: "#f1f4f8",
                  borderRadius: "6px",
                }}
              >
                Wafer map visualization will appear here
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
