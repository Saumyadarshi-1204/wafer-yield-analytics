import React from "react";

function App() {
  return (
    <div className="bg-dark text-light min-vh-100">
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark px-4">
        <span className="navbar-brand fw-semibold">
          Wafer Yield Analytics
        </span>
      </nav>

      {/* HERO */}
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold">
              Semiconductor <span className="text-primary">Wafer Yield</span>
              <br />
              Analytics System
            </h1>

            <p className="text-secondary mt-3">
              Post-fabrication yield analysis and defect pattern visualization
              using real-world wafer map datasets.
            </p>

            <div className="mt-4">
              <button className="btn btn-primary me-3 px-4">
                View Dashboard
              </button>
              <button className="btn btn-outline-light px-4">
                Learn More
              </button>
            </div>
          </div>

          {/* VISUAL */}
          <div className="col-lg-6 d-flex justify-content-center">
            <div
              className="rounded-circle d-grid"
              style={{
                width: "260px",
                height: "260px",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "14px",
                padding: "40px",
                background:
                  "radial-gradient(circle, #1b2040 0%, #0b0f1a 70%)",
              }}
            >
              <span className="bg-success rounded-circle"></span>
              <span className="bg-danger rounded-circle"></span>
              <span className="bg-success rounded-circle"></span>
              <span className="bg-success rounded-circle"></span>
              <span className="bg-danger rounded-circle"></span>
              <span className="bg-success rounded-circle"></span>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div className="container pb-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card bg-secondary bg-opacity-10 text-light h-100">
              <div className="card-body">
                <h5 className="card-title">Yield Analytics</h5>
                <p className="card-text text-secondary">
                  Wafer-level and lot-level yield computation with trends.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card bg-secondary bg-opacity-10 text-light h-100">
              <div className="card-body">
                <h5 className="card-title">Defect Visualization</h5>
                <p className="card-text text-secondary">
                  Spatial wafer maps highlighting real defect patterns.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card bg-secondary bg-opacity-10 text-light h-100">
              <div className="card-body">
                <h5 className="card-title">Industry Datasets</h5>
                <p className="card-text text-secondary">
                  Built on large-scale real semiconductor wafer data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="text-center text-secondary py-3">
        Wafer Yield Analytics System · MERN Stack Project
      </footer>
    </div>
  );
}

export default App;
