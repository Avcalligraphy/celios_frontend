import React from 'react'
import Navbar from '../navbar';
import Image from 'next/image';
import { useStoreAbout, useStoreMission, useStoreVision } from '@/lib/store';

export default function Header() {
  const storeDataAbout = useStoreAbout((state) => state.dataAbout)
  const storeDataMission = useStoreMission((state) => state.dataMission);
  const storeDataVision = useStoreVision((state) => state.dataVision);
  const encodedImage = (image:string) => {
    image ? image?.replace(/ /g, "%20") : null;
  }
  return (
    <>
      <div className="bg-[url('/images/imageAbout.png')]  w-full  min-h-[842px] ">
        {storeDataAbout.map((item) => (
          <div
            key={item.id}
            // style={{ backgroundImage: `url(${encodedImage(item.attributes.image.data.attributes.url)})` }}
            className=" object-cover w-full min-h-[842px] relative z-10  "
          >
            <div className="fixed top-0 left-0 right-0 z-50">
              <Navbar />
            </div>
            {/* <Image
            src="/icons/bgText.png"
            alt="bg-text"
            width={247}
            height={81}
            className="pt-[153px] ml-[135px] "
          /> */}
            <div className="cxxl:flex block justify-between items-center csm:pt-[283px] pt-[210px]  clg:px-[162px] csm:px-[81px] px-[20px] ">
              <div data-aos="fade-right">
                <img
                  src="/icons/bgText.png"
                  className="w-auto csm:h-[81px] h-[60px] "
                />
                <h1 className="font-bold csm:text-[87px] text-[67px] csm:mt-[-90px] mt-[-56px] leading-[100%]  tracking-[-4%] text-white  ">
                  Who We <br /> Are
                </h1>
              </div>
              <h1
                data-aos="fade-left"
                className=" csm:text-[30px] text-[24px] tracking-[2%] font-semibold text-white max-w-[870px] cxxl:mt-0 mt-[20px] "
              >
                {item.attributes.description}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="clg:px-[117px]  csm:px-[81px] px-[20px] cmd:mt-[-120px] mt-[-60px] ">
        <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] w-full ">
          <div className=" bg-[#00130D] csm:py-[75px] py-[37px] csm:px-[65px] px-[32px] rounded-[32px] w-full  ">
            <div className=" cxl:flex block justify-between items-center gap-[50px] ">
              <h1 className=" bg-gradient-to-t from-[#BDDFCF]  to-[#50E2BB] inline-block text-transparent bg-clip-text font-bold csm:text-[96px] text-[76px] leading-[100%] max-w-[347px] ">
                Our Vision
              </h1>
              {storeDataVision.map((item) => (
                <h1
                  key={item.id}
                  className=" csm:text-[30px] text-[24px] cxl:mt-0 mt-[20px] tracking-[2%] font-medium text-white max-w-[873px] "
                >
                  {item.attributes.description}
                </h1>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] w-full mt-[52px] cxl:hidden block ">
          <div className=" bg-[#00130D] csm:py-[75px] py-[37px] csm:px-[65px] px-[32px] rounded-[32px] w-full  ">
            <div className=" cxl:flex block justify-between items-center gap-[50px] ">
              <h1 className=" bg-gradient-to-t from-[#BDDFCF]  to-[#50E2BB] inline-block text-transparent bg-clip-text font-bold csm:text-[96px] text-[76px] leading-[100%] max-w-[347px] ">
                Our Mission
              </h1>
              {storeDataMission.map((item) => (
                <h1
                  key={item.id}
                  className=" csm:text-[30px] text-[24px] cxl:mt-0 mt-[20px] tracking-[2%] font-medium text-white max-w-[873px] "
                >
                  {item.attributes.description}
                </h1>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] w-full mt-[52px] cxl:block hidden ">
          <div className=" bg-[#00130D] py-[75px] px-[65px] rounded-[32px] w-full  ">
            <div className=" flex justify-between items-center gap-[50px]">
              {storeDataMission.map((item) => (
                <h1
                  key={item.id}
                  className=" csm:text-[30px] text-[24px] cxl:mt-0 mt-[20px] tracking-[2%] font-medium text-white max-w-[873px] "
                >
                  {item.attributes.description}
                </h1>
              ))}
              <h1 className=" bg-gradient-to-t from-[#BDDFCF]  to-[#50E2BB] inline-block text-transparent bg-clip-text font-bold text-[96px] leading-[100%] max-w-[367px] ">
                Our Mission
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
