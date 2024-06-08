"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/footer";
import ContactPage from "@/components/home/contactPage";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React, { useEffect } from "react";

export default function Trainings() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
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
                  Trainings
                </h1>
              </div>
              <div>
                <div data-aos="fade-right">
                  <p className=" font-semibold text-[#B2B2B2] cmd:text-[24px] csm:text-[20px] text-[16px] mt-[61px] ">
                    January 25, 2024
                  </p>
                  <h1 className=" bg-gradient-to-r from-[#4EE1B5] via-[#BCDECD] to-[#CFE3BE] inline-block text-transparent bg-clip-text font-bold cmd:text-[48px] csm:text-[40px] text-[34px] mt-[15px]   ">
                    Pelatihan Jurnalistik 2021
                  </h1>
                  <p className=" font-medium cmd:text-[32px] csm:text-[28px] text-[22px] text-white mt-[30px]  ">
                    Mr Bhima Yudhistira, executive director of think-tank Centre
                    of Economic and Law Studies, and Dr Mohammad Faisal,
                    executive director of Core Indonesia, also a think-tank,
                    said that industrialisation – which creates numerous jobs
                    and upgrades labour skills – would be crucial for Indonesia
                    to upgrade its status to a developed economy and avoid the
                    middle-income trap.
                  </p>
                </div>
                <div
                  data-aos="flip-left"
                  className="clg:flex block  gap-[72px]  "
                >
                  <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] mt-[46px]  clg:w-[658px] w-full ">
                    <img
                      className="  cxl:h-[367px] csm:h-[267px] h-[167px] w-full object-cover rounded-[32px] "
                      src="/images/imageHeader.png"
                    />
                  </div>
                  <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] mt-[46px]  clg:w-[658px] w-full ">
                    <img
                      className="  cxl:h-[367px] csm:h-[267px] h-[167px w-full object-cover rounded-[32px] "
                      src="/images/imageHeader.png"
                    />
                  </div>
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
