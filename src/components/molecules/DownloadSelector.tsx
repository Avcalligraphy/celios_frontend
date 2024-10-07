"use client";

import React from "react";

interface DownloadSelectorProps {
  documents: Array<{ attributes: { url: string; name: string } }>;
  apiURL: string;
}

const DownloadSelector: React.FC<DownloadSelectorProps> = ({
  documents,
  apiURL,
}) => {
  const handleDownload = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const url = event.target.value;
    if (url) {
      window.location.href = apiURL + url;
    }
  };

  return (
    <div className="relative w-[290px] mt-[50px] ">
      <select
        className="appearance-none w-full bg-[#454D38] translate-y-0 translate-x-0 hover:translate-y-1 hover:translate-x-1 px-[30px] rounded-[13px] text-white navMobile:py-[20px] cxl:py-[18px] py-[16px] sm:text-[18px] csm:text-[16px] text-[13px] pr-[40px]"
        onChange={handleDownload}
      >
        <option
          className="font-semibold text-black bg-white sm:text-[18px] text-[16px]"
          value=""
        >
          Read Full Report
        </option>
        {documents.map((doc, index) => (
          <option
            className="font-semibold bg-white text-black sm:text-[18px] text-[16px]"
            key={index}
            value={doc.attributes.url}
          >
            {doc.attributes.name}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg
          className="w-4 h-4 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default DownloadSelector;
