import Image from 'next/image';
import React from 'react'
import BoxRecent from '../molecules/boxRecent';

export default function RecentPublication() {
  return (
    <div className="w-full ">
      <div className="flex px-[48px] justify-between">
        <div>
          <Image
            src="/icons/titleContent.png"
            alt="title-content"
            width={240}
            height={33}
            className="ml-[140px]"
          />
          <h1 className="font-bold text-[54px] tracking-[-4%] leading-[57px] max-w-[481px] text-center mt-[-60px] ">
            Recent Publications
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-[45px] ">
          <BoxRecent />
          <BoxRecent />
          <BoxRecent />
        </div>
      </div>
      <div className="bg-gradient-to-t from-[#7CB937] to-[#ffff] w-full h-[1152px]">
        <div className=" bg-[url('/images/background.png')] w-full h-[1152px] " />
      </div>
    </div>
  );
}
