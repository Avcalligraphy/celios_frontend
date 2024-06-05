'use client'
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

export default function BarChart() {
  const [chartState, setChartState] = useState({
    series: [
      {
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
      },
    ],
    options: {
      chart: {
        type: "bar" as "bar",
        height: 350,
        foreColor: "#FFFFFF",
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: "end" as "end",
          horizontal: true,
        },
      },
      colors: ["#4EE0B9"],
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [
          "Aceh",
          "Banten",
          "Jakarta",
          "Semarang",
          "Surabaya",
          "Bogor",
          "Cianjur",
          "Lombok",
          "Papua",
          "Kalimantan",
        ],
      },
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={chartState.options}
          series={chartState.series}
          type="bar"
          height={350}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}
