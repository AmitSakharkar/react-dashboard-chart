import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const BalanceHistoryChart = ({ data }) => {
  const chartData = {
    labels: data.map((entry) => entry.month),
    datasets: [
      {
        label: "Balance",
        data: data.map((entry) => entry.amount),
        borderColor: "#10b981", // Tailwind emerald-500
        backgroundColor: "rgba(16, 185, 129, 0.2)", // Tailwind emerald-500 @ 20%
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: "#10b981",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { color: "#9ca3af" },
        grid: { color: "#e5e7eb" },
      },
      x: {
        ticks: { color: "#6b7280" },
        grid: { display: false },
      },
    },
  };

  return (
    <div className="bg-card p-4 rounded-2xl shadow-sm">
      <h2 className="text-lg font-semibold text-foreground mb-4">
        Balance History
      </h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default BalanceHistoryChart;
