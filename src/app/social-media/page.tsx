import Footer from '@/components/footer';
import BoxSocial from '@/components/molecules/boxSocial';
import Navbar from '@/components/navbar';
import Image from 'next/image';
import React from 'react'

export default function SocialMedia() {
  return (
    <>
      <>
        <div className=" bg-[url('/images/backgroundContentFooter.png')] ">
          <div className=" bg-[url('/images/backgroundFooter1.png')] ">
            <div className=" bg-[url('/images/backgroundFooter2.png')] relative z-10 ">
              <div className="fixed top-0 left-0 right-0 z-50">
                <Navbar />
              </div>
              <div className=" clg:px-[157px] cmd:px-[100px] csm:px-[60px] px-[30px] pb-[275px] ">
                <div className="csm:pt-[250px] pt-[200px]">
                  <Image
                    src="/icons/bgTextSocial.png"
                    width={174.48}
                    height={20.36}
                    alt="bg-text-social"
                  />
                  <h1 className="text-white cmd:text-[54px] csm:text-[44px] text-[34px] font-bold tracking-[-2%] leading-[100%] cmd:mt-[-60px] csm:mt-[-50px] mt-[-40px]   ">
                    Social Media
                  </h1>
                </div>
                <div className="flex justify-between mt-[52px] items-center ">
                  <div className="border-[1px] border-[#DDDDDD] cmd:py-[15px] py-[13px] px-[39px] bg-transparent rounded-[16px] placeholder-[#DDDDDD] w-fit flex items-center">
                    <input
                      className="  cmd:text-[24px] csm:text-[20px] text-[18px] font-medium text-white bg-transparent w-[50px] "
                      placeholder="10"
                    />
                    <i className="bx bx-chevron-down text-white "></i>
                  </div>
                  <div className="flex flex-row gap-[45px] items-center ">
                    <div className="border-[1px] border-[#DDDDDD] cmd:py-[15px] py-[13px] px-[39px] bg-transparent rounded-[16px] placeholder-[#DDDDDD] w-fit flex items-center">
                      <input
                        className="  cmd:text-[24px] csm:text-[20px] text-[18px] font-medium text-white bg-transparent w-[280px] "
                        placeholder="All"
                      />
                      <i className="bx bx-chevron-down text-white "></i>
                    </div>
                    <div className="border-[1px] border-[#DDDDDD] cmd:py-[15px] py-[13px] px-[39px] bg-transparent rounded-[16px] placeholder-[#DDDDDD] w-fit flex items-center">
                      <input
                        className="  cmd:text-[24px] csm:text-[20px] text-[18px] font-medium text-white bg-transparent "
                        placeholder="Search"
                      />
                      <i className="bx bx-search text-white "></i>
                    </div>
                  </div>
                </div>
                <div className="grid cxxl:grid-cols-2 grid-cols-1 csm:gap-[75px] gap-[50px]  csm:mt-[116px] mt-[55px] ">
                  <BoxSocial />
                  <BoxSocial />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
      <Footer />
    </>
  );
}
