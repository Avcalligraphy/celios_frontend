import React from 'react'
import Radar from './radar'
import Navbar from '../navbar';
import ContentIndex from '../molecules/index-celios/contentIndex';
import ContentIndicator from '../molecules/index-celios/contentIndicator';
import Button from '../Button.tsx';
import BarChart from './bar';

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
        <div className="w-full bg-[url('/images/background.png')] relative z-10 ">
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>
          <div className="clg:px-[88px] cmd:px-[68px] csm:px-[48px] px-[25px]  ">
            <div className=" cxxl:flex block justify-between pt-[196px] gap-[50px]  ">
              <h1 className=" bg-gradient-to-r from-[#4EE1B5] via-[#BCDECD] to-[#CFE3BE] inline-block text-transparent bg-clip-text font-bold cmd:text-[48px] csm:text-[40px] text-[36px]  leading-[100%] tracking-[-4%]   ">
                Energy Transition Readiness Index
              </h1>
              <div className="cxxl:mt-0 mt-[20px] ">
                <input
                  className=" border-[1px] border-[#DDDDDD] cmd:py-[15px] py-[13px] px-[39px] bg-transparent csm:w-[288px] w-[240px] rounded-[16px] placeholder-[#DDDDDD] cmd:text-[24px] csm:text-[20px] text-[18px] font-medium text-white "
                  placeholder="Nama Daerah"
                />
              </div>
            </div>
            <div className="bg-gradient-to-r from-[#7DD3FC] to-[#001710] p-[2px] rounded-[32px] w-full mt-[33px] ">
              <div className=" bg-[#00130D] csm:py-[75px] py-[37px] csm:px-[65px] px-[32px] rounded-[32px] w-full  ">
                <div className="block w-full">
                  <BarChart />
                </div>
              </div>
            </div>
            <div className=" bg-[#fff] shadow-lg shadow-gray-400 csm:px-[81px] px-[30px] clg:py-[116px] csm:py-[76px] py-[36px]  rounded-[32px] cxxl:mt-[125px] clg:mt-[85px] mt-[65px] ">
              <div className="cxl:flex block justify-between  ">
                <h1 className=" font-bold cmd:text-[54px] csm:text-[48px] text-[40px]  ">
                  Aceh
                </h1>
                <div className="clg:flex block gap-[112px] cxl:mt-0 mt-[20px] ">
                  <div className="clg:mb-0 mb-[20px] ">
                    <p className="cmd:text-[20px] csm:text-[18px] text-[16px] ">
                      Population (2022)
                    </p>
                    <div className="csm:flex block gap-[23px] items-center ">
                      <h1 className=" font-bold cmd:text-[64px] csm:text-[54px] text-[44px]   ">
                        5.40
                      </h1>
                      <p className="cmd:text-[20px] csm:text-[18px] text-[18px] ">
                        Million People
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="cmd:text-[20px] csm:text-[18px] text-[16px] ">
                      Population (2022)
                    </p>
                    <div className="csm:flex block gap-[23px] items-center ">
                      <h1 className=" font-bold cmd:text-[64px] csm:text-[54px] text-[44px]   ">
                        5.40
                      </h1>
                      <p className="cmd:text-[20px] csm:text-[18px] text-[18px] ">
                        Million People
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center cmd:mt-[102px] csm:mt-[80px] mt-[60px]  ">
                <div className="grid cxl:grid-cols-2 grid-cols-1 ">
                  <Radar data={data} options={option} />
                  <Radar data={dataTriangle} options={option} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[83px] cxl:px-[143px] cmd:px-[100px] csm:px-[60px] px-[30px] ">
        <div className="grid cxl:grid-cols-3 csm:grid-cols-2 grid-cols-1 clxl:gap-[150px] cxxl:gap-[100px] cxl:gap-[60px] gap-[40px] ">
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
      </div>

      <div className="flex justify-center mt-[83px] cxl:px-[143px] cmd:px-[100px] csm:px-[60px] px-[30px] ">
        <div className="grid cxl:grid-cols-3 csm:grid-cols-2 grid-cols-1 clxl:gap-[150px] cxxl:gap-[100px] cxl:gap-[60px] gap-[40px] ">
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
      </div>
      <div className="csm:px-[143px] px-[30px] mt-[73px] mb-[271px] ">
        <Button text="Download Report" bg="bg-[url('/icons/bgButton.png')]" />
      </div>
    </>
  );
}
