import React from "react";

function App() {
  return (
    <div style={{ backgroundColor: "#f8fafc" }}>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg bg-white border-bottom">
        <div className="container">
          <span
            className="navbar-brand fw-bold"
            style={{ color: "#1f355e", letterSpacing: "0.3px" }}
          >
            Wafer Yield Analytics
          </span>

          <div className="ms-auto d-flex align-items-center gap-4">
            <span className="text-muted small">Dashboard</span>
            <span className="text-muted small">Analytics</span>
            <span className="text-muted small">Solutions</span>
            <button className="btn btn-outline-primary btn-sm px-3">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1
              className="fw-bold mb-3"
              style={{ color: "#1f355e", lineHeight: "1.25" }}
            >
              Semiconductor
              <br />
              Wafer Yield Intelligence
            </h1>

            <p className="text-secondary fs-6 mb-4">
              A manufacturing analytics platform to evaluate wafer yield,
              visualize defect patterns, and support fabrication quality
              decisions using large-scale wafer map data.
            </p>

            <div className="d-flex gap-3">
              <button
                className="btn px-4"
                style={{
                  backgroundColor: "#1f355e",
                  color: "#ffffff",
                }}
              >
                Access Dashboard
              </button>
              <button className="btn btn-outline-secondary px-4">
                Explore Capabilities
              </button>
            </div>
          </div>

          {/* HERO VISUAL */}
          <div className="col-lg-6 d-flex justify-content-center mt-5 mt-lg-0">
            <div
              className="rounded-circle d-grid shadow-sm"
              style={{
                width: "300px",
                height: "300px",
                gridTemplateColumns: "repeat(6, 1fr)",
                gap: "8px",
                padding: "40px",
                background:
                  "radial-gradient(circle, #ffffff 0%, #e6ebf2 80%)",
              }}
            >
              {Array.from({ length: 36 }).map((_, i) => (
                <span
                  key={i}
                  className="rounded-circle"
                  style={{
                    background:
                      Math.random() > 0.22 ? "#2f80ed" : "#e5533d",
                  }}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="bg-white py-5 border-top border-bottom">
        <div className="container">
          <div className="row text-center mb-4">
            <h4 className="fw-semibold" style={{ color: "#1f355e" }}>
              Designed for Manufacturing & Yield Engineers
            </h4>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 h-100">
                <h6 className="fw-semibold mb-2" style={{ color: "#1f355e" }}>
                  Yield Analysis
                </h6>
                <p className="text-muted small mb-0">
                  Compute wafer-level and lot-level yield directly from
                  die-level test results.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 h-100">
                <h6 className="fw-semibold mb-2" style={{ color: "#1f355e" }}>
                  Defect Pattern Visualization
                </h6>
                <p className="text-muted small mb-0">
                  Inspect spatial defect distributions across wafers using
                  industry-standard maps.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="p-4 h-100">
                <h6 className="fw-semibold mb-2" style={{ color: "#1f355e" }}>
                  Lot Comparison
                </h6>
                <p className="text-muted small mb-0">
                  Compare yield trends and defect density across fabrication
                  lots.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container py-5">
        <div className="row mb-4">
          <h4 className="fw-semibold text-center" style={{ color: "#1f355e" }}>
            How the Platform Works
          </h4>
        </div>

        <div className="row g-4 text-center">
          <div className="col-md-3">
            <p className="fw-semibold mb-1">Ingest</p>
            <p className="text-muted small">Upload wafer test datasets</p>
          </div>
          <div className="col-md-3">
            <p className="fw-semibold mb-1">Process</p>
            <p className="text-muted small">Normalize die-level data</p>
          </div>
          <div className="col-md-3">
            <p className="fw-semibold mb-1">Analyze</p>
            <p className="text-muted small">Compute yield and defects</p>
          </div>
          <div className="col-md-3">
            <p className="fw-semibold mb-1">Visualize</p>
            <p className="text-muted small">Inspect wafer maps & trends</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-top py-3">
        <div className="container d-flex justify-content-between small text-muted">
          <span>© 2026 Wafer Yield Analytics</span>
          <span>Manufacturing Yield Intelligence Platform</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
