import React from "react";

function KpiCard({ title, value }) {
  return (
    <div className="card-theme rounded p-3 h-100">
      <div
        className="text-secondary-theme"
        style={{ fontSize: "0.85rem" }}
      >
        {title}
      </div>

      <div
        className="mt-2"
        style={{
          fontSize: "1.6rem",
          fontWeight: 600,
          color: "var(--text-primary)",
        }}
      >
        {value}
      </div>
    </div>
  );
}

export default KpiCard;
