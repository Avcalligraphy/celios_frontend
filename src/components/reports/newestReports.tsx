import Image from "next/image";
import React, { useState, useEffect } from "react";
import BoxReports from "../molecules/reports/boxReports";

interface Report {
  id: number;
  attributes: {
    title: string;
    description: any;
    date: any;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    file: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    document: {
      data: {
        attributes: {
          name: string;
          url: string;
        };
      }[];
    };
  };
}

interface NewestReportsProps {
  storeData: Report[];
}

export default function NewestReports({ storeData }: NewestReportsProps) {
  const apiURL = process.env.NEXT_PUBLIC_API_URL || "";
  const [query, setQuery] = useState("");
  const [filteredData, setFilteredData] = useState<Report[]>(storeData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  

 useEffect(() => {
   const lowerCaseQuery = query.toLowerCase();

   // Filter data berdasarkan query
   const filtered = storeData.filter((item) =>
     item.attributes.title.toLowerCase().includes(lowerCaseQuery)
   );

   // Urutkan data berdasarkan date secara descending
   const sorted = filtered.sort((a, b) => {
     const dateA = new Date(a.attributes.date).getTime();
     const dateB = new Date(b.attributes.date).getTime();
     return dateB - dateA;
   });

   setFilteredData(sorted);
   setCurrentPage(1); // Reset ke halaman pertama setelah melakukan pencarian
 }, [query, storeData]);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  console.log(paginatedData)


  return (
    <div className="w-full csm:px-[70px] px-[25px] mb-[230px] ">
      <div className="csm:flex block justify-between items-center">
        <div>
          <img
            src="/icons/titleContent.png"
            alt="title-content"
            className="csm:w-[200px] w-[160px] h-auto"
          />
          <h1 className="font-bold cmd:text-[40px] csm:text-[30px] text-[26px] leading-[140%] tracking-[-2%] cmd:mt-[-60px] csm:mt-[-52px] mt-[-40px] ">
            Newest Reports
          </h1>
        </div>
        <div className="justify-end flex flex-row gap-[45px] items-center">
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

      <div className="flex justify-center items-center mt-[30px] ">
        <div className="grid clxl:grid-cols-2 grid-cols-1 gap-[53px]">
          {paginatedData.map((item) => (
            <BoxReports
              key={item.id}
              title={item.attributes.title}
              image={item.attributes.file.data.attributes.url}
              date={item.attributes.date || null}
              link={item.id}
              desc={item.attributes.description[0].children[0].text}
              documents={item.attributes.document?.data || null}
            />
          ))}
        </div>
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
  );
}
