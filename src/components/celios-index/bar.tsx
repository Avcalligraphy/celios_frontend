"use client"; // if you use app dir, don't forget this line

import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { fetchDataIndexTransition, useStoreIndexTransition } from "@/lib/store";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
  const [categories, setCategories] = useState<string[]>([]);
  const [data, setData] = useState<number[]>([]);

  const storeTransitions = useStoreIndexTransition(
    (state) => state.dataIndexTransition
  );

useEffect(() => {
  if (storeTransitions.length > 0) {
    // Sort storeTransitions by title alphabetically
    const sortedTransitions = storeTransitions.sort((a: any, b: any) =>
      a.attributes.title.localeCompare(b.attributes.title)
    );

    const mappedCategories = sortedTransitions.map(
      (item: any) => item.attributes.title
    );
    const mappedData = sortedTransitions.map((item: any) =>
      parseInt(item.attributes.value, 10)
    );

    setCategories(mappedCategories);
    setData(mappedData);
  }
}, [storeTransitions]);

  const chartData = {
    labels: categories,
    datasets: [
      {
        label: "Index",
        data: data,
        backgroundColor: "#4EE0B9",
      },
    ],
  };

  const options = {
    indexAxis: "y" as const, // horizontal bar chart
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          color: "#FFFFFF",
          font: {
            size: 20, // change this value to adjust the size
          },
        },
      },
      y: {
        ticks: {
          color: "#FFFFFF",
          font: {
            size: 20, // change this value to adjust the size
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: "#FFFFFF", // change this to the desired color
          font: {
            size: 20, // change this value to adjust the size
          },
        },
      },
    },
  };

  return (
    <div className="relative w-full h-[1584px]">
      {" "}
      {/* relative parent container with defined height */}
      <Bar data={chartData} options={options} />
    </div>
  );
}
