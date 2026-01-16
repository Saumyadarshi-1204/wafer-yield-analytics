import React from "react";

function App() {
  return (
    <div
      className="min-vh-100"
      style={{
        background:
          "linear-gradient(135deg, #f4f7fa 0%, #e8eef5 100%)",
      }}
    >
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-white px-4 border-bottom">
        <span
          className="navbar-brand fw-semibold"
          style={{ color: "#2f5d8a" }}
        >
          Wafer Yield Analytics
        </span>

        <div className="ms-auto d-flex gap-4 align-items-center">
          <span className="text-muted small">Dashboard</span>
          <span className="text-muted small">Analytics</span>
          <button
            className="btn btn-sm"
            style={{
              border: "1px solid #2f5d8a",
              color: "#2f5d8a",
            }}
          >
            Login
          </button>
        </div>
      </nav>

      {/* HERO */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h1 className="fw-bold text-dark">
              Wafer Yield & Defect
              <br />
              <span style={{ color: "#2f5d8a" }}>
                Analysis Platform
              </span>
            </h1>

            <p className="text-muted mt-3">
              Analyze wafer yield, visualize defect patterns, and compare
              fabrication lots using standardized wafer map data.
            </p>

            <div className="mt-4 d-flex gap-3">
              <button
                className="btn px-4"
                style={{
                  backgroundColor: "#2f5d8a",
                  color: "#ffffff",
                }}
              >
                Open Dashboard
              </button>

              <button className="btn btn-outline-secondary px-4">
                View Capabilities
              </button>
            </div>
          </div>

          {/* WAFER VISUAL */}
          <div className="col-lg-5 d-flex justify-content-center mt-5 mt-lg-0">
            <div
              className="rounded-circle d-grid shadow-sm"
              style={{
                width: "240px",
                height: "240px",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "10px",
                padding: "32px",
                background:
                  "radial-gradient(circle, #ffffff 0%, #dde5ef 80%)",
              }}
            >
              {Array.from({ length: 25 }).map((_, i) => (
                <span
                  key={i}
                  className="rounded-circle"
                  style={{
                    background:
                      Math.random() > 0.2 ? "#6fbf73" : "#e5533d",
                  }}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="container pb-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="bg-white p-4 rounded shadow-sm h-100">
              <h6 className="fw-semibold" style={{ color: "#2f5d8a" }}>
                Yield Metrics
              </h6>
              <p className="text-muted small mb-0">
                Wafer and lot-level yield calculation.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="bg-white p-4 rounded shadow-sm h-100">
              <h6 className="fw-semibold" style={{ color: "#2f5d8a" }}>
                Defect Maps
              </h6>
              <p className="text-muted small mb-0">
                Spatial visualization of failure patterns.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="bg-white p-4 rounded shadow-sm h-100">
              <h6 className="fw-semibold" style={{ color: "#2f5d8a" }}>
                Lot Comparison
              </h6>
              <p className="text-muted small mb-0">
                Compare yield and defect distribution across lots.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-white border-top py-3">
        <div className="container d-flex justify-content-between small text-muted">
          <span>© 2026 Wafer Yield Analytics</span>
          <span>Internal Manufacturing Analytics Platform</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
