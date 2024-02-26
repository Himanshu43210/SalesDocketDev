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

const DoubleBarGraph = ({ graphLabels }) => {
  const labels = graphLabels;
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "contribution",
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        fill: false,
        borderColor: "red",
        type: "line",
        backgroundColor: "red",
        borderWidth: 1,
      },
      {
        label: "Deliveries",
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderWidth: 1,
      },
      {
        label: "conversion_ratio",
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        borderWidth: 1,
        backgroundColor: " rgb(154,208,245,0.5)",
        borderColor: "rgb(154,208,245, 1)",
      },
    ],
  };
  return (
    <div>
      <div
        style={{ width: "800px", height: "400px" }}
        className="bargraph-double  "
      >
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default DoubleBarGraph;
