"use client"; // if you use app dir, don't forget this line

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function BarChart() {
  // const option = {
  //   chart: {
  //     id: "apexchart-example",
  //   },
  //   xaxis: {
  //     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  //   },
  // };

  const option = {
    chart: {
      id: "apexchart-example",
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
  };

  const series = [
    {
      data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
    }
  ];

  return (
    <>
      <ApexChart
        type="bar"
        options={option}
        series={series}
        height={350}
        width={1800}
      />
    </>
  );
}
