"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { fetchDataChinaLibrary, useStoreChinaLibrary } from "@/lib/store";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function ChinaLibrary() {
  const [query, setQuery] = useState("");
  useEffect(() => {
    fetchDataChinaLibrary();
  }, []);
  const storeDataLibrary = useStoreChinaLibrary(
    (state) => state.dataChinaLibrary
  );
  const filteredChinaLibrary = storeDataLibrary.filter((item) =>
    item.attributes.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <div className="bg-[url('/images/china-indonesia.png')] bg-cover  w-full  csm:min-h-[842px] min-h-[602px] ">
        <div className="bg-[url('/images/background.png')] bg-cover w-full csm:min-h-[842px] min-h-[602px] relative z-10 ">
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
                className="w-auto cxl:h-[71px] cmd:h-[60px] h-[50px] "
              />
              <h1 className="font-bold navMobile:text-[67px] cxl:text-[60px] cmd:text-[57px] csm:text-[40px] text-[37px] cmd:mt-[-70px] mt-[-46px] leading-[100%] tracking-[-4%] text-white max-w-[804px] mb-[25px] ">
                China Indonesia Library
              </h1>
            </div>
            <h1 className=" navMobile:text-[24px]  csm:text-[20px] text-[16px] tracking-[2%] font-semibold text-white max-w-[1200px] cxxl:mt-0 mt-5 ">
              China-Indonesia Library at CELIOS is a bibliography which covers
              all aspects of modern China-Indonesia relations—politics, energy,
              trade, investment, and the rare discussion of cultural aspects.
              For now, only English and Bahasa materials are included in this
              bibliography. Nonetheless, Chinese language materials will be
              added here soon. <br /> <br /> If you find that other important
              works are missing, please contact{" "}
              <span className=" text-[#7CB937] ">
                <a href="mailto:yeta@celios.co.id">yeta@celios.co.id</a>
              </span>{" "}
              and we will include them here.
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between gap-[50px] csm:px-[70px] px-[25px] mt-[100px] mb-[210px] ">
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div>
              <img
                src="/icons/titleContent.png"
                alt="title-content"
                className="csm:w-[200px] w-[160px] h-auto"
              />
              <h1 className="font-bold cmd:text-[40px] csm:text-[30px] text-[26px] leading-[140%] tracking-[-2%] cmd:mt-[-60px] csm:mt-[-52px] mt-[-40px] ">
                Library
              </h1>
            </div>
            <div className=" flex-row gap-[45px] items-center">
              <div className="container-inputContainer border-black">
                <div className="container-input border-black">
                  <div className="search-box border-black">
                    <button className="btn-search focus:border-black border-black ">
                      <i className="bx bx-search text-black "></i>
                    </button>
                    <input
                      type="text"
                      className="input-search text-black border-black placeholder-black focus:border-black "
                      placeholder="Type to Search..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] w-full mt-[33px]   ">
            <div className=" bg-[#00130D] csm:py-[75px] py-[37px] csm:px-[65px] px-[32px] rounded-[32px] w-full  ">
              <div className="block">
                {filteredChinaLibrary.map((item) => (
                  <ul
                    className="list-disc cmd:text-[20px] text-[16px] font-medium text-[#BDDFCF] "
                    key={item.id}
                  >
                    <li>
                      <a
                        target="_blank"
                        className="hover:text-[#7CB937]"
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
