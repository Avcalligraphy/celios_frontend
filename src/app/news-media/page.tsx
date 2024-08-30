'use client'
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import {
  fetchDataMedia,
  fetchDataOpEd,
  useStoreMedia,
  useStoreOpEd,
} from "@/lib/store";
import Loader from "@/components/loader/loader";

interface ItemAttributesOpEd {
  title: string;
  link: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ItemOpEd {
  id: number;
  attributes: ItemAttributesOpEd;
}

interface ItemAttributesMedia {
  title: string;
  link: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ItemMedia {
  id: number;
  attributes: ItemAttributesMedia;
}


export default function NewsMedia() {
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [filteredOpEd, setFilteredOpEd] = useState<ItemOpEd[]>([]);
  const [filteredMedia, setFilteredMedia] = useState<ItemMedia[]>([]);

  useEffect(() => {
    AOS.init();
    fetchDataOpEd();
    fetchDataMedia().then(() => {
      setIsLoading(false); // Setelah selesai fetch data, set isLoading jadi false
    });
  }, []);

  const storeDataOpEd = useStoreOpEd((state) => state.dataOpEd);
  const storeDataMedia = useStoreMedia((state) => state.dataMedia);

  useEffect(() => {
    setFilteredOpEd(
      storeDataOpEd.filter(
        (item) =>
          item.attributes.title.toLowerCase().includes(query.toLowerCase()) ||
          item.attributes.link.toLowerCase().includes(query.toLowerCase())
      )
    );
    setFilteredMedia(
      storeDataMedia.filter(
        (item) =>
          item.attributes.title.toLowerCase().includes(query.toLowerCase()) ||
          item.attributes.link.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query, storeDataOpEd, storeDataMedia]);

  if (isLoading) {
    return <Loader />; // Tampilkan loading jika masih fetching data
  }

  return (
    <>
      <div className="bg-gradient-to-b from-[#031B1F] from-20% to-white to-90% csm:mb-[324px] mb-[160px]">
        <div className="w-full bg-[url('/images/background.png')] relative z-10">
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>
          <div className="csm:px-[70px] px-[25px] csm:pt-[220px] pt-[180px]">
            <div className="csm:flex-row flex flex-col justify-between mb-[27px]">
              <div>
                <img
                  src="/icons/bgTextSocial.png"
                  alt="bg-text-social"
                  className="h-auto cmd:w-[160px] w-[140px] "
                />
                <h1 className="text-white cmd:text-[40px] csm:text-[30px] text-[26px] font-bold tracking-[-2%] leading-[100%] cmd:mt-[-50px] csm:mt-[-40px] mt-[-40px]">
                  Op-Ed
                </h1>
              </div>
              <div className="container-inputContainer flex justify-end ">
                <div className="container-input">
                  <div className="search-box">
                    <button className="btn-search">
                      <i className="bx bx-search"></i>
                    </button>
                    <input
                      type="text"
                      className="input-search"
                      placeholder="Type to Search..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* <div className="border-[1px] border-[#DDDDDD] cmd:py-[15px] py-[13px] px-[39px] bg-transparent rounded-[16px] placeholder-[#DDDDDD] w-fit flex items-center">
                <input
                  className="cmd:text-[24px] csm:text-[20px] text-[18px] font-medium text-white bg-transparent"
                  placeholder="Search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <i className="bx bx-search text-white"></i>
              </div> */}
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] w-full"
            >
              <div className="bg-[#00130D] csm:py-[75px] py-[37px] csm:px-[65px] px-[32px] rounded-[32px] w-full">
                <div className="flex flex-col cmd:gap-2 gap-1 ">
                  {filteredOpEd.map((item) => (
                    <div key={item.id}>
                      <a
                        target="_blank"
                        href={item.attributes.link}
                        className="text-[16px] cmd:text-[20px] font-medium text-[#BDDFCF] hover:text-[#7CB937] "
                      >
                        {item.attributes.title}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between mb-[27px] mt-[120px]">
              <div>
                <img
                  src="/icons/bgTextSocial.png"
                  alt="bg-text-social"
                  className="h-auto cmd:w-[160px] w-[140px] "
                />
                <h1 className="text-black cmd:text-[40px] csm:text-[30px] text-[26px] font-bold tracking-[-2%] leading-[100%] cmd:mt-[-50px] csm:mt-[-40px] mt-[-40px]">
                  Media Commentaries
                </h1>
              </div>
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] w-full"
            >
              <div className="bg-[#00130D] csm:py-[64px] py-[44px] csm:px-[65px] px-[32px] rounded-[32px] w-full">
                <div className="flex flex-col cmd:gap-2 gap-1 ">
                  {filteredMedia.map((item) => (
                    <div key={item.id}>
                      <a
                        target="_blank"
                        href={item.attributes.link}
                        className="text-[16px] cmd:text-[20px] font-medium text-[#BDDFCF] hover:text-[#7CB937] "
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