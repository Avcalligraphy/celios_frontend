import Footer from '@/components/footer';
import BoxSocial from '@/components/molecules/boxSocial';
import Navbar from '@/components/navbar';
import Image from 'next/image';
import React from 'react'

export default function RecentNews() {
  return (
    <>
      <div className=" bg-[url('/images/backgroundContentFooter.png')] ">
        <div className=" bg-[url('/images/backgroundFooter1.png')] ">
          <div className=" bg-[url('/images/backgroundFooter2.png')] ">
            <Navbar />
            <div className=" px-[157px] pb-[275px] ">
              <div className="mt-[195px]">
                <Image
                  src="/icons/bgTextSocial.png"
                  width={532.78}
                  height={20.36}
                  alt="bg-text-social"
                />
                <h1 className="text-white text-[54px] font-bold tracking-[-2%] leading-[100%] mt-[-60px]   ">
                  Recent News
                </h1>
              </div>
              <div className="flex justify-between mt-[61px] ">
                <div className=" flex items-center justify-between border-[1px] border-[#DDDDDD] py-[15px] px-[39px] bg-transparent w-[200px] rounded-[16px]">
                  <input
                    className=" placeholder-[#DDDDDD] text-[24px] font-medium text-white bg-transparent max-w-[100px] "
                    placeholder="10"
                  />
                  <i className="bx bx-chevron-down text-[30px] text-white "></i>
                </div>
                <div className="flex gap-[45px] ">
                  <input
                    className=" border-[1px] border-[#DDDDDD] py-[15px] px-[39px] bg-transparent w-[288px] rounded-[16px] placeholder-[#DDDDDD] text-[24px] font-medium text-white "
                    placeholder="Filter"
                  />
                  <div className=" flex items-center justify-between border-[1px] border-[#DDDDDD] py-[15px] px-[39px] bg-transparent w-[468px] rounded-[16px]">
                    <input
                      className=" placeholder-[#DDDDDD] text-[24px] font-medium text-white bg-transparent "
                      placeholder="Search"
                    />
                    <i className="bx bx-search text-[30px] text-white "></i>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-[61px] ">
                <div className="grid grid-cols-2 gap-[101px]">
                  <BoxSocial />
                  <BoxSocial />
                  <BoxSocial />
                  <BoxSocial />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
