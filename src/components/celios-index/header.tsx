import React from 'react'
import Radar from './radar'
import Navbar from '../navbar';
import ContentIndex from '../molecules/index-celios/contentIndex';
import ContentIndicator from '../molecules/index-celios/contentIndicator';
import Button from '../Button.tsx';

export default function Header() {
   const data = {
     labels: ["CEI", "ER", "ETRI", "GC"],
     datasets: [
       {
         label: "Index Aceh 1",
         data: [23, 40, 50, 60],
         fill: true,
         backgroundColor: "rgba(78, 224, 185, 0.3)",
         borderColor: "rgb(46, 180, 144)",
         pointBackgroundColor: "rgb(46, 180, 144)",
         pointBorderColor: "#fff",
         pointHoverBackgroundColor: "#fff",
         pointHoverBorderColor: "rgb(46, 180, 144)",
       },
     ],
   };
    const option = {
      elements: {
        line: {
          borderWidth: 3,
          borderColor: '#000'
        },
      },
    };

     const dataTriangle = {
       labels: ["CEV", "PCC", "WLI"],
       datasets: [
         {
           label: "Index Aceh 2",
           data: [23, 40, 50],
           fill: true,
           backgroundColor: "rgba(78, 224, 185, 0.3)",
           borderColor: "rgb(46, 180, 144)",
           pointBackgroundColor: "rgb(46, 180, 144)",
           pointBorderColor: "#fff",
           pointHoverBackgroundColor: "#fff",
           pointHoverBorderColor: "rgb(46, 180, 144)",
         },
       ],
     };
  return (
    <>
      <div className=" bg-gradient-to-b from-[#031B1F] from-20% to-white to-90% ">
        <div className="w-full bg-[url('/images/background.png')] ">
          <Navbar />
          <div className="px-[108px]">
            <div className="flex justify-between mt-[96px] ">
              <h1 className=" bg-gradient-to-r from-[#4EE1B5] via-[#BCDECD] to-[#CFE3BE] inline-block text-transparent bg-clip-text font-bold text-[48px]   ">
                Energy Transition Readiness Index
              </h1>
              <input
                className=" border-[1px] border-[#DDDDDD] py-[15px] px-[39px] bg-transparent w-[288px] rounded-[16px] placeholder-[#DDDDDD] text-[24px] font-medium text-white "
                placeholder="Nama Daerah"
              />
            </div>
            <div className=" bg-[#fff] shadow-lg shadow-gray-400 px-[81px] py-[116px]  rounded-[32px] mt-[125px] ">
              <div className="flex justify-between">
                <h1 className=" font-bold text-[54px]  ">Aceh</h1>
                <div className="flex gap-[112px]">
                  <div>
                    <p className="text-[20px]">Population (2022)</p>
                    <div className="flex gap-[23px] items-center ">
                      <h1 className=" font-bold text-[64px]  ">5.40</h1>
                      <p className="text-[20px]">Million People</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-[20px]">Population (2022)</p>
                    <div className="flex gap-[23px] items-center ">
                      <h1 className=" font-bold text-[54px]  ">5.40</h1>
                      <p className="text-[20px]">Million People</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-[102px] gap-[112px] ">
                <Radar data={data} options={option} />
                <Radar data={dataTriangle} options={option} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-[83px] px-[143px] ">
        <div>
          <h1 className=" text-[#50E2BB] text-[24px] mb-[18px] font-medium ">
            Clean Energy Initialives <span className="font-bold">(ICEI)</span>
          </h1>
          <ContentIndex />
          <ContentIndex />
          <ContentIndex />
        </div>
        <div>
          <h1 className=" text-[#50E2BB] text-[24px] mb-[18px] font-medium ">
            Clean Energy Initialives <span className="font-bold">(ICEI)</span>
          </h1>
          <ContentIndex />
          <ContentIndex />
          <ContentIndex />
        </div>
        <div>
          <h1 className=" text-[#50E2BB] text-[24px] mb-[18px] font-medium ">
            Clean Energy Initialives <span className="font-bold">(ICEI)</span>
          </h1>
          <ContentIndex />
          <ContentIndex />
          <ContentIndex />
        </div>
      </div>

      <div className="flex justify-between mt-[83px] px-[143px] ">
        <div>
          <h1 className=" text-[#50E2BB] text-[24px] mb-[18px] font-medium ">
            Climate-Energy Vulnerability{" "}
            <span className="font-bold">(ICEV)</span>
          </h1>
          <ContentIndicator />
        </div>
        <div>
          <h1 className=" text-[#50E2BB] text-[24px] mb-[18px] font-medium ">
            Climate-Energy Vulnerability{" "}
            <span className="font-bold">(ICEV)</span>
          </h1>
          <ContentIndicator />
        </div>
        <div>
          <h1 className=" text-[#50E2BB] text-[24px] mb-[18px] font-medium ">
            Climate-Energy Vulnerability{" "}
            <span className="font-bold">(ICEV)</span>
          </h1>
          <ContentIndicator />
        </div>
      </div>
      <div className="px-[143px] mt-[73px] mb-[271px] ">
        <Button text="Download Report" bg="bg-[url('/icons/bgButton.png')]" />
      </div>
    </>
  );
}
