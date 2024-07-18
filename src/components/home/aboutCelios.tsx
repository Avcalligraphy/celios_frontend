import Image from 'next/image'
import React from 'react'
import Button from '../Button.tsx';
import Link from 'next/link.js';

export default function AboutCelios() {
  return (
    <div className=" flex justify-center  csm:mb-[363px] mb-[263px] csm:mx-[0px] mx-[15px] ">
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
            src="/icons/titleCOntent.png"
            className=" w-auto csm:h-[33px] h-[28px] "
          />
          <h1 className=" font-bold csm:text-[54px] text-[34px] leading-[140%] tracking-[-2%] csm:mt-[-70px] mt-[-50px]  ">
            About CELIOS
          </h1>
        </div>
        <div className=" bg-[url('/icons/frameAboutCelios.png')]  cxxl:w-[1195px] clg:w-[895px] cmd:w-[695px] csm:w-[495px] w-[325px] object-cover rounded-[32px] mt-[33px] py-[71px] pl-[80px] ">
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
          <p className=" csm:text-[24px] text-[18px] cmd:max-w-[903px] max-w-[703px] leading-[150%] mt-[56px] ">
            <span className="font-bold">Lembaga riset</span> yang bergerak
            dibidang makro ekonomi, keuangan, ekonomi hijau dan kebijakan publik
            dalam mendorong percepatan inovasi-digitalisasi secara inklusif.
          </p>
          <Link href='/about-us'>
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
