import React from "react";
import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";

function WaferAnalysis() {
  const dies = Array.from({ length: 121 }); // 11x11 wafer grid

  return (
    <MainLayout>
      <div className="container-fluid p-4">
        <h5 className="fw-semibold mb-4">Wafer Analysis</h5>

        <div
          className="mx-auto d-grid"
          style={{
            width: "420px",
            height: "420px",
            gridTemplateColumns: "repeat(11, 1fr)",
            gap: "6px",
            padding: "40px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle at center, var(--bg-card), var(--border-color))",
            border: "1px solid var(--border-color)",
          }}
        >
          {dies.map((_, idx) => {
            const isDefect = Math.random() < 0.18;

            return (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.2 }}
                title={`Die ${idx + 1} | ${isDefect ? "Defect" : "Good"}`}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: isDefect
                    ? "#e5533d"
                    : "var(--accent)",
                  opacity: isDefect ? 0.9 : 0.85,
                  cursor: "pointer",
                }}
              />
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
}

export default WaferAnalysis;
