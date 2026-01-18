import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}>
      {/* SIDEBAR */}
      <aside
        className="bg-white border-end p-3"
        style={{ width: "240px" }}
      >
        <h6 className="fw-semibold mb-4" style={{ color: "#1f355e" }}>
          Wafer Yield Analytics
        </h6>

        <div className="d-flex flex-column gap-2 small">
          <span className="fw-semibold text-primary">Dashboard</span>
          <span className="text-muted">Wafer Analysis</span>
          <span className="text-muted">Lot Comparison</span>
          <span className="text-muted">Data Upload</span>
        </div>

        <div className="mt-auto pt-4">
          <button
            className="btn btn-sm btn-outline-secondary w-100"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-grow-1">
        {/* TOP BAR */}
        <nav className="navbar bg-white border-bottom px-4">
          <span className="fw-semibold" style={{ color: "#1f355e" }}>
            Dashboard Overview
          </span>
        </nav>

        <div className="p-4">
          {/* KPI ROW */}
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

          {/* CONTENT PANELS */}
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
      </main>
    </div>
  );
}

export default Dashboard;
