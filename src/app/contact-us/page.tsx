import Footer from '@/components/footer'
import ContactPage from '@/components/home/contactPage'
import Navbar from '@/components/navbar'
import Image from 'next/image';
import React from 'react'

export default function ContactUs() {
  return (
    <>
      <ContactPage padding="pt-[0px] ">
        <Navbar />
        <div className="mt-[230px] ml-[70px] ">
          <Image
            src="/icons/bgTextSocial.png"
            width={532.78}
            height={20.36}
            alt="bg-text-social"
          />
          <h1 className="text-white text-[54px] font-bold tracking-[-2%] leading-[100%] mt-[-60px]   ">
            ☎️Contact Us
          </h1>
        </div>
        <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] mt-[46px] mx-[70px] ">
          <div className="bg-[#00130D] px-[128px] pt-[66px] pb-[66px] rounded-[32px] flex flex-col gap-[32px] ">
            <div className=" flex items-center gap-[20px] ">
              <Image src="/icons/gmail.png" alt="mail" width={80} height={80} />
              <h1 className=" text-[36px] text-white font-semibold leading-[100%] tracking-[-2%]  ">
                admin@celios.co.id
              </h1>
            </div>
            <div className="flex items-center gap-[20px]">
              <Image
                src="/icons/instagram.png"
                alt="mail"
                width={80}
                height={80}
              />
              <h1 className=" text-[36px] text-white font-semibold leading-[100%] tracking-[-2%]  ">
                @celios.id
              </h1>
            </div>
            <div className="flex items-center gap-[20px]">
              <Image src="/icons/maps.png" alt="mail" width={80} height={80} />
              <h1 className=" text-[36px] text-white font-semibold leading-[100%] tracking-[-2%]  ">
                Tokopedia Tower 22th Fl. Jl. Prof. Dr Satrio Karet Semanggi,
                Setiabudi. Jakarta Selatan. Indonesia 12950
              </h1>
            </div>
          </div>
        </div>
      </ContactPage>
      <Footer />
    </>
  );
}
