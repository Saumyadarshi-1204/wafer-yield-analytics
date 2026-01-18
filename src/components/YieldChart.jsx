import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { lot: "Lot A", yield: 92 },
  { lot: "Lot B", yield: 88 },
  { lot: "Lot C", yield: 94 },
  { lot: "Lot D", yield: 90 },
];

function YieldChart() {
  return (
    <div style={{ width: "100%", height: 240 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid stroke="var(--border-color)" strokeDasharray="3 3" />
          <XAxis dataKey="lot" stroke="var(--text-secondary)" />
          <YAxis stroke="var(--text-secondary)" domain={[80, 100]} />

          <Tooltip
            contentStyle={{
              backgroundColor: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              color: "var(--text-primary)",
              borderRadius: "6px",
            }}
            labelStyle={{ color: "var(--text-secondary)" }}
            itemStyle={{ color: "var(--text-primary)" }}
          />

          <Line
            type="monotone"
            dataKey="yield"
            stroke="var(--accent)"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default YieldChart;
