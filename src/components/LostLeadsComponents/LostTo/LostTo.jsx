import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
const LostTo = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Bar Dataset",
        type: "bar",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Line Dataset",
        type: "line",
        data: [45, 48, 60, 55, 35, 30, 20],
        fill: false,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <h2 className="text-3xl mb-2 font-medium">Lost To</h2>
      <div style={{ height: "400px", width: "800px" }}>
        <Bar
          data={data}
          options={{
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default LostTo;
