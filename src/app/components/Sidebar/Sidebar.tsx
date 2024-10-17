// components/Sidebar/Sidebar.tsx
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-opacity-70 p-5">
      <div className="text-neon text-xl font-bold mb-10">IMM Soccer</div>
      <nav>
        <ul className="space-y-4">
          <li>Dashboard</li>
          <li>Buy</li>
          <li>Swap</li>
          <li>Staking</li>
          <li>Farming</li>
          <li>Rewards</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
