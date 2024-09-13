"use client";
import Footer from "@/components/footer";
import Loader from "@/components/loader/loader";
import BoxSocial from "@/components/molecules/boxSocial";
import Navbar from "@/components/navbar";
import { fetchDataSocial, useStoreSocial } from "@/lib/store";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function SocialMedia() {
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetchDataSocial().then(() => {
      setIsLoading(false); // Setelah selesai fetch data, set isLoading jadi false
    });
  }, []);

  const storeData = useStoreSocial((state) => state.dataSocial);

  const filteredData = storeData.filter((item) =>
    item.attributes.title.toLowerCase().includes(query.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  if (isLoading) {
    return <Loader />; // Tampilkan loading jika masih fetching data
  }

  return (
    <>
      <div className="bg-[url('/images/backgroundContentFooter.png')]">
        <div className="bg-[url('/images/backgroundFooter1.png')]">
          <div className="bg-[url('/images/backgroundFooter2.png')] relative z-10">
            <div className="fixed top-0 left-0 right-0 z-50">
              <Navbar />
            </div>
            <div className="clg:px-[157px] cmd:px-[100px] csm:px-[60px] px-[30px] pb-[275px]">
              <div className="csm:pt-[250px] pt-[200px]">
                <Image
                  src="/icons/bgTextSocial.png"
                  width={174.48}
                  height={20.36}
                  alt="bg-text-social"
                />
                <h1 className="text-white cmd:text-[54px] csm:text-[44px] text-[34px] font-bold tracking-[-2%] leading-[100%] cmd:mt-[-60px] csm:mt-[-50px] mt-[-40px]">
                  Social Media
                </h1>
              </div>
              <div className="flex justify-end mt-[52px] items-center">
                <div className="flex justify-end flex-row gap-[45px] items-center">
                  <div className="container-inputContainer">
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
                </div>
              </div>
              <div className="grid cxxl:grid-cols-2 grid-cols-1 csm:gap-[75px] gap-[50px] csm:mt-[116px] mt-[55px]">
                {currentItems.map((item) => (
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
              <div className="flex justify-center mt-10">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="mr-2 px-2 flex justify-center items-center py-1 bg-transparent border-[1px] border-gray-300  rounded-[5px] disabled:opacity-50"
                >
                  <i className="bx bx-chevron-left text-white"></i>
                </button>
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="mr-2 px-2 flex justify-center items-center py-1 bg-transparent border-[1px] border-gray-300  rounded-[5px] disabled:opacity-50"
                >
                  <i className="bx bx-chevron-right text-white"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
