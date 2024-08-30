import Image from 'next/image'
import React from 'react'
import Button from '../Button.tsx';
import Link from 'next/link.js';

export default function AboutCelios() {
  return (
    <div className=" flex justify-center  csm:mb-[303px] mb-[263px] csm:mx-[0px] mx-[15px] ">
      <div data-aos="flip-left">
        <div>
          {/* <Image
          src="/icons/titleCOntent.png"
          alt="title-content"
          width={240}
          height={33}
          className=""
        /> */}
          <img
            src="/icons/titleContent.png"
            className=" w-auto cmd:h-[33px] csm:h-[20px] h-[18px] "
          />
          <h1 className=" font-bold cmd:text-[40px] csm:text-[30px] text-[26px] leading-[140%] tracking-[-2%] cmd:mt-[-55px] csm:mt-[-45px] mt-[-38px]  ">
            About CELIOS
          </h1>
        </div>
        <div className=" bg-[url('/icons/frameAboutCelios.png')] bg-cover  cxxl:w-[1195px] clg:w-[895px] cmd:w-[695px] csm:w-[495px] w-[325px] object-cover rounded-[32px] mt-[33px] py-[71px] csm:pl-[80px] pl-[40px] ">
          {/* <Image
            src="/icons/logoHorizon.png"
            alt="log-horizon"
            width={269}
            height={131}
          /> */}
          {/* <img
            src="/icons/logoHorizon.png"
            className="csm:w-[269px] w-[200px] h-auto"
          /> */}
          <p className=" cmd:text-[24px] csm:text-[18px] text-[16px] cmd:max-w-[903px] max-w-[703px] leading-[150%] cmd:mt-[56px] mt-[36px] ">
            <span className="font-bold">CELIOS</span> is a research institution
            based on independence, quality, and an interdisciplinary approach to
            fighting against the climate crisis and inequality.
          </p>
          <Link href="/about-us">
            <Button
              text="Learn More"
              bg="bg-[url('/icons/bgButton.png')] mt-[60px] "
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
