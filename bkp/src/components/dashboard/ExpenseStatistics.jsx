// File: src/components/dashboard/ExpenseStatistics.jsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseStatistics = () => {
  const data = {
    labels: ['Food', 'Shopping', 'Bills', 'Travel'],
    datasets: [
      {
        label: 'Expenses',
        data: [4000, 2500, 3000, 1500],
        backgroundColor: ['#6366F1', '#F59E0B', '#EF4444', '#10B981'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '70%',
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ₹${context.parsed}`,
        },
      },
    },
  };

  const total = data.datasets[0].data.reduce((sum, val) => sum + val, 0);

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm h-[300px] flex flex-col justify-between">
      <h2 className="text-xl font-semibold">Expense Statistics</h2>
      <div className="flex justify-center items-center h-[200px] relative">
        <Doughnut data={data} options={options} />
        <div className="absolute text-center">
          <p className="text-sm text-gray-500">Total</p>
          <p className="text-lg font-bold">₹{total}</p>
        </div>
      </div>
      <div className="flex justify-between mt-4 text-sm text-gray-600">
        {data.labels.map((label, idx) => (
          <div key={label} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: data.datasets[0].backgroundColor[idx] }}
            />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseStatistics;
