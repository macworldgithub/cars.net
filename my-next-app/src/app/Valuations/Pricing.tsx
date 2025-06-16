// components/Pricing.tsx
import React from "react";

const Pricing: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white px-4 py-10"
      style={{ backgroundImage: "url('/bg-pic.png')" }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold">Pricing for Toyota camry 2022</h2>
        <p className="text-sm md:text-base">
          With Kilometer Driven: 12000 Km <br />
          50,000 miles, good condition
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mt-6">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg w-full md:w-1/2">
            <h3 className="font-semibold text-lg mb-2">Wholesale Value</h3>
            <input
              type="text"
              value="$13,000"
              readOnly
              className="w-full p-3 text-center bg-white text-black rounded"
            />
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg w-full md:w-1/2">
            <h3 className="font-semibold text-lg mb-2">Retail Value</h3>
            <input
              type="text"
              value="$15,500"
              readOnly
              className="w-full p-3 text-center bg-white text-black rounded"
            />
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <button className="bg-gray-300 text-black px-6 py-3 rounded font-semibold">
            Market Demand
          </button>

          <button className="bg-blue-800 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700">
            Sell To Wholesale Now
          </button>

          <p className="text-sm text-white/80">Get Offers From Trusted Buyers Instantly</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
