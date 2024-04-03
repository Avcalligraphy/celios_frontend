import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface BoxContentProps {
    image: string,
    title: string,
    desk: string,

}
export default function BoxContent(props: Partial<BoxContentProps>) {
    const { image = "/icons/arrowButton.png", title, desk } = props;
  return (
    <div className="bg-[url('/icons/bgBoxContent.png')] w-[536px] h-[342px] flex flex-col py-[29px] px-[32px]  ">
      <Image
        src="/images/china-desk.png"
        width={213}
        height={103}
        alt="china-desk"
      />
      <h1 className="bg-gradient-to-r from-[#BDDFCF]  to-[#50E2BB] inline-block text-transparent bg-clip-text font-bold text-[24px] my-[12px] leading-[100%] ">
        {title}
      </h1>
      <p className="font-medium text-[20px] max-w-[378px] text-[#BDDFCF] text-justify leading-[100%] ">
        {desk}
      </p>
      <Link href='#' className="flex items-center font-medium text-[20px] text-[#BDDFCF] mt-[20px] ">
        <Image
          src={image}
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
