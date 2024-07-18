"use client";

import React from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler,
} from "chart.js";
import { Radar as RadarChart } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  RadialLinearScale,
  Filler
);

interface RadarProps {
  data: any;
  options: any;
}

export default function Radar(props: RadarProps) {
  const { data, options } = props;

  // Ensure options are responsive
  const responsiveOptions = {
    ...options,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          color: "#000",
        },
        pointLabels: {
          color: "#000",
        },
      },
    },
    plugins: {
      ...options.plugins,
      legend: {
        ...options.plugins?.legend,
        position: "top" as const,
      },
    },
  };

  return (
    <div className="relative clg:w-[584px] csm:w-[404px] w-[284px] clg:h-[584px] csm:h-[404px] h-[284px] p-4">
        <RadarChart data={data} options={responsiveOptions} />
    </div>
  );
}
