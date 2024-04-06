import React from 'react'
import Navbar from '../navbar'
import Image from 'next/image'
import Button from '../Button.tsx';

export default function Header() {
  return (
    <div className="bg-[url('/images/imageHeader.png')]  w-full  min-h-[900px] ">
      <div className="bg-[url('/images/background.png')] object-cover w-full min-h-[1000px]">
        <Navbar />
        <Image
          src="/icons/bgText.png"
          alt="bg-text"
          width={247}
          height={81}
          className="pt-[153px] ml-[465px] "
        />
        <div className=" flex justify-center mt-[-90px] items-center  ">
          <h1 className="font-bold text-[87px] leading-[100px] tracking-[-4%] text-white text-center max-w-[1480px] ">
            Powering the Future: <br /> Embracing the energy for a Suistanable
            World
          </h1>
        </div>
        <div className='flex justify-center items-center mt-[45px]'>
          <Button text="Read More" bg="bg-[url('/icons/bgButton.png')]" />
        </div>
        {/* <img alt="" src="/icons/bgText2.png" className=' ml-[1230px] mt-[-130px] z-0 ' /> */}
        {/* <img alt="" src="/icons/bgText3.png" /> */}
      </div>
    </div>
  );
}
