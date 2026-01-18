import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Sidebar from "../components/Sidebar";
import KpiCard from "../components/KpiCard";
import WaferMap from "../components/WaferMap";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="d-flex"
      style={{ minHeight: "100vh", backgroundColor: "#f8fafc" }}
    >
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
          {/* KPI ROW — ALWAYS VISIBLE */}
          <div className="row g-3 mb-4">
            <div className="col-lg-3 col-md-6">
              <KpiCard title="Average Yield" value="— %" />
            </div>
            <div className="col-lg-3 col-md-6">
              <KpiCard title="Total Wafers" value="—" />
            </div>
            <div className="col-lg-3 col-md-6">
              <KpiCard title="Active Lots" value="—" />
            </div>
            <div className="col-lg-3 col-md-6">
              <KpiCard title="Fail Density" value="—" />
            </div>
          </div>

          {/* PANELS */}
          <div className="row g-4">
            {/* TABLE */}
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

            {/* WAFER MAP */}
            <div className="col-lg-5">
              <div className="bg-white border rounded p-3 h-100">
                <h6 className="fw-semibold mb-3">Wafer Map Preview</h6>
                <WaferMap />
              </div>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}

export default Dashboard;
