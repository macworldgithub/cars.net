// components/HeroBanner.tsx
import React from 'react';

const HeroBanner: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center min-h-[60vh] flex items-center justify-center text-white px-4"
      style={{ backgroundImage: "url('/bg-pic.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-bold uppercase leading-tight">
          Unlock Automotive Insights with
          <br />
          <span className="text-blue-300">Cars.net BI</span>
        </h1>
        <p className="mt-4 text-sm md:text-base text-gray-200">
          Real-time data for manufacturers, dealers, and analysts
        </p>
        <button className="mt-6 bg-blue-800 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition duration-300">
          Start 14-Day Trial
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
