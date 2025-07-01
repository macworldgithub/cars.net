// components/QuickQuestionSection.tsx
import React from 'react';

const QuickQuestionSection: React.FC = () => {
  return (
    <div className="bg-white w-full">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center pt-4 pb-8 text-[#0c1b39]">
        QUICK QUESTION
      </h2>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 pb-20 items-center">
        <div
          className="rounded-xl p-8 bg-cover bg-center shadow-lg  flex flex-col justify-center"
          style={{ backgroundImage: "url('/bgcars.png')" }} 
        >
          <form className="space-y-4 text-center">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone No."
              className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none"
            />
            <textarea
              placeholder="Write Message"
              className="w-full px-4 py-2 rounded bg-white text-black focus:outline-none h-28 resize-none"
            />
            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded"
            >
              Send a Message →
            </button>
          </form>
        </div>

        {/* ✅ Right Side: FAQ Accordion */}
        <div className="flex flex-col justify-center items-center space-y-6 text-center lg:text-left">
          <div>
            <h3 className="text-blue-700 font-semibold text-lg cursor-pointer">
              How does wholesale selling work?
            </h3>
            <p className="text-sm text-gray-700 mt-2 max-w-md">
              Lorem ipsum dolor sit amet consectetur adipiscing elit eget arcu sit dignissim in hendrerit sit morbi turpis commodo tincidunt...
            </p>
          </div>
          {[
            'Dictumst a rhoncus mi mauris sit vitae',
            'Ut tristique molestie cras semper',
            'Faucibus ac a lorem integer ac velit',
            'Enim pulvinar tincidunt at erat',
          ].map((q, i) => (
            <div key={i} className="border-b pb-3 w-full max-w-md">
              <h4 className="font-semibold text-black cursor-pointer flex justify-between">
                {q} <span>⌄</span>
              </h4>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Payment Section Overlapping Footer */}
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 -mb-8 md:-mb-6">
          <div
            className="bg-cover bg-center rounded-xl flex flex-col md:flex-row justify-center md:justify-between items-center md:p-10 p-6 space-y-6 md:space-y-0 bg-no-repeat"
            style={{ backgroundImage: "url('/payment.png')" }}
          >
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickQuestionSection;
