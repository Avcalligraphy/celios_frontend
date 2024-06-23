"use client"; // if you use app dir, don't forget this line

import { fetchDataIndexTransition, useStoreIndexTransition } from "@/lib/store";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function BarChart() {
  const [categories, setCategories] = useState<string[]>([]);
  const [data, setData] = useState<number[]>([]);

  const storeTransitions = useStoreIndexTransition(
    (state) => state.dataIndexTransition
  );

  useEffect(() => {
    if (storeTransitions.length > 0) {
      const mappedCategories = storeTransitions.map(
        (item: any) => item.attributes.title
      );
      const mappedData = storeTransitions.map((item: any) =>
        parseInt(item.attributes.value, 10)
      );

      setCategories(mappedCategories);
      setData(mappedData);
    }
  }, [storeTransitions]);

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
      categories: categories,
    },
  };

  const series = [
    {
      data: data,
    },
  ];

  return (
    <>
      <ApexChart
        type="bar"
        options={option}
        series={series}
        height={350}
        width={1500}
      />
    </>
  );
}
