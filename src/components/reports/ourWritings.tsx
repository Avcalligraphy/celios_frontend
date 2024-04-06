import Image from 'next/image';
import React from 'react'
import BoxWritings from '../molecules/reports/boxWritings';

export default function OurWritings() {
  return (
    <div className="w-full mt-[383px] ">
      <div className="flex px-[48px] justify-between">
        <div>
          <Image
            src="/icons/titleContent.png"
            alt="title-content"
            width={240}
            height={33}
            className="ml-[0px]"
          />
          <h1 className="font-bold text-[54px] tracking-[-4%] leading-[57px] max-w-[273px] text-center mt-[-60px] ">
            Our Writings
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-[45px] ">
          <BoxWritings />
          <BoxWritings />
        </div>
      </div>
      <div className="bg-gradient-to-t from-[#7CB937] to-[#ffff] w-full h-[552px]">
        <div className=" bg-[url('/images/background.png')] w-full h-[552px] " />
      </div>
    </div>
  );
}
