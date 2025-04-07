// File: src/components/dashboard/BalanceHistory.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Balance',
      data: [15000, 18000, 17000, 19000, 22000, 25000],
      fill: true,
      borderColor: '#4f46e5',
      backgroundColor: 'rgba(99, 102, 241, 0.1)',
      tension: 0.4,
      pointBackgroundColor: '#4f46e5',
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: {
      beginAtZero: false,
      ticks: {
        callback: (value) => `₹${value}`,
        color: '#6b7280',
      },
      grid: { color: '#f3f4f6' },
    },
    x: {
      ticks: { color: '#6b7280' },
      grid: { display: false },
    },
  },
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (ctx) => `₹${ctx.parsed.y}`,
      },
    },
  },
};

const BalanceHistory = () => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm h-full">
      <h2 className="text-xl font-semibold mb-4">Balance History</h2>
      <div className="h-60">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default BalanceHistory;
