import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Filler } from "chart.js";
import { Container } from "../styles/BalanceHistory.styles";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Filler);

const data = {
  labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
  datasets: [
    {
      label: "Balance",
      data: [150, 300, 450, 800, 250, 580, 670],
      fill: true,
      backgroundColor: "rgba(0, 68, 255, 0.1)",
      borderColor: "#0044FF",
      tension: 0.4,
      pointRadius: 0,
      borderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks: {
        color: "#888",
        font: {
          size: 12,
        },
      },
      grid: {
        drawOnChartArea: false,
      },
    },
    y: {
      min: 0,
      max: 800,
      ticks: {
        stepSize: 200,
        color: "#888",
        font: {
          size: 12,
        },
      },
      grid: {
        color: "#EEE",
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};

const BalanceHistory = () => {
  return (
    <Container>
      <h3 style={{ marginBottom: "12px", fontWeight: 600 }}>Balance History</h3>
      <Line data={data} options={options} />
    </Container>
  );
};

export default BalanceHistory;
