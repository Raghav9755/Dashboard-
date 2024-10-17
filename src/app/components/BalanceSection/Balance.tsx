import React, { useState } from "react";
import { FiMoreVertical, FiPlus } from "react-icons/fi"; // Icons for buttons
import Dropdown from "@/app/Dropdown";
import GraphFilters from "../TransactionSection/GraphFilters";

const Balance: React.FC = () => {
  const [waveChartDateRange, setWaveChartDateRange] = useState<{ startDate: Date | undefined; endDate: Date | undefined }>({
    startDate: undefined,
    endDate: undefined,
  });

  return (
    <div>
      {/* Top section with Balance display and buttons */}
      <div className="flex justify-between items-center p-1 rounded-lg">
        {/* Balance Display */}
        <div>
          <strong className="text-sm">Balance: 4,498 USD</strong>
        </div>
        {/* Buttons: More options and Add */}
        <div className="flex space-x-2">
          <button className="p-1 bg-white rounded-full">
            <FiMoreVertical size={20} color="black" />
          </button>
          <button className="p-1 bg-yellow-500 rounded-full hover:bg-yellow-400">
            <FiPlus size={20} color="black" />
          </button>
        </div>
      </div>

      {/* Middle section with Transactions, Dropdown, and DatePicker */}
      <div className="flex items-center justify-between mb-4">
        {/* Text for 15 Transactions */}
        <div className="text-sm">
          <div>15</div>
          <div>Transactions</div>
        </div>

        {/* Dropdown and DatePicker next to each other */}
        <div className="flex items-center space-x-4">
          {/* Dropdown for Income/Outcome */}
          <Dropdown options={["Income", "Outcome", "Both"]} label="Select" />

          {/* DatePicker for selecting date range */}
          <GraphFilters
            onDateChange={(startDate, endDate) =>
              setWaveChartDateRange({ startDate, endDate })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Balance;
