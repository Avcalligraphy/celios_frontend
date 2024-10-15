import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface BoxPublishingProps {
  title: string;
  link: number;
  image: any
}
export default function BoxPublishing({title, link, image} : BoxPublishingProps) {
  const encodedImage = image ? image?.replace(/ /g, "%20") : null;
  const apiURL = process.env.NEXT_PUBLIC_API_URL;
  return (
    <Link
      href={`/celios-publishing/${link}`}
      className=" flex flex-col items-center bg-[#00130D] rounded-[32px]  h-fit px-[26px] cxl:w-full csm:w-[550px] w-full csm:min-h-[550px] min-h-[400px] py-[35px] translate-x-0 translate-y-0 hover:translate-x-1 hover:translate-y-1 "
    >
      <div className="bg-white w-full rounded-[20px] flex justify-center ">
        <img
          src={image ? apiURL + image : null}
          className="  csm:w-[212px] w-[182px] bg-cover object-cover csm:h-[312px] h-[282px] "
        />
      </div>
      <h1 className=" text-center bg-gradient-to-r from-[#CFE3BE]  to-[#FFFFFF] inline-block text-transparent bg-clip-text font-bold cxxl:text-[22px] cxl:text-[22px] csm:text-[20px] text-[18px] tracking-[-2%] max-w-[792px] mt-[36px]   ">
        {title}
      </h1>
    </Link>
  );
}
