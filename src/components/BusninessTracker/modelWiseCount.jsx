import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' ,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const labels = ['creata', 'thar', 'scorpio', 'laandrover', 'alto', 'cycle'];

export const data = {
  labels,
  datasets: [
    {
      label: 'closed',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgb(213, 89, 234)',
    },
    {
      label: 'Walkins',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgb(255, 193, 7)',
    },
    {
      label: 'Enquiry',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'rgb(0, 255, 255)',
    },
    {
      label: 'Booking',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'pink',
    },
    {
      label: 'Delivery',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'green',
    },
    {
      label: 'Lost',
      data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
      backgroundColor: 'red',
    }
  ],
};
const MOdelWiseWise = () => {
  return (
    <div>
      <h2 className="mb-2 text-3xl font-medium">Model wise Report </h2>
      <div style={{ height: "400px", width: "800px" }}>
      <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default MOdelWiseWise;
