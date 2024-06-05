import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function BoxBrief() {
  return (
    <div className="bg-[url('/icons/bgBoxContent.png')] csm:w-[536px] w-[346px] h-[342px] flex flex-col py-[30px] px-[32px] rounded-[32px] object-cover  ">
      <h1 className="bg-gradient-to-r from-[#BDDFCF]  to-[#50E2BB] inline-block text-transparent bg-clip-text font-bold csm:text-[24px] text-[18px] my-[12px] leading-[100%] underline ">
        China-Indonesia Monthly Brief: March 2024
      </h1>
      <p className="font-medium text-[16px] text-[#C4C4C4] mt-[13px] ">
        March 31, 2024
      </p>
      <p className="font-medium csm:text-[20px] text-[16px] csm:max-w-[378px] max-w-[250px] text-[#BDDFCF] text-justify csm:leading-[100%] leading-[120%] mt-[26px] ">
        Indonesia opens first direct shipping route to China: On March 31, the
        Batam Island Authority in Indonesia officially inaugurated the direct
        shipping route from Batuampar
      </p>
      <Link
        href="#"
        className="flex items-center font-medium text-[20px] text-[#BDDFCF] mt-[20px] "
      >
        <Image
          src="/icons/arrowButton.png"
          alt="arrow-button"
          width={32}
          height={32}
          className="mr-[17px]"
        />
        See More
      </Link>
    </div>
  );
}
