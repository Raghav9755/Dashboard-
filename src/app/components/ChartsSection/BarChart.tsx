"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
interface BarChartProps {
  selectedData: "received" | "invested" | undefined; // undefined means showing both datasets
}
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend
);

const BarChart: React.FC<BarChartProps> = ({ selectedData }) => {
  const fullData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Received",
        data: [500, 600, 700, 800, 900],
        backgroundColor: "rgba(199, 255, 0)", // neon
        // barThickness: 5, // Custom bar width
        borderRadius: { topLeft: 10, topRight: 10 },
        categoryPercentage: 0.5,
        barPercentage: 0.6,
        
      },
      {
        label: "Invested",
        data: [400, 300, 500, 600, 700],
        backgroundColor: "rgba(255, 255, 255)", // white
        // barThickness: 5, // Custom bar width
        borderRadius: { topLeft: 10, topRight: 10 },
        categoryPercentage: 0.5,
        barPercentage: 0.6,
      },
    ],
  };

  const filteredData = {
    labels: fullData.labels,
    datasets: selectedData
      ? fullData.datasets.filter((dataset) => {
          if (selectedData === "received") return dataset.label === "Received";
          if (selectedData === "invested") return dataset.label === "Invested";
          return false;
        })
      : fullData.datasets, // Show both datasets when selectedData is undefined
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Prevents cropping by allowing the height to be set
    scales: {
      y: {
        type: "linear" as const,
        beginAtZero: true,
      },
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10, // Add some padding to avoid cropping
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  return (
    <div className="">
      {" "}
      {/* Set a height for the chart's container */}
      <Bar data={filteredData} options={options} />
    </div>
  );
};

export default BarChart;
