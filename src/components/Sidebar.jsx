import React from "react";
import { motion } from "framer-motion";

function Sidebar() {
  return (
    <motion.aside
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white border-end p-3"
      style={{ width: "240px" }}
    >
      <h6 className="fw-semibold mb-4" style={{ color: "#1f355e" }}>
        Navigation
      </h6>

      <div className="d-flex flex-column gap-3 small">
        <span className="fw-semibold text-primary">Dashboard</span>
        <span className="text-muted">Wafer Analysis</span>
        <span className="text-muted">Lot Comparison</span>
        <span className="text-muted">Data Upload</span>
      </div>
    </motion.aside>
  );
}

export default Sidebar;
