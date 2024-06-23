'use client'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Footer from "@/components/footer";
import BoxSocial from "@/components/molecules/boxSocial";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React from "react";
import { fetchDataNews, useStoreNews } from "@/lib/store";
import BoxNews from "@/components/molecules/boxNews";
import Loader from "@/components/loader/loader";

export default function News() {
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    AOS.init();
    fetchDataNews().then(() => {
      setIsLoading(false); // Setelah selesai fetch data, set isLoading jadi false
    });
  }, []);
  const storeDataNews = useStoreNews((state) => state.dataNews);
  if (isLoading) {
    return <Loader />; // Tampilkan loading jika masih fetching data
  }
  return (
    <>
      <div className=" bg-[url('/images/backgroundContentFooter.png')] ">
        <div className=" bg-[url('/images/backgroundFooter1.png')] ">
          <div className=" bg-[url('/images/backgroundFooter2.png')] relative z-10 ">
            <div className="fixed top-0 left-0 right-0 z-50">
              <Navbar />
            </div>
            <div className=" clg:px-[157px] cmd:px-[100px] csm:px-[60px] px-[30px] pb-[275px] ">
              <div className="csm:pt-[250px] pt-[200px]">
                <Image
                  src="/icons/bgTextSocial.png"
                  width={174.48}
                  height={20.36}
                  alt="bg-text-social"
                />
                <h1 className="text-white cmd:text-[54px] csm:text-[44px] text-[34px] font-bold tracking-[-2%] leading-[100%] cmd:mt-[-60px] csm:mt-[-50px] mt-[-40px]   ">
                  Recent News
                </h1>
              </div>
              {/* <div className="cxxl:flex block justify-between mt-[52px] items-center ">
                <div className="flex flex-row gap-[45px] items-center ">
                  <div className="border-[1px] border-[#DDDDDD] cmd:py-[15px] py-[13px] px-[39px] bg-transparent rounded-[16px] placeholder-[#DDDDDD] w-fit flex items-center">
                    <input
                      className="  cmd:text-[24px] csm:text-[20px] text-[18px] font-medium text-white bg-transparent w-[280px] "
                      placeholder="All"
                    />
                    <i className="bx bx-chevron-down text-white "></i>
                  </div>
                  <div className="border-[1px] border-[#DDDDDD] cmd:py-[15px] py-[13px] px-[39px] bg-transparent rounded-[16px] placeholder-[#DDDDDD] w-fit flex items-center">
                    <input
                      className="  cmd:text-[24px] csm:text-[20px] text-[18px] font-medium text-white bg-transparent "
                      placeholder="Search"
                    />
                    <i className="bx bx-search text-white "></i>
                  </div>
                </div>
              </div> */}
              <div
                data-aos="fade-up"
                data-aos-duration="3000"
                className="grid cxxl:grid-cols-2 grid-cols-1 csm:gap-[75px] gap-[50px]  csm:mt-[116px] mt-[55px] "
              >
                {storeDataNews.map((item) => (
                  <BoxSocial
                    key={item.id}
                    title={item.attributes.title}
                    titleIcon={item.attributes.titleIcon}
                    link={item.attributes.link}
                    icon={item.attributes.icon.data.attributes.url}
                    image={item.attributes.image.data.attributes.url}
                  />
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
