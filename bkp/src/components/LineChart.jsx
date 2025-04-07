import React from 'react';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const LineChart = ({ data }) => {
  const config = {
    labels: data.map((d) => d.month),
    datasets: [
      {
        label: 'Spending',
        data: data.map((d) => d.value),
        fill: false,
        borderColor: '#3b82f6',
        tension: 0.3
      }
    ]
  };

  return <Line data={config} />;
};

export default LineChart;