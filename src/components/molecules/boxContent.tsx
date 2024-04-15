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
    <div className="bg-[url('/icons/bgBoxContent.png')] csm:w-[536px] w-[346px] h-[342px] flex flex-col py-[29px] px-[32px] rounded-[32px] object-cover  ">
      {/* <Image
        src="/images/china-desk.png"
        width={213}
        height={103}
        alt="china-desk"
      /> */}
      <img
        src="/images/china-desk.png"
        alt=""
        className="h-auto csm:w-[213px] w-[153px] "
      />
      <h1 className="bg-gradient-to-r from-[#BDDFCF]  to-[#50E2BB] inline-block text-transparent bg-clip-text font-bold csm:text-[24px] text-[18px] my-[12px] leading-[100%] ">
        {title}
      </h1>
      <p className="font-medium csm:text-[20px] text-[16px] csm:max-w-[378px] max-w-[250px] text-[#BDDFCF] text-justify csm:leading-[100%] leading-[120%] ">
        {desk}
      </p>
      <Link
        href="#"
        className="flex items-center font-medium text-[20px] text-[#BDDFCF] mt-[20px] "
      >
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
