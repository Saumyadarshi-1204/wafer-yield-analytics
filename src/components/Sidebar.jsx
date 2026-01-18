import React from "react";
import { motion } from "framer-motion";

function Sidebar() {
  return (
    <motion.aside
      initial={{ x: -30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sidebar-theme p-3"
      style={{ width: "240px" }}
    >
      <h6 className="fw-semibold mb-4 text-secondary-theme">
        Navigation
      </h6>

      <div className="d-flex flex-column gap-3 small">
        <span style={{ color: "var(--accent)", fontWeight: 600 }}>
          Dashboard
        </span>
        <span className="text-secondary-theme">Wafer Analysis</span>
        <span className="text-secondary-theme">Lot Comparison</span>
        <span className="text-secondary-theme">Data Upload</span>
      </div>
    </motion.aside>
  );
}

export default Sidebar;
