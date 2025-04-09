import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const ExpenseStatistics = ({ data }) => {
  const chartData = {
    labels: data?.map(d => d?.category),
    datasets: [
      {
        data: data?.map(d => d?.value),
        backgroundColor: data?.map(d => d?.color),
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default ExpenseStatistics;