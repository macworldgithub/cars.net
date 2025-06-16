import React from "react";

export default function PricePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 py-10"
      style={{ backgroundImage: "url('/bg-pic2.png')" }}
    >
      {/* Heading Section */}
      <div className="text-center text-white mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
          YOUR VEHICLE PRICE
        </h1>
        <h2 className="mt-4 text-xl md:text-2xl lg:text-3xl font-semibold">
          Pricing for Toyota camry 2022
        </h2>
        <p className="mt-2 text-sm md:text-base lg:text-lg text-white/90">
          With Kilometer Driven: <span className="font-medium">12000 Km</span>
        </p>
      </div>

      {/* Values Section */}
      <div className="flex flex-col md:flex-row gap-6 w-full max-w-4xl justify-center mb-8">
        {/* Wholesale Box */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg text-center w-full md:w-1/2">
          <h3 className="text-white font-bold text-lg mb-3">Wholesale Value</h3>
          <input
            type="text"
            value="$13,000"
            readOnly
            className="w-full p-3 text-center text-black bg-white rounded"
          />
        </div>

        {/* Retail Box */}
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg text-center w-full md:w-1/2">
          <h3 className="text-white font-bold text-lg mb-3">Retail Value</h3>
          <input
            type="text"
            value="$15,500"
            readOnly
            className="w-full p-3 text-center text-black bg-white rounded"
          />
        </div>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-2xl justify-center">
        <button className="bg-blue-800 text-white py-3 px-6 rounded font-semibold hover:bg-blue-700 transition">
          Sell To Wholesale
        </button>
        <button className="bg-blue-800 text-white py-3 px-6 rounded font-semibold hover:bg-blue-700 transition">
          Explore BI Insights
        </button>
      </div>
    </div>
  );
}
