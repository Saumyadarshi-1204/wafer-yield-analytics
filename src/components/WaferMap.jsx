import React from "react";
import { motion } from "framer-motion";

function WaferMap() {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="d-grid mx-auto"
      style={{
        width: "220px",
        height: "220px",
        gridTemplateColumns: "repeat(7, 1fr)",
        gap: "6px",
        padding: "28px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle at center, #ffffff 0%, #e6ebf2 75%)",
      }}
    >
      {Array.from({ length: 49 }).map((_, i) => (
        <motion.span
          key={i}
          whileHover={{ scale: 1.15 }}
          className="rounded-circle"
          style={{
            background:
              Math.random() > 0.2 ? "#2f80ed" : "#e5533d",
          }}
        />
      ))}
    </motion.div>
  );
}

export default WaferMap;
