"use client";
import React from "react";

const AssetSection = () => {
  const assets = [
    {
      name: "Bitcoin (BTC)",
      logo: "/path-to-bitcoin-logo", // Add the correct path to the logo
      price: "4516.56",
      value: "342.45",
      balance: "0.0234",
      change: "-7.6%",
      changeColor: "text-red-500",
    },
    {
      name: "Ethereum (ETH)",
      logo: "/path-to-ethereum-logo", // Add the correct path to the logo
      price: "2432.10",
      value: "7345.00",
      balance: "3.2345",
      change: "+2.8%",
      changeColor: "text-green-500",
    },
    // Add more assets as needed
  ];

  return (
    <div className="text-white min-h-screen p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Assets <span className="text-yellow-400">3 Coins</span>
        </h1>
        <div className="flex items-center space-x-4">
          {/* Search icon */}
          <div className="bg-white p-2 rounded-full hover:bg-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 10a7 7 0 10-14 0 7 7 0 0014 0z"
              />
            </svg>
          </div>
          {/* Menu icon */}
          <div className="bg-yellow-500 p-2 rounded-full hover:bg-yellow-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Table Header with White Background */}
      <div className="grid grid-cols-4 text-gray-500 bg-white py-2 px-4 rounded-lg mb-2">
        <div>Name</div>
        <div>Price, USD</div>
        <div>Value, USD</div>
        <div>Balance</div>
      </div>

      {/* Table Rows */}
      {assets.map((asset, index) => (
        <div
          key={index}
          className="grid grid-cols-4 items-center py-3 border-b border-gray-700"
        >
          {/* Name and Icon */}
          <div className="flex items-center space-x-2">
            <img
              src={asset.logo}
              alt={asset.name}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <div className="font-semibold">{asset.name}</div>
              <div className={`${asset.changeColor} text-sm`}>
                {asset.change}
              </div>
            </div>
          </div>

          {/* Price */}
          <div className="font-semibold text-white">{asset.price}</div>

          {/* Value */}
          <div className="font-semibold text-white">{asset.value}</div>

          {/* Balance */}
          <div className="font-bold text-white">{asset.balance}</div>

          {/* Right Arrow Icon */}
          <div className="justify-self-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AssetSection;
