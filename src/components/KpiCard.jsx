import React from "react";
import { motion } from "framer-motion";

function KpiCard({ title, value }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white border rounded p-3 h-100"
    >
      <div className="text-muted small">{title}</div>
      <div className="fs-4 fw-semibold mt-1">{value}</div>
    </motion.div>
  );
}

export default KpiCard;
