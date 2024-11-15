// src/components/HPPlan.js

import React from 'react';

const HPPlan = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-cyan-500 p-8 lg:p-16 ">
      {/* Left Section */}
      <div className="lg:w-1/2 space-y-4">
        <h2 className="text-4xl font-bold text-gray-800">The HP All-In Plan</h2>
        <ul className="space-y-3 text-lg">
          <li className="flex items-center">
            <span className="bg-blue-500 text-white rounded-full p-2 mr-3">💻</span>
            <span className="text-gray-700">Your choice of a new HP printer</span>
          </li>
          <li className="flex items-center">
            <span className="bg-blue-500 text-white rounded-full p-2 mr-3">🖋️</span>
            <span className="text-gray-700">Continuous printer coverage</span>
          </li>
          <li className="flex items-center">
            <span className="bg-blue-500 text-white rounded-full p-2 mr-3">💧</span>
            <span className="text-gray-700">Ink delivered, so you never run out</span>
          </li>
          <li className="flex items-center">
            <span className="bg-blue-500 text-white rounded-full p-2 mr-3">🔄</span>
            <span className="text-gray-700">Eligibility for new printer every two years</span>
          </li>
        </ul>
        <p className="text-gray-500">30-day risk-free trial.</p>
        <button className="bg-blue-600 text-white px-6 py-3 mt-4 text-lg font-semibold rounded hover:bg-blue-700">
          GET STARTED
        </button>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <img
          src="https://www.hp.com/wcsstore/hpusstore/Banners/PR_Innovation_HPAllIn_08-04-2024.jpg" // Replace this with the path to your image file
          alt="Person using HP printer"
          className="w-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default HPPlan;
