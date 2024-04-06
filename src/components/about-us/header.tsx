import React from 'react'
import Navbar from '../navbar';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <div className="bg-[url('/images/imageAbout.png')]  w-full  min-h-[842px] ">
        <div className="bg-[url('/images/background.png')] object-cover w-full min-h-[842px]">
          <Navbar />
          <Image
            src="/icons/bgText.png"
            alt="bg-text"
            width={247}
            height={81}
            className="pt-[153px] ml-[135px] "
          />
          <div className="flex justify-between mt-[-90px]  px-[162px] ">
            <h1 className="font-bold text-[87px] leading-[100px] tracking-[-4%] text-white  ">
              What Is <br /> Celios
            </h1>
            <h1 className=" text-[30px] tracking-[2%] font-semibold text-white max-w-[870px] ">
              CELIOS merupakan lembaga riset di Indonesia yang bergerak dibidang
              makro ekonomi, keuangan, ekonomi hijau dan kebijakan publik dalam
              mendorong percepatan inovasi-digitalisasi secara inklusif.
            </h1>
          </div>
        </div>
      </div>
      <div className="px-[117px] mt-[-120px] ">
        <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] w-full ">
          <div className=" bg-[#00130D] py-[75px] px-[65px] rounded-[32px] w-full  ">
            <div className=" flex justify-between items-center ">
              <h1 className=" bg-gradient-to-t from-[#BDDFCF]  to-[#50E2BB] inline-block text-transparent bg-clip-text font-bold text-[96px] leading-[100%] max-w-[347px] ">
                Our Vision
              </h1>
              <h1 className=" text-[30px] tracking-[2%] font-medium text-white max-w-[873px] ">
                CELIOS merupakan lembaga riset di Indonesia yang bergerak
                dibidang makro ekonomi, keuangan, ekonomi hijau dan kebijakan
                publik dalam mendorong percepatan inovasi-digitalisasi secara
                inklusif.
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] w-full mt-[52px] ">
          <div className=" bg-[#00130D] py-[75px] px-[65px] rounded-[32px] w-full  ">
            <div className=" flex justify-between items-center ">
              <h1 className=" text-[30px] tracking-[2%] font-medium text-white max-w-[873px] ">
                CELIOS merupakan lembaga riset di Indonesia yang bergerak
                dibidang makro ekonomi, keuangan, ekonomi hijau dan kebijakan
                publik dalam mendorong percepatan inovasi-digitalisasi secara
                inklusif.
              </h1>
              <h1 className=" bg-gradient-to-t from-[#BDDFCF]  to-[#50E2BB] inline-block text-transparent bg-clip-text font-bold text-[96px] leading-[100%] max-w-[347px] ">
                Our Mission
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
