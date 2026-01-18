import React from "react";
import MainLayout from "../layouts/MainLayout";
import Sidebar from "../components/Sidebar";
import KpiCard from "../components/KpiCard";
import YieldChart from "../components/YieldChart";
import WaferMap from "../components/WaferMap";

function Dashboard() {
  return (
    <MainLayout>
      <div className="d-flex" style={{ minHeight: "calc(100vh - 56px)" }}>
        <Sidebar />

        <div className="flex-grow-1 p-4">
          <h5 className="fw-semibold mb-1">Dashboard Overview</h5>
          <p className="text-secondary-theme subtle-repeat mb-4">
            High-level snapshot of yield health and manufacturing activity.
          </p>

          <div className="row g-3 mb-4">
            <div className="col-lg-3 col-md-6">
              <KpiCard title="Average Yield" value="92 %" />
            </div>
            <div className="col-lg-3 col-md-6">
              <KpiCard title="Total Wafers" value="128" />
            </div>
            <div className="col-lg-3 col-md-6">
              <KpiCard title="Active Lots" value="4" />
            </div>
            <div className="col-lg-3 col-md-6">
              <KpiCard title="Fail Density" value="Low" />
            </div>
          </div>

          <div className="row g-4 mb-4">
            <div className="col-lg-7">
              <div className="card-theme p-3 rounded">
                <h6 className="fw-semibold mb-1">Yield Trend by Lot</h6>
                <p className="text-secondary-theme subtle-repeat mb-3">
                  Compare yield performance across production lots.
                </p>
                <YieldChart />
              </div>
            </div>

            <div className="col-lg-5">
              <div className="card-theme p-3 rounded">
                <h6 className="fw-semibold mb-1">Wafer Map Preview</h6>
                <p className="text-secondary-theme subtle-repeat mb-3">
                  Visual inspection of spatial defect distribution.
                </p>
                <WaferMap />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Dashboard;
