import Image from "next/image";
import React, { useState, useEffect } from "react";
import BoxReports from "../molecules/reports/boxReports";

interface Report {
  id: number;
  attributes: {
    title: string;
    description: any;
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
  const itemsPerPage = 2;
  

  useEffect(() => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = storeData.filter((item) =>
      item.attributes.title.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredData(filtered);
    setCurrentPage(1); // Reset to first page on search
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

  console.log("data paginate", paginatedData);

  return (
    <div className="w-full csm:px-[70px] px-[25px] mb-[230px] ">
      <div className="flex justify-between items-center">
        <div>
          <Image
            src="/icons/titleContent.png"
            alt="title-content"
            width={240}
            height={33}
          />
          <h1 className="font-bold csm:text-[54px] text-[34px] leading-[140%] tracking-[-2%] csm:mt-[-70px] mt-[-35px] ">
            Newest Reports
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

      <div className="flex justify-center items-center mt-[30px] ">
        <div className="grid clxl:grid-cols-2 grid-cols-1 gap-[53px]">
          {paginatedData.map((item) => (
            <BoxReports
              key={item.id}
              title={item.attributes.title}
              image={item.attributes.file.data.attributes.url}
              date={item.attributes.publishedAt}
              link={item.id}
              documents={item.attributes.document.data}
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
