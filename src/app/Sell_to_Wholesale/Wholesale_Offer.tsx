// components/WholesaleOffers.tsx
import React from 'react';

const Wholesale_Offers: React.FC = () => {
  return (
    // ✅ Entire screen background white
    <div className="flex flex-col bg-white min-h-screen">
      
      {/* ✅ Hero Background Container with reduced width */}
      <div className="w-full bg-white flex justify-center">
        <div
          className="w-full max-w-full h-[150px] bg-cover bg-center relative"
          style={{ backgroundImage: "url('/hero.png')" }}
        >
          {/* ✅ Overlay with black text */}
          <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
            <p className="text-white text-md md:text-lg font-semibold">
              <span className="mx-2">Valuation</span>
              <span className="mx-1">&rarr;</span>
              <span className="mx-2">Sell</span>
              <span className="mx-1">&rarr;</span>
              <span className="mx-2">Confirm</span>
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Main Content Container with gray background */}
      <div className="w-full bg-white">
        <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
          <h2 className="text-xl md:text-2xl font-semibold text-center text-black">Wholesale Offers</h2>

          {/* Offers Section */}
          <div className="flex flex-col md:flex-row justify-center gap-6">
            {[
              { title: 'Offer A', amount: '$12,000' },
              { title: 'Offer B', amount: '$15,500' },
            ].map((offer, index) => (
              <div
                key={index}
                className="bg-gray-200 shadow-md rounded-md p-6 w-full md:w-1/2 space-y-3 text-center"
              >
                <p className="font-semibold text-lg text-black">{offer.title} : {offer.amount}</p>
                <div className="flex justify-center items-center space-x-2">
                  <div className="w-4 h-4 bg-gray-700 rounded-full" />
                  <p className="text-sm text-black">Manheim USA</p>
                  <p className="text-sm text-yellow-500">⭐⭐⭐⭐☆ (4.8)</p>
                </div>
              </div>
            ))}
          </div>

          {/* Vehicle Details */}
          <div className="bg-gray-200 p-6 rounded-md text-center text-sm md:text-base">
            <h3 className="font-semibold text-blue-700 mb-2">Vehicle Details</h3>
            <p className="text-black">2020 Toyota Camry | 12000 Km | 50,000 Miles | Good Condition</p>
            <button className="text-blue-600 underline mt-2 hover:text-blue-800">Edit</button>
          </div>

          {/* Accept / Request Buttons */}
          <div className="text-center space-y-3">
            <button className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-2 rounded font-semibold">
              Accept Offer
            </button>
            <p className="text-blue-800 text-sm underline cursor-pointer hover:text-blue-900">
              Request More Offers
            </p>
          </div>

          {/* Transaction Details */}
          <div className="bg-gray-200 p-6 rounded-md text-center text-sm md:text-base space-y-2">
            <h3 className="font-semibold text-blue-700 mb-2">Transaction Details</h3>
            <p className="text-black">Estimated Fee: 1%</p>
            <p className="text-black">Payout Timeline: Within 48 Hours</p>
            <p className="text-black">Next Step: Digital Contract E-Signed In 24 Hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wholesale_Offers;
