// src/app/DashBoard/Step1.tsx
import React from "react";
import { FiMenu, FiLogOut } from "react-icons/fi";
import { BsSun } from "react-icons/bs";

const Step1 = () => {
  return (
    <div className="text-white px-4 md:px-12 py-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        {/* Left: Menu Icon + Title */}
        <div className="flex items-center gap-3">
          <FiMenu className="text-xl cursor-pointer" />
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold">AutoBI Dashboard</h1>
            <p className="text-sm text-gray-400">Business Intelligence Platform</p>
          </div>
        </div>

        {/* Right: Brightness + User Info + Logout */}
        <div className="flex items-center gap-4">
          <BsSun className="text-xl text-gray-300 cursor-pointer" />
          <div className="flex items-center gap-3 bg-[#1c2b45] px-3 py-1 rounded-full">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
              SJ
            </div>
            <div className="text-sm">
              <p className="font-semibold">Sarah Johnson</p>
              <p className="text-blue-300 text-xs">Analyst, Pro Tier</p>
            </div>
          </div>
          <FiLogOut className="text-xl text-gray-300 cursor-pointer" />
        </div>
      </div>

      {/* Filters */}
      <div className="bg-[#12233d] rounded-lg p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm mb-1">Region</label>
          <select className="w-full bg-[#1c2b45] text-white p-2 rounded">
            <option>us USA</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1">Vehicle Type</label>
          <select className="w-full bg-[#1c2b45] text-white p-2 rounded">
            <option>All Vehicles</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1">Time Range</label>
          <select className="w-full bg-[#1c2b45] text-white p-2 rounded">
            <option>Last 3 Months</option>
          </select>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#12233d] p-4 rounded">
          <p className="text-sm text-green-400">EV Demand in USA ⚡</p>
          <p className="text-2xl font-bold mt-1">+18%</p>
          <p className="text-sm text-gray-400">vs previous period</p>
        </div>
        <div className="bg-[#12233d] p-4 rounded">
          <p className="text-sm text-white">Average SUV Valuation 💲</p>
          <p className="text-base text-gray-400 mt-1">regional average</p>
        </div>
        <div className="bg-[#12233d] p-4 rounded">
          <p className="text-sm text-white">Market Volatility 📉</p>
          <p className="text-2xl font-bold mt-1 text-red-400">-2.3%</p>
          <p className="text-sm text-gray-400">improved stability</p>
        </div>
        <div className="bg-[#12233d] p-4 rounded">
          <p className="text-sm text-white">Data Sources Active 📊</p>
          <p className="text-2xl font-bold mt-1">10,247</p>
          <p className="text-sm text-gray-400">valuations in 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Step1;