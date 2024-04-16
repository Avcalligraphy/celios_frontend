import Footer from '@/components/footer'
import ContactPage from '@/components/home/contactPage'
import Navbar from '@/components/navbar'
import Image from 'next/image';
import React from 'react'

export default function ContactUs() {
  return (
    <>
      <div className=" bg-[url('/images/backgroundContentFooter.png')] ">
        <div className=" bg-[url('/images/backgroundFooter1.png')] ">
          <div className=" bg-[url('/images/backgroundFooter2.png')] relative z-10 pb-[150px] ">
            <div className="fixed top-0 left-0 right-0 z-50">
              <Navbar />
            </div>
            <div className="pt-[250px] ml-[70px] ">
              <Image
                src="/icons/bgTextSocial.png"
                width={174.48}
                height={20.36}
                alt="bg-text-social"
              />
              <h1 className="text-white cmd:text-[54px] csm:text-[44px] text-[34px] font-bold tracking-[-2%] leading-[100%] cmd:mt-[-60px] csm:mt-[-50px] mt-[-40px]   ">
                ☎️Contact Us
              </h1>
            </div>
            <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] mt-[46px] csm:mx-[70px] mx-[30px] ">
              <div className="bg-[#00130D] clg:px-[128px] cmd:px-[100px] csm:px-[60px] px-[30px]  pt-[66px] pb-[66px] rounded-[32px] flex flex-col gap-[32px] ">
                <div className=" contactLayout:flex block items-center gap-[20px] ">
                  {/* <Image
                    src="/icons/gmail.png"
                    alt="mail"
                    width={80}
                    height={80}
                  /> */}
                  <img
                    src="/icons/gmail.png"
                    className=" w-auto clg:h-[80px] csm:h-[60px] h-[40px] contactLayout:mb-0 mb-[20px] "
                  />
                  <h1 className=" clg:text-[36px] cmd:text-[30px] csm:text-[26px] text-[24px]  text-white font-semibold leading-[100%] tracking-[-2%]  ">
                    admin@celios.co.id
                  </h1>
                </div>
                <div className="contactLayout:flex block items-center gap-[20px]">
                  <img
                    src="/icons/instagram.png"
                    className=" w-auto clg:h-[80px] csm:h-[60px] h-[40px] contactLayout:mb-0 mb-[20px] "
                  />
                  <h1 className=" clg:text-[36px] cmd:text-[30px] csm:text-[26px] text-[24px]  text-white font-semibold leading-[100%] tracking-[-2%]  ">
                    @celios.id
                  </h1>
                </div>
                <div className="contactLayout:flex block items-center gap-[20px]">
                  <img
                    src="/icons/maps.png"
                    className=" w-auto clg:h-[80px] csm:h-[60px] h-[40px] contactLayout:mb-0 mb-[20px] "
                  />
                  <h1 className=" clg:text-[36px] cmd:text-[30px] csm:text-[26px] text-[24px]  text-white font-semibold leading-[100%] tracking-[-2%]  ">
                    Tokopedia Tower 22th Fl. Jl. Prof. Dr Satrio Karet Semanggi,
                    Setiabudi. Jakarta Selatan. Indonesia 12950
                  </h1>
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
