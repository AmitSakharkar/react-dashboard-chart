import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  Container,
  ChartContainer,
  NoData,
} from './styles/ExpenseStatistics.styles';

// Register required components
ChartJS.register(ArcElement, Tooltip, ChartDataLabels);

const ExpenseStatistics = ({ data }) => {
  if (!data || data.length === 0) {
    return (
        <Container>
          <ChartContainer>
            <NoData>No expense data available</NoData>
          </ChartContainer>
        </Container>
    );
  }

  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  const chartData = {
    labels: data.map(d => d.category),
    datasets: [
      {
        data: data.map(d => d.value),
        backgroundColor: data.map(d => d.color),
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        formatter: (value) => {
          try {
            const percentage = Math.round((value / total) * 100);
            return `${percentage}%`;
          } catch {
            return '0%';
          }
        },
        color: '#fff',
        font: {
          weight: 'bold',
          size: 14,
          family: 'Arial, sans-serif'
        },
        textShadowBlur: 5,
        textShadowColor: 'rgba(0,0,0,0.5)',
        anchor: 'center',
        align: 'center',
        offset: 0,
        clip: false,
        display: (context) => {
          // Only display label if segment is large enough
          return context.dataset.data[context.dataIndex] / total > 0.05;
        }
      },
      title: {
        display: true,
        text: 'Expense Breakdown',
        position: 'top',
        align: 'center',
        font: {
          size: 18,
          weight: 'bold',
          family: 'Arial, sans-serif'
        },
        color: '#333',
        padding: {
          top: 10,
          bottom: 20
        }
      }
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    cutout: '70%',
  };

  return (
    <Container>
      <ChartContainer>
        <Pie data={chartData} options={options} />
      </ChartContainer>
    </Container>
  );
};

export default ExpenseStatistics;
