import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Filler,
} from "chart.js";
import { balanceHistoryData } from "../../data/charts";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Filler);

const data = balanceHistoryData;

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: false,
      ticks: {
        color: "#64748b",
      },
    },
    x: {
      ticks: {
        color: "#64748b",
      },
    },
  },
};

export default function BalanceHistoryChart() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 h-full">
      <h2 className="text-lg font-semibold mb-4">Balance History</h2>
      <div className="w-full h-64">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
