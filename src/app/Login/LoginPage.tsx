'use client';

import Image from 'next/image';
import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-start items-center px-6 sm:px-10 pt-6 sm:pt-8 bg-white">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-2 sm:mb-3">
          Cars<span className="text-gray-500">.net</span>
        </h1>

        <div className="w-full max-w-md mt-16">
          <p className="text-xs sm:text-sm font-bold text-blue-800 tracking-wider">LOGIN</p>
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mt-1 mb-3">CUSTOMER LOGIN</h2>
          <p className="text-gray-500 text-sm sm:text-base mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget ultricies nibh mattis tortor egestas dis at ipsum.
          </p>

          <form className="space-y-4">           
            <input
              type="email"
              placeholder="Email address"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm sm:text-base placeholder:text-gray-600"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm sm:text-base placeholder:text-gray-600"
            />

            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm sm:text-base text-gray-600">Remember me</label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 text-sm sm:text-base"
            >
              Login
            </button>
          </form>

          <div className="mt-4">
            <a href="#" className="text-blue-700 text-sm sm:text-base hover:underline">Lost your password?</a>
          </div>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <Image
          src="/bg-pic.png"
          alt="Car"
          layout="fill"
          objectFit="cover"
          className="h-full w-full"
        />
      </div>
    </div>
  );
};

export default LoginPage;
