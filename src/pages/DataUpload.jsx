import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";

function DataUpload() {
  const [rows, setRows] = useState([]);

  const handleUpload = () => {
    setRows([
      { id: 1, lot: "LOT-2001", wafer: "WF-01", yield: 93 },
      { id: 2, lot: "LOT-2001", wafer: "WF-02", yield: 91 },
      { id: 3, lot: "LOT-2002", wafer: "WF-01", yield: 88 },
    ]);
  };

  return (
    <MainLayout>
      <div className="container-fluid p-4">
        <h5 className="fw-semibold mb-1">Data Upload</h5>
        <p className="text-secondary-theme subtle-repeat mb-4">
          Import wafer-level datasets for downstream analysis.
        </p>

        <div className="card-theme rounded p-3 mb-4" style={{ maxWidth: "520px" }}>
          <p className="text-secondary-theme subtle-repeat mb-3">
            CSV files should contain lot ID, wafer ID, and yield values.
          </p>

          <button className="btn btn-primary" onClick={handleUpload}>
            Upload CSV
          </button>
        </div>
      </div>
    </MainLayout>
  );
}

export default DataUpload;
