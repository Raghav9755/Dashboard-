import React from 'react';

interface DropdownProps {
  options: string[];
  label: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, label }) => {
  return (
    <div className="flex space-x-4">
      <select className="bg-white-700 text-black text-xs p-1 rounded-md">
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
