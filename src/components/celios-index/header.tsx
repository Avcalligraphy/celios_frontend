"use client";
import React, { useEffect, useState } from "react";
import Radar from "./radar";
import Navbar from "../navbar";
import ContentIndex from "../molecules/index-celios/contentIndex";
import ContentIndicator from "../molecules/index-celios/contentIndicator";
import Button from "../Button.tsx";
import BarChart from "./bar";
import {
  fetchDataDownloadEnergyTransition,
  fetchDataIndexCategory,
  fetchDataIndexRadar,
  fetchDataIndexTransition,
  useStoreDownloadEnergyTransition,
  useStoreIndexCategory,
  useStoreIndexRadar,
} from "@/lib/store";
import Loader from "../loader/loader";

export default function Header() {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;
  const [selectedCategory, setSelectedCategory] = useState("Aceh");
  const [radarData, setRadarData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    fetchDataIndexTransition();
    fetchDataIndexCategory();
    fetchDataIndexRadar();
    fetchDataDownloadEnergyTransition().then(() => {
      setIsLoading(false); // Setelah selesai fetch data, set isLoading jadi false
    });
  }, []);
  const handleDownload = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const url = event.target.value;
    if (url) {
      window.location.href = apiURL + url;
    }
  };

  const storeCategory = useStoreIndexCategory(
    (state) => state.dataIndexCategory
  );
  const storeRadar = useStoreIndexRadar((state) => state.dataIndexRadar);
  const storeDownload = useStoreDownloadEnergyTransition((state) => state.dataDownloadEnergyTransition)

  useEffect(() => {
    if (selectedCategory !== "Choose a city") {
      const selectedData = storeRadar.find(
        (item) =>
          item.attributes.index_category.data.attributes.title ===
          selectedCategory
      );

      if (selectedData) {
        setRadarData({
          data: [
            selectedData.attributes.CEI,
            selectedData.attributes.ER,
            selectedData.attributes.ETRI,
            selectedData.attributes.GC,
          ],
          provinceArea: selectedData.attributes.provinceArea,
          totalPopulation: selectedData.attributes.totalPopulation,
          triangleData: [
            selectedData.attributes.CEV,
            selectedData.attributes.PCC,
            selectedData.attributes.WLI,
          ],
        });
      }

    }
  }, [selectedCategory, storeRadar]);

  const data = {
    labels: ["CEI", "ER", "ETRI", "GC"],
    datasets: radarData
      ? [
          {
            label: `Index ${selectedCategory}`,
            data: radarData.data,
            fill: true,
            backgroundColor: "rgba(78, 224, 185, 0.3)",
            borderColor: "rgb(46, 180, 144)",
            pointBackgroundColor: "rgb(46, 180, 144)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(46, 180, 144)",
          },
        ]
      : [],
  };

  const dataTriangle = {
    labels: ["CEV", "PCC", "WLI"],
    datasets: radarData
      ? [
          {
            label: `Index ${selectedCategory}`,
            data: radarData.triangleData,
            fill: true,
            backgroundColor: "rgba(78, 224, 185, 0.3)",
            borderColor: "rgb(46, 180, 144)",
            pointBackgroundColor: "rgb(46, 180, 144)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(46, 180, 144)",
          },
        ]
      : [],
  };

  const option = {
    elements: {
      line: {
        borderWidth: 3,
        borderColor: "#000",
      },
    },
  };
  if (isLoading) {
    return <Loader />; // Tampilkan loading jika masih fetching data
  }

  return (
    <>
      <div className="bg-gradient-to-b from-[#031B1F] from-20% to-white to-90%">
        <div className="w-full bg-[url('/images/background.png')] relative z-10">
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>
          <div className="clg:px-[88px] cmd:px-[68px] csm:px-[48px] px-[25px]">
            <div className="cxxl:flex-row flex flex-col justify-between pt-[196px] gap-[50px]">
              <h1 className="bg-gradient-to-r from-[#4EE1B5] via-[#BCDECD] to-[#CFE3BE] inline-block text-transparent bg-clip-text font-bold cmd:text-[48px] csm:text-[40px] text-[36px] leading-[100%] tracking-[-4%]">
                Report Energy Transition
              </h1>
              <div className="cxxl:mt-0 mt-[20px] flex justify-end  ">
                <form className="max-w-sm ">
                  <select
                    id="countries"
                    className="bg-transparent border border-[#DDDDDD] cmd:py-[15px] py-[13px] px-[39px] csm:w-[288px] w-[240px] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-[#001710] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {/* <option >Choose a city</option> */}
                    {storeCategory.map((category) => (
                      <option
                        key={category.id}
                        value={category.attributes.title}
                      >
                        {category.attributes.title}
                      </option>
                    ))}
                  </select>
                </form>
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#7DD3FC] to-[#001710] p-[2px] rounded-[32px] w-full mt-[33px]">
              <div className="bg-[#00130D] csm:py-[75px] py-[37px] csm:px-[65px] px-[15px] rounded-[32px] w-full">
                <div className="block w-full">
                  <BarChart />
                </div>
              </div>
            </div>
            <div className="bg-[#fff] shadow-lg shadow-gray-400 csm:px-[81px] px-[30px] clg:py-[116px] csm:py-[76px] py-[36px] rounded-[32px] cxxl:mt-[125px] clg:mt-[85px] mt-[65px]">
              <div className="cxl:flex block justify-between">
                <h1 className="font-bold cmd:text-[54px] csm:text-[48px] text-[40px]">
                  {selectedCategory}
                </h1>
                <div className="clg:flex block gap-[112px] cxl:mt-0 mt-[20px]">
                  <div className="clg:mb-0 mb-[20px]">
                    <p className="cmd:text-[20px] csm:text-[18px] text-[16px]">
                      Total Population (2022)
                    </p>
                    <div className="csm:flex block gap-[23px] items-center">
                      <h1 className="font-bold cmd:text-[64px] csm:text-[54px] text-[44px]">
                        {radarData ? radarData?.totalPopulation : "nothing"}
                      </h1>
                      <p className="cmd:text-[20px] csm:text-[18px] text-[18px]">
                        Million People
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="cmd:text-[20px] csm:text-[18px] text-[16px]">
                      Province Area (2022)
                    </p>
                    <div className="csm:flex block gap-[23px] items-center">
                      <h1 className="font-bold cmd:text-[64px] csm:text-[54px] text-[44px]">
                        {radarData ? radarData?.provinceArea : "Tidak Ada"}
                      </h1>
                      <p className="cmd:text-[20px] csm:text-[18px] text-[18px]">
                        Km^2
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center cmd:mt-[102px] csm:mt-[80px] mt-[60px]">
                <div className="grid cxl:grid-cols-2 grid-cols-1">
                  <Radar data={data} options={option} />
                  <Radar data={dataTriangle} options={option} />
                </div>
              </div>
              <div className="flex flex-col mt-7 ">
                <h1 className="csm:text-[24px] text-[18px]">
                  <span className="  font-semibold text-black">CEI:</span> Clean
                  Energy Initiative (Inisiatif Energi Bersih)
                </h1>
                <h1 className="csm:text-[24px] text-[18px]">
                  <span className="  font-semibold text-black">GC:</span>{" "}
                  Government Capacity (Kapasitas Pemerintahan)
                </h1>
                <h1 className="csm:text-[24px] text-[18px]">
                  <span className="  font-semibold text-black">ER:</span>{" "}
                  Economic Resilience (Ketahanan Ekonomi)
                </h1>
                <h1 className="csm:text-[24px] text-[18px]">
                  <span className="  font-semibold text-black">ETRI:</span>{" "}
                  Energy Transition Readiness Index (Indeks Kesiapan Transisi
                  Energi)
                </h1>
                <h1 className="csm:text-[24px] text-[18px]">
                  <span className="  font-semibold text-black">PCC:</span> Per
                  Capita Consumption (Konsumsi Per Kapita)
                </h1>
                <h1 className="csm:text-[24px] text-[18px]">
                  <span className="  font-semibold text-black">WLI:</span>{" "}
                  Women-Led Initiative (Initiatif yang Dipimpin Perempuan)
                </h1>
                <h1 className="csm:text-[24px] text-[18px]">
                  <span className="  font-semibold text-black">CEV:</span>{" "}
                  Climate-Energy Vulnerability (Kerentanan Iklim dan Energi)
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="flex justify-center mt-[83px] cxl:px-[143px] cmd:px-[100px] csm:px-[60px] px-[30px]">
        <div className="grid cxl:grid-cols-3 csm:grid-cols-2 grid-cols-1 clxl:gap-[150px] cxxl:gap-[100px] cxl:gap-[60px] gap-[40px]">
          {cleanEnergyData ? (
            <div>
              <h1 className="text-[#50E2BB] text-[24px] mb-[18px] font-medium">
                Clean Energy Initiatives{" "}
                <span className="font-bold">(ICEI)</span>
              </h1>
              {cleanEnergyData.map((item) => (
                <ContentIndex
                  key={item.id}
                  indicator={item.attributes.indicator}
                  score={item.attributes.skor}
                  retataNasional={item.attributes.retataNasional}
                />
              ))}
            </div>
          ) : null}
          {economicResilienceData ? (
            <div>
              <h1 className="text-[#50E2BB] text-[24px] mb-[18px] font-medium">
                Economic Resilience <span className="font-bold">(ER)</span>
              </h1>
              {economicResilienceData
                ? economicResilienceData.map((item) => (
                    <ContentIndex
                      key={item.id}
                      indicator={item.attributes.indicator}
                      score={item.attributes.skor}
                      retataNasional={item.attributes.retataNasional}
                    />
                  ))
                : null}
            </div>
          ) : null}
          {govermentCapacityData ? (
            <div>
              <h1 className="text-[#50E2BB] text-[24px] mb-[18px] font-medium">
                Government Capacity <span className="font-bold">(GC)</span>
              </h1>
              {govermentCapacityData
                ? govermentCapacityData.map((item) => (
                    <ContentIndex
                      key={item.id}
                      indicator={item.attributes.indicator}
                      score={item.attributes.skor}
                      retataNasional={item.attributes.retataNasional}
                    />
                  ))
                : null}
            </div>
          ) : null}
        </div>
      </div>

      <div className="flex justify-center mt-[83px] cxl:px-[143px] cmd:px-[100px] csm:px-[60px] px-[30px]">
        <div className="grid cxl:grid-cols-3 csm:grid-cols-2 grid-cols-1 clxl:gap-[150px] cxxl:gap-[100px] cxl:gap-[60px] gap-[40px]">
          {climateVulnerabilityData ? (
            <div>
              <h1 className="text-[#50E2BB] text-[24px] mb-[18px] font-medium">
                Climate Vulnerability <span className="font-bold">(CEV)</span>
              </h1>
              {climateVulnerabilityData
                ? climateVulnerabilityData.map((item) => (
                    <ContentIndicator
                      key={item.id}
                      indicator={item.attributes.indicator}
                      score={item.attributes.value}
                    />
                  ))
                : null}
            </div>
          ) : null}
          {topCitiesData ? (
            <div>
              <h1 className="text-[#50E2BB] text-[24px] mb-[18px] font-medium">
                Top 3 Cities
              </h1>
              {topCitiesData
                ? topCitiesData.map((item) => (
                    <ContentIndicator
                      key={item.id}
                      indicator={item.attributes.city}
                      score={item.attributes.value}
                    />
                  ))
                : null}
            </div>
          ) : null}
          {bottomCitiesData ? (
            <div>
              <h1 className="text-[#50E2BB] text-[24px] mb-[18px] font-medium">
                Bottom 3 Cities
              </h1>
              {bottomCitiesData
                ? bottomCitiesData.map((item) => (
                    <ContentIndicator
                      key={item.id}
                      indicator={item.attributes.city}
                      score={item.attributes.value}
                    />
                  ))
                : null}
            </div>
          ) : null}
        </div>
      </div> */}

      <div className="csm:px-[143px] px-[30px] mt-[73px] mb-[271px]">
        {storeDownload?.map(
          (item) =>
            item.attributes.downloadReport?.data?.length > 0 && (
              <div
                key={item.id}
                className="relative cssm:w-[384px] w-full clxl:w-[290px] mt-[20px]"
              >
                <select
                  className="appearance-none w-full bg-[url('/icons/bgButton.png')] translate-y-0 translate-x-0 hover:translate-y-1 hover:translate-x-1 px-[30px] rounded-[13px] text-white py-[20px] sm:text-[18px] text-[16px] pr-[40px]"
                  onChange={handleDownload}
                >
                  <option
                    className="font-semibold text-black bg-white sm:text-[18px] text-[16px]"
                    value=""
                  >
                    Read Full Report
                  </option>
                  {item.attributes.downloadReport.data.map(
                    (doc: any, index: number) => (
                      <option
                        className="font-semibold bg-white text-black sm:text-[18px] text-[16px]"
                        key={index}
                        value={doc.attributes.url}
                      >
                        {doc.attributes.name}
                      </option>
                    )
                  )}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </div>
            )
        )}
      </div>
    </>
  );
}

