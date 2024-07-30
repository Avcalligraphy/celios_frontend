import Button from "@/components/Button.tsx";
import Link from "next/link";
import React from "react";

interface BoxDeskProps {
  image: string;
  title: string;
  link: string;
  documents: any[];
}
const apiURL = process.env.NEXT_PUBLIC_API_URL;

export default function BoxDesk({
  image,
  title,
  link,
  documents,
}: BoxDeskProps) {
  const encodedImage = image ? image?.replace(/ /g, "%20") : null;

  const handleDownload = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const url = event.target.value;
    if (url) {
      window.location.href = apiURL + url;
    }
  };

  return (
    <div
      data-aos="fade-down"
      className="bg-[#00130D] py-[23px] csm:px-[46px] px-[20px] rounded-[32px] pb-[44px]"
    >
      <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px]">
        <div
          style={{
            backgroundImage: `url(${encodedImage})`,
            objectFit: "cover",
          }}
          className="csm:h-[420px] h-[180px] object-cover rounded-[32px]"
        />
      </div>
      <div className="clg:flex block items-center justify-between mt-[32px] gap-[50px]">
        {documents.length > 1 ? (
          <div className="relative w-full clxl:w-[290px]">
            <select
              className="appearance-none w-full bg-[#99C948] translate-y-0 translate-x-0 hover:translate-y-1 hover:translate-x-1 px-[30px] rounded-[13px] text-white py-[20px] sm:text-[18px] text-[16px] pr-[40px]"
              onChange={handleDownload}
            >
              <option
                className="font-semibold text-black bg-white sm:text-[18px] text-[16px]"
                value=""
              >
                Select a document
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
        ) : (
          <a download href={documents[0]?.attributes.url}>
            <Button
              text="Download Report"
              bg="w-full clxl:w-[290px] bg-[#99C948]"
            />
          </a>
        )}
        <Link
          href={{
            pathname: `/reports/${title}`,
            query: { link: link },
          }}
        >
          <Button
            text="Read More"
            bg="w-full clxl:w-[290px] bg-[#454D38] clg:mt-0 mt-[20px]"
          />
        </Link>
      </div>
    </div>
  );
}
