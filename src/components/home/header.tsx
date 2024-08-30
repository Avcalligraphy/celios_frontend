import React from 'react'
import Navbar from '../navbar'
import Image from 'next/image'
import Button from '../Button.tsx';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="bg-[url('/images/imageHeader.png')] bg-cover  w-full  cmd:min-h-[900px] csm:min-h-[700px] min-h-[600px] ">
      <div className="bg-[url('/images/background.png')] w-full cmd:min-h-[700px] csm:min-h-[600px] min-h-[600px] relative z-10 ">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        {/* <Image
          src="/icons/bgText.png"
          alt="bg-text"
          width={247}
          height={81}
          className="pt-[153px] ml-[465px] "
        /> */}
        <div className=" flex justify-center cmd:pt-[270px] csm:px-[0px] px-[15px] csm:pt-[240px] pt-[180px] items-center ">
          <h1
            data-aos="fade-up"
            className="font-bold navMobile:text-[67px] cxl:text-[60px] cmd:text-[57px] csm:text-[40px] text-[37px] csm:leading-[100%] leading-[120%] tracking-[-4%] text-white text-center navMobile:max-w-[1200px] cmd:max-w-[1100px] max-w-[700px]  "
          >
            Embracing the Future: <br /> Supporting Climate and Fiscal Justice
          </h1>
        </div>
        <Link
          href={"/our-desk"}
          className="flex justify-center items-center mt-[45px]"
        >
          <Button
            data-aos="fade-up"
            text="Read More"
            bg="bg-[url('/icons/bgButton.png')]"
          />
        </Link>
        {/* <img alt="" src="/icons/bgText2.png" className=' ml-[1230px] mt-[-130px] z-0 ' /> */}
        {/* <img alt="" src="/icons/bgText3.png" /> */}
      </div>
    </div>
  );
}
