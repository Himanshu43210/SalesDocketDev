import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = ({ labels }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "closed",
        data: labels.map(() => faker.number.int({ min: 5, max: 995 })),
        backgroundColor: "rgb(213, 89, 234)",
      },
      {
        data: labels.map(() => faker.number.int({ min: 4, max: 996 })),
        label: "Walkins",
        backgroundColor: "rgb(255, 193, 7)",
      },
      {
        data: labels.map(() => faker.number.int({ min: 3, max: 997 })),
        backgroundColor: "rgb(0, 255, 255)",
        label: "Enquiry",
      },
      {
        label: "Booking",
        backgroundColor: "pink",
        data: labels.map(() => faker.number.int({ min: 2, max: 998 })),
      },
      {
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        label: "Delivery",
        backgroundColor: "green",
      },
      {
        backgroundColor: "red",
        label: "Lost",
        data: labels.map(() => faker.number.int({ min: 1, max: 999 })),
      },
    ],
  };

  return (
    <div style={{ height: "400px", width: "800px" }}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default ChartComponent;
