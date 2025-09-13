import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

function Dashboard({ products }) {
  return (
    <div className="dashboard">
      <h2>📊 Stock Levels</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={products}>
          <XAxis dataKey="title" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="quantity" fill="#4CAF50" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Dashboard;
