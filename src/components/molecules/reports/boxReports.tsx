import Button from '@/components/Button.tsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface BoxReportsProps {
  title: string;
  image: string;
  date: string;
  desc: string;
  link: number;
  documents: any[];
}
export default function BoxReports({title, image, date, link, documents, desc}: BoxReportsProps) {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;
  const encodedImage = image ? image?.replace(/ /g, "%20") : null;
  const truncateText = (text : string, limit: number) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + " ...";
    }
    return text;
  };
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "long",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };
  const handleDownload = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const url = event.target.value;
    if (url) {
      window.location.href = apiURL + url;
    }
  };


  return (
    <div className="bg-gradient-to-t from-[#7DD3FC] to-[#FFFFFF] p-[2px]  rounded-[32px] h-fit">
      <div className=" bg-[#00130D] py-[20px] px-[20px] rounded-[32px] pb-[44px] clg:w-[712px] flex justify-around flex-col w-full clxl:h-[828px] csm:h-[928px] h-[628px]  ">
        <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] ">
          <div
            style={{
              backgroundImage: `url(${apiURL + image})`,
              backgroundSize: "cover",
            }}
            className=" clg:h-[367px] csm:h-[267px] cssm:h-[207px] csssm:h-[160px] h-[140px] bg-cover rounded-[32px] "
          >
            {/* <Image
              src="/images/shadowReports.png"
              alt="shadow-social"
              width={728}
              height={420}
              className=" rounded-[32px] "
            /> */}
          </div>
        </div>
        <h1 className=" bg-gradient-to-r from-[#CFE3BE]  to-[#FFFFFF] inline-block text-transparent bg-clip-text font-semibold clg:text-[32px] csm:text-[30px] text-[24px] leading-[100%] csm:my-0 my-[20px]  ">
          {truncateText(title, 4)}
        </h1>
        <p className="font-semibold text-white csm:text-[18px] cssm:text-[16px] text-[13px] text-justify  ">
          {truncateText(desc, 32)}
        </p>
        <p className="font-semibold csm:text-[18px] cssm:text-[16px] text-[13px] text-[#B2B2B2] mt-[17px] ">
          {date}
        </p>
        <div className="clxl:flex block items-center justify-between csm:mt-[53px] mt-[30px] ">
          <Link
            href={{
              pathname: `/reports/${link}`,
              query: { link: link },
            }}
          >
            <button className="w-full text-left clxl:w-[290px] bg-[#99C948] clxl:mb-0 mb-[20px] translate-y-0 translate-x-0 hover:translate-y-1 hover:translate-x-1  px-[30px] rounded-[13px] text-white navMobile:py-[20px] cxl:py-[18px] py-[16px] font-semibold csm:text-[16px] text-[13px] ">
              Read Summary
            </button>
          </Link>

          {documents && documents.length > 0 ? (
            <div className="relative w-full clxl:w-[290px]">
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
          ) : null}
        </div>
      </div>
    </div>
  );
}
