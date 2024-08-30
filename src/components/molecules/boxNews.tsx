import Image from 'next/image';
import React from 'react'

interface BoxNewsProps{
  title: string,
  // titleIcon: string,
  link: string,

}
export default function BoxNews({title, link} : BoxNewsProps) {
  return (
    <a
      target="_blank"
      href={link}
      className="translate-y-0 translate-x-0 hover:translate-y-1 hover:translate-x-1 bg-gradient-to-r from-[#164E63] to-[#022529] cmd::w-[405px] csm:w-[385px] w-[295px] px-[32px] py-[23px] rounded-[18px] "
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-[12px] mb-[8px] ">
          <div className="csm:h-[10px] h-[8px] csm:w-[10px] w-[8px] rounded-full bg-white" />
          {/* <p className="csm:text-[24px] text-[18px] leading-[100%] tracking-[-2%] text-[#40F4B2] font-semibold ">
            {titleIcon}
          </p> */}
        </div>
        <div className=" bg-[#164E63] shadow-lg shadow-black p-[8px] rounded-[8px]  ">
          <Image src="/icons/arrow.png" width={12} height={12} alt="arrow" />
        </div>
      </div>
      <h1 className=" font-semibold text-white cmd:text-[24px] csm:text-[24px] text-[24px] leading-[100%] tracking-[-2%] csm:max-w-[264px] max-w-[164px] ">
        {title}
      </h1>
    </a>
  );
}
