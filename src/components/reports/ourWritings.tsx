import Image from 'next/image';
import React from 'react'
import BoxWritings from '../molecules/reports/boxWritings';

export default function OurWritings() {
  return (
    <div data-aos="zoom-in-left" className="w-full csm:mt-[383px] mt-[165px] ">
      <div className=" block csm:px-[48px] px-[25px]">
        <div>
          <Image
            src="/icons/bgTextSocial.png"
            width={174.48}
            height={20.36}
            alt="bg-text-social"
          />
          <h1 className="text-black cmd:text-[54px] csm:text-[44px] text-[34px] font-bold tracking-[-2%] leading-[100%] cmd:mt-[-60px] csm:mt-[-50px] mt-[-40px]   ">
            Op Ed
          </h1>
        </div>
        <div className="flex justify-center mt-[54px] ">
          <div className="grid cxl:grid-cols-3 grid-cols-1 gap-[45px] ">
            <BoxWritings />
            <BoxWritings />
            <BoxWritings />
            <BoxWritings />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-t from-[#031B1F] to-[#ffff] w-full h-[552px]">
        <div className=" bg-[url('/images/background.png')] w-full h-[552px] " />
      </div>
    </div>
  );
}
