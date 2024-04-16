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
        <div className="bg-[url('/images/background.png')] object-cover w-full min-h-[842px] relative z-10 ">
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>
          <div className="cxxl:flex block justify-between cmd:pt-[283px]   clg:px-[162px] csm:px-[81px] items-center  px-[20px] pt-[200px] ">
            <div>
              {/* <Image
                src="/icons/bgText.png"
                alt="bg-text"
                width={247}
                height={81}
                className="  "
              /> */}
              <img
                src="/icons/bgText.png"
                className="w-auto csm:h-[81px] h-[60px] "
              />
              {listDesk.map((item, index) => {
                if (item.deskId === params.deskId) {
                  return (
                    <h1
                      key={index}
                      className="font-bold csm:text-[87px] text-[67px] csm:mt-[-90px] mt-[-56px] leading-[100%] tracking-[-4%] text-white max-w-[404px] "
                    >
                      {item.name}
                    </h1>
                  );
                }
                return null;
              })}
            </div>
            <h1 className=" text-[30px] tracking-[2%] font-semibold text-white max-w-[870px] ">
              CELIOS merupakan lembaga riset di Indonesia yang bergerak dibidang
              makro ekonomi, keuangan, ekonomi hijau dan kebijakan publik dalam
              mendorong percepatan inovasi-digitalisasi secara inklusif.
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full csm:px-[70px] px-[25px] mt-[100px] ">
        <div>
          <Image
            src="/icons/titleCOntent.png"
            alt="title-content"
            width={240}
            height={33}
          />

          <h1 className=" font-bold csm:text-[54px] text-[34px] leading-[140%] tracking-[-2%] csm:mt-[-70px] mt-[-35px] ">
            Newest Reports
          </h1>
        </div>
        <div className="flex justify-center items-center mt-[30px] ">
          <div className="grid clxl:grid-cols-2 grid-cols-1 gap-[53px]">
            <BoxReports />
            <BoxReports />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
