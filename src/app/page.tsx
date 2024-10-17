"use client";
import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Balance from "./components/BalanceSection/Balance";
import TransactionsInfo from "./components/TransactionSection/TransactionsInfo";
import GraphFilters from "./components/TransactionSection/GraphFilters";
import WaveChart from "./components/ChartsSection/WaveChart";
import BarChart from "./components/ChartsSection/BarChart";
import BarChartStats from "./components/ChartsSection/BarChartStats";
import Rewards from "./components/RewardsSection/Rewards";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Assets from "./components/Assets/Assets";

// Register the necessary ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Home: React.FC = () => {
  // State to manage selected date ranges for both WaveChart and BarChart
  const [waveChartDateRange, setWaveChartDateRange] = useState<{
    startDate: Date | undefined;
    endDate: Date | undefined;
  }>({
    startDate: undefined,
    endDate: undefined,
  });
  const [barChartDateRange, setBarChartDateRange] = useState<{
    startDate: Date | undefined;
    endDate: Date | undefined;
  }>({
    startDate: undefined,
    endDate: undefined,
  });

  const assets = [
    { name: "Bitcoin (BTC)", balance: "0.0234" },
    { name: "Ethereum (ETH)", balance: "3.2345" },
    { name: "Solana (SOL)", balance: "12.5678" },
  ];

  return (
    <div className="relative flex text-gray-300 h-screen w-screen overflow-hidden">
      {/* Background image with brightness adjustment */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("/Assets/background.jpg")',
          filter: "brightness(0.5)", // Adjust the value to lower the brightness
          zIndex: -1,
        }}
      ></div>

      {/* Sidebar (Static) */}
      <div className="relative z-10 h-full">
        <Sidebar />
      </div>

      {/* Main content - Enable horizontal and vertical scrolling, hide scrollbars */}
      <div className="flex-1 overflow-scroll no-scrollbar">
        <div className="grid grid-cols-2 grid-rows-1 gap-1 p-6">
          {/* First Block: Wave Chart */}
          <div className="rounded-lg">
            <Balance />
            <WaveChart
              startDate={waveChartDateRange.startDate}
              endDate={waveChartDateRange.endDate}
            />
          </div>

          {/* Second Block: Bar Chart */}
          <div className="p-2 rounded-lg">
            <BarChartStats />
          </div>

          {/* Assets Component */}
          <div className="p-6 rounded-lg">
            <Assets />
          </div>

          {/* Rewards Component */}
          <div className="p-6 rounded-lg">
            <Rewards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
