import React from 'react';

const SummaryCard = ({ label, value, icon: Icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex items-center space-x-4">
      <div className="text-blue-500 text-2xl">
        <Icon />
      </div>
      <div>
        <h4 className="text-sm text-gray-500">{label}</h4>
        <p className="text-lg font-bold">{value}</p>
      </div>
    </div>
  );
};

export default SummaryCard;