import React from "react";
import MainLayout from "../layouts/MainLayout";

function LotComparison() {
  const lots = [
    { lot: "LOT-1001", avgYield: 92, wafers: 32 },
    { lot: "LOT-1002", avgYield: 88, wafers: 30 },
    { lot: "LOT-1003", avgYield: 94, wafers: 34 },
  ];

  return (
    <MainLayout>
      <div className="container-fluid p-4">
        <h5 className="fw-semibold mb-4">Lot Comparison</h5>

        <div className="card-theme rounded p-3">
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr
                style={{
                  borderBottom: "1px solid var(--border-color)",
                }}
              >
                <th
                  style={{
                    textAlign: "left",
                    padding: "10px",
                    color: "var(--text-secondary)",
                    fontWeight: 500,
                  }}
                >
                  Lot ID
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "10px",
                    color: "var(--text-secondary)",
                    fontWeight: 500,
                  }}
                >
                  Average Yield (%)
                </th>
                <th
                  style={{
                    textAlign: "left",
                    padding: "10px",
                    color: "var(--text-secondary)",
                    fontWeight: 500,
                  }}
                >
                  Total Wafers
                </th>
              </tr>
            </thead>

            <tbody>
              {lots.map((lot) => (
                <tr
                  key={lot.lot}
                  style={{
                    borderBottom: "1px solid var(--border-color)",
                  }}
                >
                  <td
                    style={{
                      padding: "10px",
                      color: "var(--text-primary)",
                    }}
                  >
                    {lot.lot}
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      color: "var(--text-primary)",
                    }}
                  >
                    {lot.avgYield}
                  </td>
                  <td
                    style={{
                      padding: "10px",
                      color: "var(--text-primary)",
                    }}
                  >
                    {lot.wafers}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
}

export default LotComparison;
