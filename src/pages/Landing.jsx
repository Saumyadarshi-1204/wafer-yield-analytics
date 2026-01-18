import React from "react";
import { motion } from "framer-motion";
import MainLayout from "../layouts/MainLayout";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <section className="container py-5">
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="fw-bold" style={{ color: "#1f355e" }}>
              Semiconductor
              <br />
              Wafer Yield Intelligence
            </h1>

            <p className="text-muted mt-3">
              Advanced manufacturing analytics for yield monitoring,
              defect visualization, and lot-level comparison.
            </p>

            <button
              className="btn mt-3 px-4"
              style={{ backgroundColor: "#1f355e", color: "#fff" }}
              onClick={() => navigate("/login")}
            >
              Access Dashboard
            </button>
          </motion.div>

          {/* RIGHT: ANIMATED WAFER METAPHOR */}
          <motion.div
            className="col-lg-6 d-flex justify-content-center mt-5 mt-lg-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 40,
                ease: "linear",
              }}
              className="d-grid"
              style={{
                width: "280px",
                height: "280px",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: "8px",
                padding: "36px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle at center, #ffffff 0%, #e6ebf2 75%)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              {Array.from({ length: 49 }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0.4 }}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 3 + (i % 5),
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    background:
                      Math.random() > 0.25 ? "#2f80ed" : "#e5533d",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Landing;
