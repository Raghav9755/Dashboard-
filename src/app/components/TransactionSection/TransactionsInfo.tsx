import React from 'react';

const TransactionsInfo: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-6 rounded-lg">
      {/* Transactions Count */}
      <div>
        <div className="text-3xl font-semibold">15</div>
        <div className="text-sm text-gray-400">Transactions</div>
      </div>

      {/* Dropdowns: Income/Outcome and Date Range Picker */}
      <div className="flex space-x-4">
        {/* First Dropdown */}
        <select className="bg-white-700 text-black p-2 rounded-md">
          <option value="income">Income</option>
          <option value="outcome">Outcome</option>
          <option value="both">Both</option>
        </select>

        {/* Date Range Picker */}
        <select className="bg-white-700 text-black p-2 rounded-md">
          <option value="7-days">Last 7 Days</option>
          <option value="30-days">Last 30 Days</option>
          <option value="90-days">Last 90 Days</option>
        </select>
      </div>
    </div>
  );
};

export default TransactionsInfo;
