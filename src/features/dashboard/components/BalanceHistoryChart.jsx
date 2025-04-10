import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const BalanceHistoryChart = ({ data }) => {
  const defaultData = [
    { month: 'Jan', balance: 2000 },
    { month: 'Feb', balance: 4000 },
    { month: 'Mar', balance: 3000 },
    { month: 'Apr', balance: 5000 },
    { month: 'May', balance: 4000 },
    { month: 'Jun', balance: 6000 }
  ];

  const chartData = {
    labels: (data || defaultData)?.map(point => point?.month),
    datasets: [
      {
        label: 'Balance',
        data: (data || defaultData)?.map(point => point?.balance),
        fill: {
          target: 'origin',
          above: 'rgba(45, 156, 219, 0.1)'
        },
        borderColor: '#2D9CDB',
        borderWidth: 2,
        pointBackgroundColor: '#2D9CDB',
        pointRadius: 4,
        pointHoverRadius: 6,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        grid: {
          color: '#F2F2F2'
        },
        ticks: {
          callback: value => `$${value}`
        }
      }
    }
  };

  return <Line data={chartData} options={options} />;
};

export default BalanceHistoryChart;
