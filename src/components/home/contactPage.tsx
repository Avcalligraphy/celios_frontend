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
                  <Image
                    src="/icons/instagram.png"
                    width={65}
                    height={65}
                    alt="instagram"
                  />
                  <Image
                    src="/icons/gmail.png"
                    width={65}
                    height={65}
                    alt="gmail"
                  />
                  <Image
                    src="/icons/twitter.png"
                    width={65}
                    height={65}
                    alt="twitter"
                  />
                  <Image
                    src="/icons/youtube.png"
                    width={76}
                    height={58}
                    alt="youtube"
                  />
                  <Image
                    src="/icons/tiktok.png"
                    width={60}
                    height={63}
                    alt="tiktok"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
