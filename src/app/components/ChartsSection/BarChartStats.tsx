"use client";
import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import BarChart from './BarChart';
import { FaUndoAlt } from 'react-icons/fa'; // Import reset icon
import GraphFilters from '../TransactionSection/GraphFilters';

// Register the necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const BarChartStats: React.FC = () => {
  // State to track the selected dataset (either "received", "invested", or undefined for both)
  const [selectedData, setSelectedData] = useState<'received' | 'invested' | undefined>(undefined);
  const [barChartDateRange, setBarChartDateRange] = useState<{ startDate: Date | undefined; endDate: Date | undefined }>({
    startDate: undefined,
    endDate: undefined,
  });

  // Function to handle button clicks (toggles between showing one dataset or both)
  const handleButtonClick = (dataType: 'received' | 'invested') => {
    if (selectedData === dataType) {
      setSelectedData(undefined); // Reset to show both datasets when clicking the same button again
    } else {
      setSelectedData(dataType); // Set the selected dataset
    }
  };

  return (
    <div className="p-6 rounded-lg">
      {/* Deposit Info */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-lg font-semibold">Deposit: 150,345.05 USD</div>
        <button className="p-2 bg-neon rounded-full hover:bg-neon-600">
          <span className="text-black">→</span>
        </button>
      </div>

      {/* APY and Tenor */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="text-sm">APY: 3.5%</div>
          <div className="text-sm">Tenor: 6 mon</div>
        </div>
        {/* Date Picker */}
        <GraphFilters
            onDateChange={(startDate, endDate) =>
              setBarChartDateRange({ startDate, endDate })
            }
          />
        {/* {selectedData && (
            <button
              className="font-semibold py-2 px-4 rounded-md bg-gray-700 text-white flex items-center justify-center"
              onClick={() => setSelectedData(undefined)} 
            >
              <FaUndoAlt />
            </button>
          )} */}
      </div>

      {/* Flexbox Layout for Vertical Buttons and Bar Chart */}
      <div className="flex space-x-6">
        {/* Vertical Buttons */}
        <div className="flex flex-col space-y-4">
          <button
            className={`bg-neon text-black font-semibold py-2 px-4 rounded-md ${selectedData === 'received' ? 'bg-blue-500 text-gray-900' : 'bg-gray-700 text-black'}`}
            onClick={() => handleButtonClick('received')}
          >
            Received: 150,345.05 USD
          </button>
          <button
            className={`bg-neon text-black font-semibold py-2 px-4 rounded-md ${selectedData === 'invested' ? 'bg-pink-500 text-gray-900' : 'bg-gray-700 text-black'}`}
            onClick={() => handleButtonClick('invested')}
          >
            Invested: 150,345.05 USD
          </button>
          {/* Reset Icon */}
        </div>

        {/* Bar Chart */}
        <div className="flex-1">
          <BarChart selectedData={selectedData} />
        </div>
      </div>
    </div>
  );
};

export default BarChartStats;
