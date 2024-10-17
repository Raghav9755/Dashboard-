// components/TransactionSection/GraphFilters.tsx
import Dropdown from '@/app/Dropdown';
import React from 'react';
// import Dropdown from '//d'; // Assuming dropdown component is reusable

const GraphFilters: React.FC = () => {
  return (
    <div className="flex space-x-4">
      <Dropdown options={['Income', 'Outcome', 'Both']} label="Select" /> {/* Income/Outcome dropdown */}
      <Dropdown options={['Last 7 Days', 'Last Month', 'Custom']} label="Date Range" /> {/* Date range picker */}
    </div>
  );
};

export default GraphFilters;
