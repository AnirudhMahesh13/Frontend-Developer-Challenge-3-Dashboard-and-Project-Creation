// DonutChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DonutChart = ({ data }) => {
  const chartData = {
    labels: ['Label 1', 'Label 2', 'Label 3'],
    datasets: [
      {
        data,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const chartOptions = {
    cutoutPercentage: 70, // Adjust the cutout percentage for the donut effect
  };

  return (
    <div>
      <Doughnut data={chartData} options={chartOptions} />
    </div>
  );
};

export default DonutChart;
