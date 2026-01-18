import React from "react";
import { motion } from "framer-motion";
import MainLayout from "../layouts/MainLayout";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  // AUTH-AWARE CTA (unchanged logic)
  const handleAccessDashboard = () => {
    const isAuthenticated = localStorage.getItem("isAuth") === "true";
    navigate(isAuthenticated ? "/dashboard" : "/login");
  };

  return (
    <MainLayout>
      {/* ===== HERO BACKGROUND LAYER ===== */}
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* animated gradient blobs */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `
              radial-gradient(600px at 20% 30%, rgba(59,130,246,0.18), transparent 40%),
              radial-gradient(600px at 80% 70%, rgba(14,165,233,0.16), transparent 45%)
            `,
            animation: "floatBg 20s ease-in-out infinite",
            zIndex: 0,
          }}
        />

        {/* ===== HERO SECTION ===== */}
        <section
          className="container py-5"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="row align-items-center">
            {/* LEFT — TEXT */}
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span
                style={{
                  display: "inline-block",
                  padding: "6px 12px",
                  borderRadius: "999px",
                  background: "rgba(59,130,246,0.15)",
                  color: "var(--accent)",
                  fontSize: "0.85rem",
                  marginBottom: "14px",
                }}
              >
                Semiconductor Analytics Platform
              </span>

              <h1
                className="fw-bold text-primary-theme"
                style={{ lineHeight: 1.15 }}
              >
                Intelligence for
                <br />
                <span style={{ color: "var(--accent)" }}>
                  Wafer Yield & Defect Analysis
                </span>
              </h1>

              <p
                className="text-secondary-theme mt-3"
                style={{ maxWidth: "520px" }}
              >
                A modern analytics workspace for semiconductor manufacturing —
                track yield performance, visualize wafer-level defects, and
                compare fabrication lots with clarity.
              </p>

              <div className="d-flex gap-3 mt-4">
                <button
                  className="btn btn-primary px-4"
                  onClick={handleAccessDashboard}
                >
                  Access Dashboard
                </button>

              </div>

              <p
                className="text-secondary-theme subtle-repeat mt-4"
                style={{ maxWidth: "520px" }}
              >
                Built for process engineers, yield analysts, and manufacturing
                teams.
              </p>
            </motion.div>

            {/* RIGHT — WAFER VISUAL (UNCHANGED CORE, ENHANCED CONTEXT) */}
            <div className="col-lg-6 d-flex justify-content-center mt-5 mt-lg-0">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                className="d-grid"
                style={{
                  width: "300px",
                  height: "300px",
                  gridTemplateColumns: "repeat(7, 1fr)",
                  gap: "8px",
                  padding: "40px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle at center, var(--bg-card), var(--border-color))",
                  border: "1px solid var(--border-color)",
                  boxShadow:
                    "0 0 40px rgba(59,130,246,0.15)",
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

        {/* ===== FEATURES SECTION ===== */}
        <section
          id="features"
          className="container py-5"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div className="row text-center mb-4">
            <div className="col">
              <h3 className="fw-semibold">What you can do</h3>
              <p className="text-secondary-theme subtle-repeat mt-2">
                Core capabilities designed around real semiconductor workflows.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {[
              {
                title: "Yield Monitoring",
                desc: "Track average yield, lot performance, and high-level KPIs in one place.",
              },
              {
                title: "Wafer Map Analysis",
                desc: "Visualize spatial defect patterns to identify process anomalies.",
              },
              {
                title: "Lot Comparison",
                desc: "Compare fabrication lots and manage lot-level metrics efficiently.",
              },
            ].map((f, i) => (
              <div className="col-md-4" key={i}>
                <div className="card-theme p-4 h-100 rounded">
                  <h6 className="fw-semibold mb-2">{f.title}</h6>
                  <p className="text-secondary-theme subtle-repeat">
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== FOOTER STRIP ===== */}
        <section
          className="container py-4"
          style={{ position: "relative", zIndex: 1 }}
        >
          <div
            className="text-center text-secondary-theme subtle-repeat"
            style={{ fontSize: "0.85rem" }}
          >
            © 2026 Wafer Yield Analytics · Internal Manufacturing Intelligence
          </div>
        </section>
      </div>
    </MainLayout>
  );
}

export default Landing;
