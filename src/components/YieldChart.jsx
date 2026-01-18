import React from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from "recharts";

const data = [
  { name: "Lot A", yield: 92 },
  { name: "Lot B", yield: 88 },
  { name: "Lot C", yield: 94 },
  { name: "Lot D", yield: 90 },
];

function YieldChart() {
  return (
    <div style={{ width: "100%", height: 220 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="yield" stroke="#1f355e" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default YieldChart;
