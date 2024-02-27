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

const TripleBarGraph = ({ graphLabels }) => {
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
        label: "FTM",
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "LMTD",
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        borderWidth: 1,
        backgroundColor: "rgba(255, 19, 132, 0.2)",
        borderColor: "rgba(255, 19, 132, 1)",
      },
      {
        label: "LYMTD",
        data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
        backgroundColor: " rgb(154,208,245,0.5)",
        borderWidth: 1,
        borderColor: "rgb(154,208,245, 1)",
      },
    ],
  };
  return (
    <div>
      <div style={{ height: "400px", width: "800px" }} className=" triplegraph">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default TripleBarGraph;
