import Footer from '@/components/footer';
import BoxReports from '@/components/molecules/reports/boxReports';
import Navbar from '@/components/navbar';
import listDesk from '@/components/our-desk/lisDesk';
import Image from 'next/image';
import React from 'react'

export default function CeliosDesk({params}: {
    params: {deskId: string}
}) {
  return (
    <>
      <div className="bg-[url('/images/imageChina.png')]  w-full  min-h-[842px] ">
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
            {listDesk.map((item, index) => {
              if (item.deskId === params.deskId) {
                return (
                  <h1
                    key={index}
                    className="font-bold text-[87px] leading-[100px] tracking-[-4%] text-white max-w-[404px] "
                  >
                    {item.name}
                  </h1>
                );
              }
              return null;
            })}
            <h1 className=" text-[30px] tracking-[2%] font-semibold text-white max-w-[870px] ">
              CELIOS merupakan lembaga riset di Indonesia yang bergerak dibidang
              makro ekonomi, keuangan, ekonomi hijau dan kebijakan publik dalam
              mendorong percepatan inovasi-digitalisasi secara inklusif.
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full px-[70px] my-[120px] ">
        <div>
          <Image
            src="/icons/titleCOntent.png"
            alt="title-content"
            width={240}
            height={33}
            className="ml-[95px]"
          />
          <h1 className=" font-bold text-[54px] leading-[140%] tracking-[-2%] mt-[-70px] ">
            Newest Reports
          </h1>
        </div>
        <div className="flex justify-center items-center gap-[53px] mt-[30px] ">
          <BoxReports />
          <BoxReports />
        </div>
      </div>
      <Footer />
    </>
  );
}
