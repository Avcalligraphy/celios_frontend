import Footer from '@/components/footer';
import ContactPage from '@/components/home/contactPage';
import Navbar from '@/components/navbar';
import Image from 'next/image';
import React from 'react'

export default function Trainings() {
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
                  Trainings
                </h1>
              </div>
              <div>
                <p className=" font-semibold text-[#B2B2B2] text-[24px] mt-[61px] ">
                  January 25, 2024
                </p>
                <h1 className=" bg-gradient-to-r from-[#4EE1B5] via-[#BCDECD] to-[#CFE3BE] inline-block text-transparent bg-clip-text font-bold text-[48px] mt-[15px]   ">
                  Pelatihan Jurnalistik 2021
                </h1>
                <p className=" font-medium text-[32px] text-white mt-[30px]  ">
                  Mr Bhima Yudhistira, executive director of think-tank Centre
                  of Economic and Law Studies, and Dr Mohammad Faisal, executive
                  director of Core Indonesia, also a think-tank, said that
                  industrialisation – which creates numerous jobs and upgrades
                  labour skills – would be crucial for Indonesia to upgrade its
                  status to a developed economy and avoid the middle-income
                  trap.
                </p>
                <div className="flex  gap-[72px]  ">
                  <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] mt-[46px]  w-[658px] ">
                    <div className=" bg-[url('/images/imageHeader.png')]  h-[367px] object-cover rounded-[32px] ">
                      <Image
                        src="/images/shadowReports.png"
                        alt="shadow-social"
                        width={728}
                        height={420}
                        className=" rounded-[32px] "
                      />
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] mt-[46px]  w-[658px] ">
                    <div className=" bg-[url('/images/imageHeader.png')]  h-[367px] object-cover rounded-[32px] ">
                      <Image
                        src="/images/shadowReports.png"
                        alt="shadow-social"
                        width={728}
                        height={420}
                        className=" rounded-[32px] "
                      />
                    </div>
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
