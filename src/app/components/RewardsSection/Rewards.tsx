import React from 'react';

const Rewards: React.FC = () => {
  return (
    <div className="text-white p-6 rounded-lg">
      {/* Rewards Header */}
      <div className="flex justify-between items-center mb-6">
        <p className=" font-bold">Rewards <span className="text-yellow-400">535 IMSO</span></p>
        {/* Trophy Icon */}
        <div className="bg-yellow-500 p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21h8m-4-4v4m2.5-4H13a3 3 0 01-2.83-2H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2h-3.17a3 3 0 01-2.83 2zM7 8h10M7 12h4" />
          </svg>
        </div>
      </div>

      {/* Rank and Progress Section */}
      <div className="mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-gray-400">Platinum</span>
          <span className="text-gray-400">Position 22</span>
        </div>
        <div className="bg-gray-600 rounded-full h-2 mt-2">
          <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '60%' }}></div>
        </div>
        <div className="flex justify-between text-gray-400 mt-2">
          <span>564 IMSO left</span>
          <span className="text-white font-bold">$7,020.00</span>
        </div>
      </div>

      {/* Reward Options */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-[#1e1e1e] p-4 rounded-lg border border-yellow-400 flex flex-col items-center">
          <div className="bg-yellow-500 p-2 rounded-full mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-white font-bold">Get 100 Wallo</span>
        </div>

        <div className="bg-[#1e1e1e] p-4 rounded-lg border border-yellow-400 flex flex-col items-center">
          <div className="bg-yellow-500 p-2 rounded-full mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-white font-bold">More rewards</span>
        </div>

        <div className="bg-[#1e1e1e] p-4 rounded-lg border border-yellow-400 flex flex-col items-center">
          <div className="bg-yellow-500 p-2 rounded-full mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8V4m0 4v8m0 4v-4m0-8H8m4 0h4M3 12h2m12 0h2M7 12h2m8-6h2m-4 0H9" />
            </svg>
          </div>
          <span className="text-white font-bold">Exchange Wallo</span>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
