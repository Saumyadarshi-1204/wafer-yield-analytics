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
          {/* LEFT TEXT */}
          <motion.div
            className="col-lg-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h1 className="fw-bold text-primary-theme">
              Semiconductor
              <br />
              Wafer Yield Intelligence
            </h1>

            <p className="text-secondary-theme mt-3">
              Advanced manufacturing analytics for yield monitoring,
              defect visualization, and lot-level comparison.
            </p>

            <button
              className="btn btn-primary mt-3"
              onClick={() => navigate("/dashboard")}
            >
              Access Dashboard
            </button>
          </motion.div>

          {/* RIGHT WAFER */}
          <div className="col-lg-6 d-flex justify-content-center mt-5 mt-lg-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
              className="d-grid"
              style={{
                width: "280px",
                height: "280px",
                gridTemplateColumns: "repeat(7, 1fr)",
                gap: "8px",
                padding: "36px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle at center, var(--bg-card), var(--border-color))",
                border: "1px solid var(--border-color)",
              }}
            >
              {Array.from({ length: 49 }).map((_, i) => (
                <span
                  key={i}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    background:
                      Math.random() > 0.25
                        ? "var(--accent)"
                        : "#e5533d",
                    opacity: 0.9,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Landing;
