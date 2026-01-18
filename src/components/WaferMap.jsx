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
        padding: "26px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle at center, var(--bg-card), var(--border-color))",
        border: "1px solid var(--border-color)",
      }}
    >
      {Array.from({ length: 49 }).map((_, i) => {
        const isDefect = Math.random() < 0.2;

        return (
          <motion.span
            key={i}
            whileHover={{ scale: 1.15 }}
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              background: isDefect
                ? "#e5533d"                 /* defect die */
                : "var(--accent)",          /* good die follows theme */
              opacity: isDefect ? 0.9 : 0.85,
            }}
          />
        );
      })}
    </motion.div>
  );
}

export default WaferMap;
