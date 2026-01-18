import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import KpiCard from "../components/KpiCard";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}>
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <main className="flex-grow-1">
        {/* TOP BAR */}
        <nav className="navbar bg-white border-bottom px-4 d-flex justify-content-between">
          <span className="fw-semibold" style={{ color: "#1f355e" }}>
            Dashboard Overview
          </span>

          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={handleLogout}
          >
            Logout
          </button>
        </nav>

        {/* CONTENT */}
        <div className="p-4">
          {/* KPI ROW */}
          <div className="row g-3 mb-4">
            <div className="col-md-3">
              <KpiCard title="Average Yield" value="— %" />
            </div>
            <div className="col-md-3">
              <KpiCard title="Total Wafers" value="—" />
            </div>
            <div className="col-md-3">
              <KpiCard title="Active Lots" value="—" />
            </div>
            <div className="col-md-3">
              <KpiCard title="Fail Density" value="—" />
            </div>
          </div>

          {/* PANELS */}
          <div className="row g-4">
            {/* TABLE */}
            <motion.div
              className="col-lg-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
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
            </motion.div>

            {/* WAFER MAP PLACEHOLDER */}
            <motion.div
              className="col-lg-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
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
                  Interactive wafer map will appear here
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
