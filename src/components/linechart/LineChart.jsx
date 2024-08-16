import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, } from "chart.js";
ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend );

const LineChart = () => {
  const data = {
    labels: [ "08:15AM", "08:45AM", "09:15AM", "09:45AM", "10:15AM", "10:45AM", "11:15AM", "11:45AM", "12:15PM", "12:45PM","01:15PM",
    "01:45PM", "02:15PM", "02:45PM", "03:15PM", "03:45PM", "04:15PM", "04:45PM", "05:15PM", "05:45PM", "06:15PM", "06:45PM","07:15PM",
    "07:45PM", "08:15PM", "08:45PM", "09:15PM", "09:45PM", "10:15PM", "10:45PM", "11:15PM", "11:45PM", "12:15AM", "12:45AM", "01:15AM",
    "01:45AM", "02:15AM", "02:45AM", "03:15AM", "03:45AM", "04:15AM", "04:45AM", "05:15AM", "05:45AM", "06:15AM", "06:45AM", "07:15AM",
    ],
    datasets: [
      {
        label: "Price (Past 1 Day)",
        data: [
          3500000, 2700000, 2600000, 3800000, 2900000, 3900000, 3000000, 3200000, 4300000, 3400000, 4900000, 3500000, 3400000, 3600000,
          3700000, 3550000, 3650000, 2600000, 3700000, 3800000, 3750000, 3850000, 3950000, 4850000, 4000000, 3900000, 4100000, 4000000,
          4200000, 4100000, 4300000, 4200000, 4000000, 4300000, 4500000, 4400000, 4100000, 4500000, 4700000, 4600000, 4750000, 4700000,
          3850000, 4900000, 2900000,
        ],
        borderColor: "#0ea5e9",
        backgroundColor: "rgba(14, 165, 233, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#374151",
        },
      },
      tooltip: {
        backgroundColor: "#1f2937",
        titleColor: "#f3f4f6",
        bodyColor: "#f3f4f6",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#6b7280",
        },
      },
      y: {
        grid: {
          color: "#000",
        },
        ticks: {
          color: "#6b7280",
        },
      },
    },
  };

  return (
      
    <div className="bg-black ml-32 w-[1000px]">

      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
