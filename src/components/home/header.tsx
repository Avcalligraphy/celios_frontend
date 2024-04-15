import React from 'react'
import Navbar from '../navbar'
import Image from 'next/image'
import Button from '../Button.tsx';

export default function Header() {
  return (
    <div className="bg-[url('/images/imageHeader.png')]  w-full  csm:min-h-[900px] min-h-[800px] ">
      <div className="bg-[url('/images/background.png')] object-cover w-full csm:min-h-[1000px] min-h-[800px] relative z-10 ">
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
        <div className=" flex justify-center csm:pt-[323px] csm:px-[0px] px-[15px] pt-[220px] items-center ">
          <h1 className="font-bold cxl:text-[87px] clg:text-[67px] cmd:text-[57px] csm:text-[40px] text-[37px] csm:leading-[100%] leading-[120%] tracking-[-4%] text-white text-center max-w-[1480px]  ">
            Powering the Future: <br /> Embracing the energy for a Suistanable
            World
          </h1>
        </div>
        <div className="flex justify-center items-center mt-[45px]">
          <Button text="Read More" bg="bg-[url('/icons/bgButton.png')]" />
        </div>
        {/* <img alt="" src="/icons/bgText2.png" className=' ml-[1230px] mt-[-130px] z-0 ' /> */}
        {/* <img alt="" src="/icons/bgText3.png" /> */}
      </div>
    </div>
  );
}
