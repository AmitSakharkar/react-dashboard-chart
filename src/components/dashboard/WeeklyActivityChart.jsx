import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
} from "chart.js";
import { weeklyActivityData } from "../../data/charts";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const data = weeklyActivityData;

const options = {
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        stepSize: 200,
        color: "#94a3b8", // slate-400
        font: { size: 12 },
      },
      grid: {
        color: "#e2e8f0", // slate-200
        drawBorder: false,
      },
    },
    x: {
      ticks: {
        color: "#94a3b8", // slate-400
        font: { size: 12 },
      },
      grid: {
        display: false,
      },
    },
  },
};

export default function WeeklyActivityChart() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 w-full h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Weekly Activity</h2>
      </div>
      <Bar data={data} options={options} className="w-full h-64" />
    </div>
  );
}
