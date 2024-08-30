import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface BoxContentProps {
    image: string,
    title: string,
    desk: string,
    link: string

}
export default function BoxContent(props: Partial<BoxContentProps>) {
    const { image = "/icons/arrowButton.png", title, desk, link } = props;
  return (
    <div className="bg-[url('/icons/bgBoxContent.png')] csm:w-[536px] w-[346px] h-[284px] flex justify-around flex-col py-[45px] px-[32px] rounded-[32px] object-cover  ">
      <h1 className="bg-gradient-to-r from-[#BDDFCF]  to-[#50E2BB] inline-block text-transparent bg-clip-text font-bold cmd:text-[22px] csm:text-[18px] text-[18px] cmd:my-[12px] my-[5px] leading-[100%] ">
        {title}
      </h1>
      <p className="font-medium cmd:text-[18px] csm:text-[16px] text-[16px] csm:max-w-[448px] max-w-[250px] text-[#FFF] csm:leading-[120%] leading-[120%] ">
        {desk}
      </p>
      <Link
        href={{
          pathname: link,
          query: { name: desk },
        }}
        className="flex items-center translate-y-0 translate-x-0 hover:translate-y-1 hover:translate-x-1  font-medium text-[16px] text-[#BDDFCF] mt-[20px] "
      >
        <Image
          src={image}
          alt="arrow-button"
          width={28}
          height={28}
          className="mr-[17px]"
        />
        See More
      </Link>
    </div>
  );
}
