// File: src/components/dashboard/WeeklyActivityChart.jsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const WeeklyActivityChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Activity',
        data: [3000, 2000, 4000, 1000, 2500, 3800, 2900],
        backgroundColor: '#4F46E5',
        borderRadius: 8,
        barThickness: 28,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#6B7280',
        },
        grid: {
          color: '#E5E7EB',
        },
      },
      x: {
        ticks: {
          color: '#6B7280',
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `₹${context.parsed.y}`,
        },
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm h-[300px]">
      <h2 className="text-xl font-semibold mb-4">Weekly Activity</h2>
      <div className="h-[220px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default WeeklyActivityChart;
