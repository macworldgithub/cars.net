'use client';

import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts';

const data = [
  { feature: 'Safety Tech', value: 89 },
  { feature: 'Hybrid Engine', value: 76 },
  { feature: 'Infotainment', value: 72 },
  { feature: 'AWD System', value: 68 },
  { feature: 'Autonomous', value: 55 },
  { feature: 'Performance', value: 48 },
];

export default function Step3() {
  return (
    <div className="bg-[#0d1a2d] text-white px-4 md:px-12 py-6 space-y-6">
      {/* Heading */}
      <div className=" mb-6">
        <h2 className="text-xl font-bold flex items-center space-x-2">
          <span>👤</span>
          <span>Consumer Insights</span>
        </h2>
        <p className="text-sm text-gray-300 mt-1">
          Popular features driving purchase decisions
        </p>
      </div>

      {/* Chart */}
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 30 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
            <XAxis
              dataKey="feature"
              tick={{ fill: '#d1d5db', fontSize: 12 }}
              interval={0}
              angle={-30}
              textAnchor="end"
            />
            <YAxis
              tick={{ fill: '#d1d5db', fontSize: 12 }}
              label={{
                value: 'Preference %',
                angle: -90,
                position: 'insideLeft',
                fill: '#d1d5db',
                fontSize: 12,
              }}
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
              labelStyle={{ color: '#fff' }}
              cursor={{ fill: 'rgba(255,255,255,0.1)' }}
            />
            <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Tags with values */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm mt-6">
        <div className="bg-gray-800 px-3 py-2 rounded-lg flex justify-between">
          <span>Safety Tech</span><span className="font-bold">89%</span>
        </div>
        <div className="bg-gray-800 px-3 py-2 rounded-lg flex justify-between">
          <span>Hybrid Engine</span><span className="font-bold">76%</span>
        </div>
        <div className="bg-gray-800 px-3 py-2 rounded-lg flex justify-between">
          <span>Infotainment</span><span className="font-bold">72%</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium w-full sm:w-auto">
          📄 Generate Report (PDF/CSV)
        </button>
        <button className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-lg font-medium w-full sm:w-auto">
          🗓 Schedule Weekly Report
        </button>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium w-full sm:w-auto">
          ⚡ Upgrade to Enterprise
        </button>
      </div>
    </div>
  );
}
