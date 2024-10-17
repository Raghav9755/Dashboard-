"use client";

import React, { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface WaveChartProps {
  startDate?: Date;
  endDate?: Date;
}

const originalData = {
  labels: ["2024-10-01", "2024-10-02", "2024-10-03", "2024-10-04", "2024-10-05"],
  datasets: [
    {
      label: "Income",
      data: [2000, 1000, 4000, 3000, 6000],
      borderColor: "#FFD700",
      backgroundColor: "rgba(255, 215, 0, 0.2)", // default, to be overridden by gradient
      tension: 0.4,
      fill: true,
    },
    {
      label: "Outcome",
      data: [3000, 2000, 3000, 4000, 3000],
      borderColor: "#8A2BE2",
      backgroundColor: "rgba(138, 43, 226, 0.2)", // default, to be overridden by gradient
      tension: 0.4,
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      display: true,
    },
  },
};

const filterDataByDateRange = (startDate?: Date, endDate?: Date) => {
  if (!startDate || !endDate) {
    return originalData;
  }

  const filteredLabels = originalData.labels.filter((label) => {
    const labelDate = new Date(label);
    return labelDate >= startDate && labelDate <= endDate;
  });

  const filteredDatasets = originalData.datasets.map((dataset) => {
    const filteredData = dataset.data.filter((_, index) => {
      const labelDate = new Date(originalData.labels[index]);
      return labelDate >= startDate && labelDate <= endDate;
    });

    return { ...dataset, data: filteredData };
  });

  return {
    labels: filteredLabels,
    datasets: filteredDatasets,
  };
};

const WaveChart: React.FC<WaveChartProps> = ({ startDate, endDate }) => {
  const chartRef = useRef<any>(null);
  const filteredData = filterDataByDateRange(startDate, endDate);

  useEffect(() => {
    const chart = chartRef.current?.chartInstance;

    if (chart) {
      const ctx = chart.ctx;

      // Create gradient for Income wave
      const incomeGradient = ctx.createLinearGradient(0, 0, 0, 400);
      incomeGradient.addColorStop(0, "rgba(255, 215, 0, 0.6)");
      incomeGradient.addColorStop(1, "rgba(255, 215, 0, 0)");

      // Create gradient for Outcome wave
      const outcomeGradient = ctx.createLinearGradient(0, 0, 0, 400);
      outcomeGradient.addColorStop(0, "rgba(138, 43, 226, 0.6)");
      outcomeGradient.addColorStop(1, "rgba(138, 43, 226, 0)");

      // Apply the gradients to the datasets
      chart.data.datasets[0].backgroundColor = incomeGradient;
      chart.data.datasets[1].backgroundColor = outcomeGradient;

      chart.update(); // Force chart to re-render
    }
  }, [startDate, endDate]);

  return (
    <div
      className="p-3 rounded-lg glow-effect"
      style={{
        background: 'linear-gradient(to right, rgba(99, 116, 0, 0.5), rgba(57, 71, 1, 0.4), rgba(21, 25, 0, 0.3), rgba(0, 0, 0, 0.2))',
        borderRadius: '10px',
      }}
    >
      <Line ref={chartRef} data={filteredData} options={options} />
    </div>
  );
};

export default WaveChart;
