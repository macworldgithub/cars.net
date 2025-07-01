import React from "react";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{ backgroundImage: "url('/bg-pic.png')" }}
    >
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl">
        {/* Left Text Content */}
        <div className="text-white text-center md:text-left md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            VALUE YOUR CAR <br /> IN SECONDS
          </h1>
          <p className="mt-4 text-sm md:text-base text-white/90">
            Get retail and wholesale prices instantly{" "}
            <span className="text-blue-500 font-semibold">Value My Car</span>
          </p>
        </div>

        {/* Right Form */}
        <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-lg shadow-lg w-full md:w-1/2">
          <h2 className="text-white font-bold text-lg mb-4">VEHICLE DETAILS</h2>

          <form className="space-y-4">
            <select className="w-full p-3 rounded bg-white text-gray-800" required>
              <option value="">VIN Or Make/Model</option>
              <option value="toyota">Toyota</option>
              <option value="honda">Honda</option>
            </select>

            <input
              type="date"
              className="w-full p-3 rounded bg-white text-gray-800"
              placeholder="Year"
              required
            />

            <input
              type="number"
              placeholder="Mileage"
              className="w-full p-3 rounded bg-white text-gray-800"
              required
            />

            <input
              type="text"
              placeholder="Condition"
              className="w-full p-3 rounded bg-white text-gray-800"
              required
            />

            <select className="w-full p-3 rounded bg-white text-gray-800" required>
              <option value="">Region</option>
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
            </select>

            <button
              type="submit"
              className="w-full bg-blue-800 text-white py-3 rounded font-semibold hover:bg-blue-700 transition"
            >
              Send Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
