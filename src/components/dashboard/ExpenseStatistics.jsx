import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { doughnutData } from "../../data/charts";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = doughnutData;

const options = {
  cutout: "70%",
  plugins: {
    legend: {
      display: false,
    },
  },
};

export default function ExpenseStatistics() {
  return (
    <div className="bg-white rounded-2xl shadow p-6 h-full">
      <h2 className="text-lg font-semibold mb-4">Expense Statistics</h2>
      <div className="flex items-center justify-between">
        <div className="w-32 h-32">
          <Doughnut data={data} options={options} />
        </div>
        <ul className="space-y-3 text-sm ml-4">
          {data.labels.map((label, index) => (
            <li key={label} className="flex items-center">
              <span
                className="inline-block w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
              ></span>
              <span className="text-slate-600">{label}</span>
              <span className="ml-auto font-medium text-slate-800">
                ₹{data.datasets[0].data[index]}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
