import Image from 'next/image';
import React from 'react'
import BoxRecent from '../molecules/boxRecent';
import BoxNews from '../molecules/boxNews';

export default function RecentPublication() {
  return (
    <>
      <div className="w-full clg:block justify-center flex  ">
        <div className="clg:flex block clg:px-[48px] px-[0px] justify-between">
          <div>
            {/* <Image
            src="/icons/titleContent.png"
            alt="title-content"
            width={240}
            height={33}
            className="ml-[140px]"
          /> */}
            <h1 className="font-bold csm:text-[54px] text-[34px] tracking-[-4%] csm:leading-[140%] leading-[120%] clg:max-w-[481px] max-w-[330px]  clg:text-center text-left mb-[45px]  ">
              Recent Publications
            </h1>
          </div>
          <div className="grid clxl:grid-cols-3 navMobile:grid-cols-2 grid-cols-1 gap-[45px] ">
            <BoxRecent />
            <BoxRecent />
            <BoxRecent />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-t from-[#7CB937] to-[#ffff] w-full min-h-[1152px]">
        <div className=" bg-[url('/images/background.png')] w-full min-h-[1152px] pt-[360px] ">
          <div className="flex justify-center  ">
            <div>
              {/* <Image
                src="/icons/bgTextSocial.png"
                width={532.78}
                height={20.36}
                alt="bg-text-social"
              /> */}
              <img src="/icons/bgTextSocial.png" className=' h-[20.36px] w-auto ' />
              <h1 className="text-black  font-bold tracking-[-2%] leading-[100%] csm:text-[54px] text-[34px] csm:mt-[-60px] mt-[-40px]   ">
                Recent News
              </h1>
              <div className="grid clxl:grid-cols-3 navMobile:grid-cols-2 grid-cols-1 csm:gap-[57px] gap-[37px] csm:mt-[80px] mt-[40px] ">
                <BoxNews />
                <BoxNews />
                <BoxNews />
                <BoxNews />
                <BoxNews />
                <BoxNews />
              </div>
              <div className="flex justify-end items-center gap-[18px] my-[56px] ">
                <h1 className=" font-semibold text-black leading-[100%] tracking-[-2%] ">
                  See More
                </h1>
                <Image
                  src="/icons/arrowButton.png"
                  height={40}
                  width={40}
                  alt="arrow-buttons"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
