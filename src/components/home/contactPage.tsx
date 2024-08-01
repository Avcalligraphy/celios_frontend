import Image from 'next/image';
import React, { ReactNode } from 'react'
import BoxSocial from '../molecules/boxSocial';
import BoxContact from '../molecules/boxContact';

interface ContactPageProps{
  children?: ReactNode
  padding?: string
}
export default function ContactPage(props: Partial<ContactPageProps>) {
  const { children = null, padding = "pt-[209px] px-[157px]" } = props;
  return (
    <div className=" bg-[url('/images/backgroundContentFooter.png')] ">
      <div className=" bg-[url('/images/backgroundFooter1.png')] ">
        <div className=" bg-[url('/images/backgroundFooter2.png')] ">
          <div className={`w-full pb-[150px] pt-[209px]  `}>
            {children}
            <div className=" mt-[100px] ">
              {/* <div>
                <Image
                  src="/icons/bgTextSocial.png"
                  width={532.78}
                  height={20.36}
                  alt="bg-text-social"
                />
                <h1 className="text-white text-[54px] font-bold tracking-[-2%] leading-[100%]    ">
                  🗂️ Stay Aware with Us
                </h1>
                <p className=" text-[24px] leading-[150%] text-[#BAE6FD]  mt-[30px] ">
                  Get recent news and updates about our newest publications and
                  activities.
                </p>
              </div> 
              <BoxContact /> */}
              <div className="flex justify-center">
                <div className="mt-[100px]">
                  {/* <Image
                    src="/icons/bgTextSocial.png"
                    width={532.78}
                    height={20.36}
                    alt="bg-text-social"
                  /> */}
                  <h1 className="text-white csm:text-[54px] text-[34px] font-bold tracking-[-2%] leading-[100%] mt-[-60px]   ">
                    Find Us in
                  </h1>
                </div>
              </div>
              <div className="flex justify-center items-center  csm:mt-[40px] mt-[20px] ">
                <div className="grid csm:grid-cols-5 grid-cols-2 gap-[21px] ">
                  <a
                    href="https://www.instagram.com/celios_id/"
                    target="_blank"
                  >
                    <i className=" translate-y-0 hover:translate-y-1 bx bxl-instagram-alt text-[65px] text-white "></i>
                  </a>
                  <a href="mailto:admin@celios.co.id" target="_blank">
                    <i className=" translate-y-0 hover:translate-y-1 bx bxl-gmail text-[65px] text-white "></i>
                  </a>
                  <a href="https://x.com/celios_id" target="_blank">
                    <i className=" translate-y-0 hover:translate-y-1 bx bxl-twitter text-[65px] text-white "></i>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCSB7Kk-s7iKojJiL75SWOhA"
                    target="_blank"
                  >
                    <i className=" translate-y-0 hover:translate-y-1 bx bxl-youtube text-[65px] text-white "></i>
                  </a>
                  <a
                    href="https://www.tiktok.com/@celios_thinktank?lang=en"
                    target="_blank"
                  >
                    <i className=" translate-y-0 hover:translate-y-1 bx bxl-tiktok text-[65px] text-white "></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
