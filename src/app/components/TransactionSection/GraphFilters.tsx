import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles

interface GraphFiltersProps {
  onDateChange: (
    startDate: Date | undefined,
    endDate: Date | undefined
  ) => void; // Date change handler
}

const GraphFilters: React.FC<GraphFiltersProps> = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const handleDateChange = (start: Date | undefined, end: Date | undefined) => {
    setStartDate(start);
    setEndDate(end);
    onDateChange(start, end); // Call the parent component's handler
  };

  return (
    <div className="flex justify-between items-center p-2 rounded-sm">
      {/* Date range picker */}
      <div className="flex items-center space-x-2 text-gray-800">
        <DatePicker
          selected={startDate}
          onChange={(dates) => {
            const [start, end] = dates as [Date | undefined, Date | undefined];
            handleDateChange(start, end);
          }}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          placeholderText="Select Date Range"
          className="bg-white text-gray-800 text-xs p-1 rounded-md placeholder-dark"
          isClearable
        />
      </div>
    </div>
  );
};

export default GraphFilters;
