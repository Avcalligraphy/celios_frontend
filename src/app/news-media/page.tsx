"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "@/components/footer";
import BoxPublishing from "@/components/molecules/celios-publixhing/boxPublishing";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React from "react";
import { fetchDataMedia, fetchDataOpEd, useStoreMedia, useStoreOpEd } from "@/lib/store";
import Loader from "@/components/loader/loader";

export default function NewsMedia() {
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    AOS.init();
    fetchDataOpEd()
    fetchDataMedia().then(() => {
      setIsLoading(false); // Setelah selesai fetch data, set isLoading jadi false
    });
  }, []);

  const storeDataOpEd = useStoreOpEd((state) => state.dataOpEd)
  const storeDataMedia = useStoreMedia((state) => state.dataMedia);

   if (isLoading) {
     return <Loader />; // Tampilkan loading jika masih fetching data
   }
  return (
    <>
      <div className=" bg-gradient-to-b from-[#031B1F] from-20% to-white to-90% csm:mb-[324px] mb-[160px] ">
        <div className="w-full bg-[url('/images/background.png')] relative z-10 ">
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>
          <div className="csm:px-[70px] px-[25px] csm:pt-[220px] pt-[180px] ">
            <div className="flex items-center justify-between mb-[27px] ">
              <div className="">
                <Image
                  src="/icons/bgTextSocial.png"
                  width={174.48}
                  height={20.36}
                  alt="bg-text-social"
                />
                <h1 className="text-white cmd:text-[54px] csm:text-[44px] text-[34px] font-bold tracking-[-2%] leading-[100%] cmd:mt-[-60px] csm:mt-[-50px] mt-[-40px]   ">
                  OpEd
                </h1>
              </div>
              {/* <div className="border-[1px] border-[#DDDDDD] cmd:py-[15px] py-[13px] px-[39px] bg-transparent rounded-[16px] placeholder-[#DDDDDD] w-fit flex items-center">
                <input
                  className="  cmd:text-[24px] csm:text-[20px] text-[18px] font-medium text-white bg-transparent "
                  placeholder="Search"
                />
                <i className="bx bx-search text-white "></i>
              </div> */}
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] w-full "
            >
              <div className=" bg-[#00130D] csm:py-[75px] py-[37px] csm:px-[65px] px-[32px] rounded-[32px] w-full  ">
                <div className="block">
                  {storeDataOpEd.map((item) => (
                    <div key={item.id}>
                      <a
                        target="_blank"
                        href={item.attributes.link}
                        className="text-[20px] font-medium text-[#BDDFCF] underline "
                      >
                        {item.attributes.title}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-[27px] mt-[120px] ">
              <div className="">
                <Image
                  src="/icons/bgTextSocial.png"
                  width={174.48}
                  height={20.36}
                  alt="bg-text-social"
                />
                <h1 className="text-white cmd:text-[54px] csm:text-[44px] text-[34px] font-bold tracking-[-2%] leading-[100%] cmd:mt-[-60px] csm:mt-[-50px] mt-[-40px]   ">
                  Media Comentaries
                </h1>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] w-full "
            >
              <div className=" bg-[#00130D] csm:py-[64px] py-[44px] csm:px-[65px] px-[32px] rounded-[32px] w-full  ">
                <div className="block">
                  {storeDataMedia.map((item) => (
                    <div key={item.id}>
                      <a
                        target="_blank"
                        href={item.attributes.link}
                        className="text-[20px] font-medium text-[#BDDFCF] underline "
                      >
                        {item.attributes.title}
                      </a>
                    </div>
                  ))}
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
