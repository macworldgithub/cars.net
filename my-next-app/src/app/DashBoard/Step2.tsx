// components/ValuationAndDemand.tsx
"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { MapPin, TrendingUp } from "lucide-react";

const chartData = [
  { month: "Jan", retail: 30000, wholesale: 28000 },
  { month: "Feb", retail: 31000, wholesale: 29000 },
  { month: "Mar", retail: 32000, wholesale: 30000 },
  { month: "Apr", retail: 35000, wholesale: 33000 },
  { month: "May", retail: 37000, wholesale: 35000 },
  { month: "Jun", retail: 40000, wholesale: 38000 },
  { month: "Jul", retail: 42000, wholesale: 39000 },
  { month: "Aug", retail: 44000, wholesale: 41000 },
  { month: "Sep", retail: 43000, wholesale: 40500 },
  { month: "Oct", retail: 46000, wholesale: 43000 },
  { month: "Nov", retail: 47000, wholesale: 44000 },
  { month: "Dec", retail: 49000, wholesale: 46000 },
];

const heatmapData = [
  { region: "Texas", percent: 94, type: "SUVs", color: "bg-red-500" },
  { region: "California", percent: 91, type: "Electric Vehicles", color: "bg-red-400" },
  { region: "Florida", percent: 87, type: "Trucks", color: "bg-orange-400" },
  { region: "New York", percent: 84, type: "Hybrids", color: "bg-orange-300" },
  { region: "Illinois", percent: 79, type: "Sedans", color: "bg-yellow-400" },
];

const Step2 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Valuation Trends */}
      <div className="bg-[#12233d] p-5 rounded-lg">
        <h2 className="text-lg font-semibold mb-1 flex items-center gap-2">
          <TrendingUp className="text-blue-400 w-5 h-5" /> Valuation Trends
        </h2>
        <p className="text-sm text-gray-400 mb-4">Tesla Model 3 pricing trends in USA</p>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid stroke="#2c3e50" />
            <XAxis dataKey="month" stroke="#cbd5e1" />
            <YAxis stroke="#cbd5e1" />
            <Tooltip contentStyle={{ backgroundColor: "#1e293b", borderColor: "#334155" }} />
            <Legend />
            <Line type="monotone" dataKey="retail" stroke="#3b82f6" strokeWidth={2} name="Retail Price" />
            <Line type="monotone" dataKey="wholesale" stroke="#06b6d4" strokeWidth={2} name="Wholesale Price" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Demand Heatmap */}
      <div className="bg-[#12233d] p-5 rounded-lg">
        <h2 className="text-lg font-semibold mb-1 flex items-center gap-2">
          <MapPin className="text-blue-300 w-5 h-5" /> Demand Heatmap
        </h2>
        <p className="text-sm text-gray-400 mb-4">High-demand regions in USA</p>

        <div className="space-y-3">
          {heatmapData.map((item, idx) => (
            <div key={idx} className="bg-[#1e2e44] p-3 rounded flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${item.color}`} />
                <div className="text-white font-medium">{item.region}</div>
              </div>
              <div className="text-right">
                <p className="text-white font-semibold">{item.percent}%</p>
                <p className="text-sm text-gray-400">{item.type}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Regional Insight */}
        <div className="bg-[#1a2d4a] mt-4 p-4 rounded-lg text-blue-300 text-sm flex items-start gap-2">
          <TrendingUp className="w-4 h-4 mt-1" />
          <div>
            <strong>Regional Insight</strong><br />
            SUVs dominate Texas market with 94% demand preference
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
