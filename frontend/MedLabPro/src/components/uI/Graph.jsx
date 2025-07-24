import React from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", Patients: 30, Revenue: 2400 },
  { name: "Feb", Patients: 45, Revenue: 2210 },
  { name: "Mar", Patients: 60, Revenue: 2290 },
  { name: "Apr", Patients: 50, Revenue: 2000 },
  { name: "May", Patients: 70, Revenue: 2181 },
  { name: "Jun", Patients: 65, Revenue: 2500 },
];

const Graph = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-4xl mx-auto my-8">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Monthly Patient Count & Revenue</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 30, bottom: 5, left: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Revenue" stroke="#8884d8" strokeWidth={2} />
          <Line type="monotone" dataKey="Patients" stroke="#82ca9d" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
