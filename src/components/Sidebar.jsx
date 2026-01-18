import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const itemStyle = (path) => ({
    cursor: "pointer",
    fontWeight: isActive(path) ? 600 : 400,
    color: isActive(path) ? "var(--accent)" : "var(--text-primary)",
  });

  return (
    <aside className="sidebar-theme p-3" style={{ width: "240px" }}>
      <h6 className="fw-semibold mb-4 text-secondary-theme">
        Navigation
      </h6>

      <div className="d-flex flex-column gap-3 small">
        <span
          style={itemStyle("/dashboard")}
          onClick={() => navigate("/dashboard")}
        >
          Dashboard
        </span>

        <span
          style={itemStyle("/wafer-analysis")}
          onClick={() => navigate("/wafer-analysis")}
        >
          Wafer Analysis
        </span>

        <span
          style={itemStyle("/lot-comparison")}
          onClick={() => navigate("/lot-comparison")}
        >
          Lot Comparison
        </span>

        <span
          style={itemStyle("/data-upload")}
          onClick={() => navigate("/data-upload")}
        >
          Data Upload
        </span>
      </div>
    </aside>
  );
}

export default Sidebar;
