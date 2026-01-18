import React from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="sidebar-theme p-3" style={{ width: "240px" }}>
      <h6 className="fw-semibold mb-4 text-secondary-theme">
        Navigation
      </h6>

      <div className="d-flex flex-column gap-3 small">
        <span style={{ cursor: "pointer" }} onClick={() => navigate("/dashboard")}>
          Dashboard
        </span>

        <span style={{ cursor: "pointer" }} onClick={() => navigate("/wafer-analysis")}>
          Wafer Analysis
        </span>

        <span
          style={{ cursor: "pointer", color: "var(--accent)" }}
          onClick={() => navigate("/lot-comparison")}
        >
          Lot Comparison
        </span>

        <span className="text-secondary-theme">Data Upload</span>
      </div>
    </aside>
  );
}

export default Sidebar;
