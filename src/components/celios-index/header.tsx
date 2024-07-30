"use client";
import React, { useEffect, useState } from "react";
import Radar from "./radar";
import Navbar from "../navbar";
import ContentIndex from "../molecules/index-celios/contentIndex";
import ContentIndicator from "../molecules/index-celios/contentIndicator";
import Button from "../Button.tsx";
import BarChart from "./bar";
import {
  fetchDataBottomCities,
  fetchDataCleanEnergy,
  fetchDataClimateVulnerability,
  fetchDataDownloadEnergyTransition,
  fetchDataEconomicResilience,
  fetchDataGovermentCapacity,
  fetchDataIndexCategory,
  fetchDataIndexRadar,
  fetchDataIndexTransition,
  fetchDataTopCities,
  useStoreBottomCities,
  useStoreCleanEnergy,
  useStoreClimateVulnerability,
  useStoreDownloadEnergyTransition,
  useStoreEconomicResilience,
  useStoreGovermentCapacity,
  useStoreIndexCategory,
  useStoreIndexRadar,
  useStoreTopCities,
} from "@/lib/store";
import Loader from "../loader/loader";

export default function Header() {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;
  const [selectedCategory, setSelectedCategory] = useState("Aceh");
  const [radarData, setRadarData] = useState<any | null>(null);
  const [cleanEnergyData, setCleanEnergyData] = useState<any[]>([]);
  const [topCitiesData, setTopCitiesData] = useState<any[]>([]);
  const [bottomCitiesData, setBottomCitiesData] = useState<any[]>([]);
  const [climateVulnerabilityData, setClimateVulnerabilityData] = useState<any[]>([]);
  const [economicResilienceData, setEconomicResilienceData] = useState<any[]>([]);
  const [govermentCapacityData, setGovermentCapacityData] = useState<any[]>(
    []
  );
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    fetchDataIndexTransition();
    fetchDataIndexCategory();
    fetchDataIndexRadar();
    fetchDataCleanEnergy();
    fetchDataEconomicResilience()
    fetchDataGovermentCapacity()
    fetchDataClimateVulnerability()
    fetchDataTopCities()
    fetchDataBottomCities()
    fetchDataDownloadEnergyTransition().then(() => {
      setIsLoading(false); // Setelah selesai fetch data, set isLoading jadi false
    });
  }, []);

  const storeCategory = useStoreIndexCategory(
    (state) => state.dataIndexCategory
  );
  const storeRadar = useStoreIndexRadar((state) => state.dataIndexRadar);
  const storeCleanEnergy = useStoreCleanEnergy(
    (state) => state.dataCleanEnergy
  );
  const storeEconomicResilience = useStoreEconomicResilience((state) => state.dataEconomicResilience)
  const storeGovermentCapacity = useStoreGovermentCapacity((state) => state.dataGovermentCapacity)
  const storeClimateVulnerability = useStoreClimateVulnerability((state) => state.dataClimateVulnerability)
  const storeTopCities = useStoreTopCities((state) => state.dataTopCities)
  const storeBottomCities = useStoreBottomCities((state) => state.dataBottomCities)
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

      const filteredCleanEnergyData = storeCleanEnergy.filter((item) =>
        item.attributes.index_categories.data.some(
          (category:any) => category.attributes.title === selectedCategory
        )
      );

      const filteredEconomicResilience = storeEconomicResilience.filter((item) =>
        item.attributes.index_categories.data.some(
          (category: any) => category.attributes.title === selectedCategory
        )
      );
      const filteredGovermentCapacity = storeGovermentCapacity.filter(
        (item) =>
          item.attributes.index_categories.data.some(
            (category: any) => category.attributes.title === selectedCategory
          )
      );

      const filteredClimateVulnerability = storeClimateVulnerability.filter((item) =>
        item.attributes.index_categories.data.some(
          (category: any) => category.attributes.title === selectedCategory
        )
      );

      const filteredTopCities = storeTopCities.filter(
        (item) =>
          item.attributes.index_categories.data.some(
            (category: any) => category.attributes.title === selectedCategory
          )
      );
      const filteredBottomCities = storeBottomCities.filter((item) =>
        item.attributes.index_categories.data.some(
          (category: any) => category.attributes.title === selectedCategory
        )
      );

      setCleanEnergyData(filteredCleanEnergyData);
      setEconomicResilienceData(filteredEconomicResilience)
      setGovermentCapacityData(filteredGovermentCapacity)
      setClimateVulnerabilityData(filteredClimateVulnerability)
      setTopCitiesData(filteredTopCities)
      setBottomCitiesData(filteredBottomCities);
    }
  }, [selectedCategory, storeRadar, storeCleanEnergy, storeEconomicResilience, storeGovermentCapacity, storeClimateVulnerability, storeTopCities, storeBottomCities]);

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
            <div className="cxxl:flex block justify-between pt-[196px] gap-[50px]">
              <h1 className="bg-gradient-to-r from-[#4EE1B5] via-[#BCDECD] to-[#CFE3BE] inline-block text-transparent bg-clip-text font-bold cmd:text-[48px] csm:text-[40px] text-[36px] leading-[100%] tracking-[-4%]">
                Energy Transition Readiness Index
              </h1>
              <div className="cxxl:mt-0 mt-[20px]">
                <form className="max-w-sm mx-auto">
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
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[83px] cxl:px-[143px] cmd:px-[100px] csm:px-[60px] px-[30px]">
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
      </div>

      <div className="csm:px-[143px] px-[30px] mt-[73px] mb-[271px]">
        {storeDownload
          ? storeDownload.map((item) => (
              <a
                key={item.id}
                href={
                  apiURL + item.attributes.downloadReport.data.attributes.url
                }
                download
              >
                {/* <Button
                  text="Download Report"
                  bg="bg-[url('/icons/bgButton.png')]"
                /> */}
                <button className="translate-y-0 translate-x-0 hover:translate-y-1 hover:translate-x-1 csm:px-[65px] px-[30px] rounded-[13px] text-white py-[20px] font-semibold bg-[url('/icons/bgButton.png')] ">
                  Download Report
                </button>
              </a>
            ))
          : null}
      </div>
    </>
  );
}
