'use client'
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { fetchDataChinaLibrary, useStoreChinaLibrary } from '@/lib/store';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react'

export default function ChinaLibrary() {
  useEffect(() => {
    fetchDataChinaLibrary()
  }, [])
  const storeDataLibrary = useStoreChinaLibrary((state) => state.dataChinaLibrary)
  
  return (
    <>
      <div className="bg-[url('/images/imageChina.png')]  w-full  min-h-[842px] ">
        <div className="bg-[url('/images/background.png')] object-cover w-full min-h-[842px] relative z-10 ">
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>
          <div className="block cmd:pt-[283px]   clg:px-[162px] csm:px-[81px]  px-[20px] pt-[200px] ">
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
              <h1 className="font-bold csm:text-[87px] text-[67px] csm:mt-[-90px] mt-[-56px] leading-[100%] tracking-[-4%] text-white max-w-[804px] mb-[25px] ">
                China Indonesia Library
              </h1>
            </div>
            <h1 className=" text-[30px] tracking-[2%] font-semibold text-white max-w-[1200px] ">
              China-Indonesia Library at CELIOS is a bibliography which covers
              all aspects of modern China-Indonesia relations—politics, energy,
              trade, investment, and the rare discussion of cultural aspects.
              For now, only English and Bahasa materials are included in this
              bibliography. Nonetheless, Chinese language materials will be
              added here soon.
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between gap-[50px] csm:px-[70px] px-[25px] mt-[100px] mb-[210px] ">
        <div>
          <div>
            <Image
              src="/icons/titleCOntent.png"
              alt="title-content"
              width={240}
              height={33}
            />

            <h1 className=" font-bold csm:text-[54px] text-[34px] leading-[140%] tracking-[-2%] csm:mt-[-70px] mt-[-35px] ">
              Library
            </h1>
          </div>
          <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] w-full mt-[33px]   ">
            <div className=" bg-[#00130D] csm:py-[75px] py-[37px] csm:px-[65px] px-[32px] rounded-[32px] w-full  ">
              <div className="block">
                {storeDataLibrary.map((item) => (
                  <ul
                    className="list-disc text-[20px] font-medium text-[#BDDFCF] "
                    key={item.id}
                  >
                    <li>
                      <a
                        target="_blank"
                        className="underline"
                        href={item.attributes.link}
                      >
                        {item.attributes.title}
                      </a>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
