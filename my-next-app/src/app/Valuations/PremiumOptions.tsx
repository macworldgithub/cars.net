// components/PremiumOptions.tsx
import React from "react";

const PremiumOptions: React.FC = () => {
  return (
    <div className="bg-white py-10 text-center px-4">
      <h3 className="text-blue-800 text-lg md:text-xl font-semibold mb-6">Premium Options</h3>
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <button className="bg-blue-800 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700">
          Compare Valuations - $5
        </button>
        <button className="bg-blue-800 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700">
          Download Report - $10
        </button>
      </div>
    </div>
  );
};

export default PremiumOptions;
