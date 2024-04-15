import Image from 'next/image';
import React from 'react'
import BoxWritings from '../molecules/reports/boxWritings';

export default function OurWritings() {
  return (
    <div className="w-full csm:mt-[383px] mt-[165px] ">
      <div className="cxxl:flex block csm:px-[48px] px-[25px] gap-[30px] justify-between">
        <div>
          <Image
            src="/icons/titleContent.png"
            alt="title-content"
            width={240}
            height={33}
          />
          <h1 className="font-bold csm:text-[54px] text-[34px] tracking-[-4%] leading-[57px] max-w-[273px] text-left mt-[-50px] cxxl:mb-0 mb-[30px]  ">
            Our Writings
          </h1>
        </div>
        <div className="flex justify-center ">
          <div className="grid cxl:grid-cols-2 grid-cols-1 gap-[45px] ">
            <BoxWritings />
            <BoxWritings />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-t from-[#7CB937] to-[#ffff] w-full h-[552px]">
        <div className=" bg-[url('/images/background.png')] w-full h-[552px] " />
      </div>
    </div>
  );
}
