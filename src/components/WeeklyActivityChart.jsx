import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const WeeklyActivityChart = ({ data }) => {
  const chartData = {
    labels: data?.map(day => day?.day),
    datasets: [
      {
        label: 'Deposits',
        backgroundColor: '#232323',
        data: data?.map(day => day?.deposit),
        borderWidth: .5,
      borderRadius: 50,
      borderSkipped: false,
      },
      {
        label: 'Withdrawals',
        backgroundColor: '#396AFF',
        data: data?.map(day => day?.withdrawal),
        borderWidth: .5,
        borderRadius: 50,
        borderSkipped: false,
  
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default WeeklyActivityChart;