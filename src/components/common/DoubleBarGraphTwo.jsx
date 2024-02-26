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

const DoubleBarGraphTwo = ({ graphLabels, title }) => {
  const labels = graphLabels;
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: title,
      },
    },
  };
  const data = {
    labels,
    datasets: [
      {
        label: "Deliveries",
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "conversion_ratio",
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        backgroundColor: " rgb(154,208,245,0.5)",
        borderColor: "rgb(154,208,245, 1)",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      {/* <h2 className="mb-2 text-3xl font-medium">Month wise Report</h2> */}
      <div style={{ height: "400px", width: "800px" }} className="">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default DoubleBarGraphTwo;
