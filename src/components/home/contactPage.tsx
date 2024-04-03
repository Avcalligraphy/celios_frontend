import Image from 'next/image';
import React from 'react'
import BoxSocial from '../molecules/boxSocial';
import BoxContact from '../molecules/boxContact';

export default function ContactPage() {
  return (
    <div className=" bg-[url('/images/backgroundContentFooter.png')] ">
      <div className=" bg-[url('/images/backgroundFooter1.png')] ">
        <div className=" bg-[url('/images/backgroundFooter2.png')] ">
          <div className=" pt-[209px] w-full pb-[150px] px-[157px] ">
            <div className="flex justify-center">
              <div>
                <Image
                  src="/icons/bgTextSocial.png"
                  width={532.78}
                  height={20.36}
                  alt="bg-text-social"
                />
                <h1 className="text-white text-[54px] font-bold tracking-[-2%] leading-[100%] mt-[-60px]   ">
                  🔗Social Media
                </h1>
                <p className=" text-[24px] leading-[150%] text-[#BAE6FD] text-center mt-[30px] ">
                  Let is connect and engage with us!
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-[75px]  mt-[116px] ">
              <BoxSocial />
              <BoxSocial />
            </div>
            <div className=" mt-[230px] ">
              <div>
                <Image
                  src="/icons/bgTextSocial.png"
                  width={532.78}
                  height={20.36}
                  alt="bg-text-social"
                />
                <h1 className="text-white text-[54px] font-bold tracking-[-2%] leading-[100%] mt-[-60px]   ">
                  🗂️ Stay Aware with Us
                </h1>
                <p className=" text-[24px] leading-[150%] text-[#BAE6FD]  mt-[30px] ">
                  Get recent news and updates about our newest publications and
                  activities.
                </p>
              </div>
              <BoxContact />
              <div className="flex justify-center">
                <div className="mt-[100px]">
                  <Image
                    src="/icons/bgTextSocial.png"
                    width={532.78}
                    height={20.36}
                    alt="bg-text-social"
                  />
                  <h1 className="text-white text-[54px] font-bold tracking-[-2%] leading-[100%] mt-[-60px]   ">
                    Find Us in
                  </h1>
                </div>
              </div>
              <div className="flex justify-center items-center gap-[21px] mt-[40px] ">
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
  );
}
