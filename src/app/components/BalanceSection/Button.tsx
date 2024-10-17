import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button 
      className="bg-neon text-black px-4 py-2 rounded"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
