import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const BalanceHistoryChart = ({ data }) => {
  const chartData = {
    labels: data?.map(point => point?.month),
    datasets: [
      {
        label: 'Balance',
        data: data?.map(point => point?.balance),
        fill: false,
        borderColor: '#2196f3',
        tension: 0.1,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default BalanceHistoryChart;