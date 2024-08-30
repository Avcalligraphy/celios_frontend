import React, { useState, useEffect } from "react";
import Navbar from "../navbar";
import BoxPublishing from "../molecules/celios-publixhing/boxPublishing";
import { useStorePubllish } from "@/lib/store";
import Image from "next/image";

export default function Header() {
  const storeDataPublish = useStorePubllish((state) => state.dataPublish);
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState(storeDataPublish);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = storeDataPublish.filter((item) =>
      item.attributes.title.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page on search
  }, [query, storeDataPublish]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="bg-gradient-to-b from-[#031B1F] from-20% to-white to-90% mb-[324px]">
      <div className="w-full bg-[url('/images/background.png')] relative z-10">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        <div className="cmd:px-[96px] csm:px-[66px] px-[26px]  pt-[180px] ">
          <div className="flex items-center justify-end mb-[27px]">
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
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="flex flex-col gap-[116px] csm:pt-[100px] pt-[60px] justify-center items-center"
          >
            {paginatedData.map((item) => (
              <BoxPublishing
                key={item.id}
                title={item.attributes.title}
                penulis={item.attributes.penulis}
                penerbit={item.attributes.penerbit}
                isbn={item.attributes.isbn}
                cover={item.attributes.cover}
                halaman={item.attributes.halaman}
                berat={item.attributes.berat}
                ukuran={item.attributes.ukuran}
                linkTokped={item.attributes.linkTokped}
                linkShoppe={item.attributes.linkShoppe}
                image={item.attributes.image.data.attributes.url}
              />
            ))}
          </div>
          <div className="flex justify-center mt-[30px]">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-3 py-1 mx-1 ${
                  currentPage === index + 1
                    ? "bg-[#99C948] text-white"
                    : "bg-gray-200 text-black"
                } rounded`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
