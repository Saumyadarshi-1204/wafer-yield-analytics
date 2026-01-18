import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";

function DataUpload() {
  const [rows, setRows] = useState([]);

  /* Simulated CSV upload */
  const handleUpload = () => {
    const mockData = [
      { id: 1, lot: "LOT-2001", wafer: "WF-01", yield: 93 },
      { id: 2, lot: "LOT-2001", wafer: "WF-02", yield: 91 },
      { id: 3, lot: "LOT-2002", wafer: "WF-01", yield: 88 },
    ];
    setRows(mockData);
  };

  const deleteRow = (id) => {
    setRows(rows.filter((r) => r.id !== id));
  };

  const clearAll = () => {
    setRows([]);
  };

  return (
    <MainLayout>
      <div className="container-fluid p-4">
        <h5 className="fw-semibold mb-4">Data Upload</h5>

        {/* CREATE */}
        <div className="card-theme rounded p-3 mb-4" style={{ maxWidth: "520px" }}>
          <p className="text-secondary-theme mb-3">
            Upload wafer-level data (CSV format).
          </p>

          <button className="btn btn-primary me-2" onClick={handleUpload}>
            Upload CSV
          </button>

          {rows.length > 0 && (
            <button
              className="btn btn-outline-danger"
              onClick={clearAll}
            >
              Clear All
            </button>
          )}
        </div>

        {/* READ + DELETE */}
        {rows.length > 0 && (
          <div className="card-theme rounded p-3">
            <h6 className="fw-semibold mb-3">Uploaded Data Preview</h6>

            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                  <th style={{ padding: "10px", color: "var(--text-secondary)" }}>
                    Lot ID
                  </th>
                  <th style={{ padding: "10px", color: "var(--text-secondary)" }}>
                    Wafer ID
                  </th>
                  <th style={{ padding: "10px", color: "var(--text-secondary)" }}>
                    Yield (%)
                  </th>
                  <th style={{ padding: "10px" }}></th>
                </tr>
              </thead>

              <tbody>
                {rows.map((r) => (
                  <tr key={r.id} style={{ borderBottom: "1px solid var(--border-color)" }}>
                    <td style={{ padding: "10px" }}>{r.lot}</td>
                    <td style={{ padding: "10px" }}>{r.wafer}</td>
                    <td style={{ padding: "10px" }}>{r.yield}</td>
                    <td style={{ padding: "10px" }}>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => deleteRow(r.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </MainLayout>
  );
}

export default DataUpload;
