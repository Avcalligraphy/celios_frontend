import Button from '@/components/Button.tsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface BoxReportsProps {
  title: string;
  image: string;
  date: string;
  link: number;
  documents: any[];
}
export default function BoxReports({title, image, date, link, documents}: BoxReportsProps) {
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
    <div className="bg-gradient-to-t from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px]">
      <div className=" bg-[#00130D] py-[27px] px-[27px] rounded-[32px] pb-[44px] clg:w-[712px] w-full min-h-[798px] ">
        <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] ">
          <div
            style={{
              backgroundImage: `url(${apiURL + image})`,
              objectFit: "cover",
            }}
            className=" clg:h-[367px] csm:h-[267px] h-[180px] object-cover rounded-[32px] "
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
        <h1 className=" bg-gradient-to-r from-[#CFE3BE]  to-[#FFFFFF] inline-block text-transparent bg-clip-text font-semibold clg:text-[36px] csm:text-[30px] text-[24px] leading-[100%]   mt-[36px] ">
          {truncateText(title, 5)}
        </h1>
        <p className="font-semibold text-white csm:text-[24px] text-[18px] csm:mt-[27px] mt-[20px] ">
          {truncateText(
            "Manfaat Ekonomi Pensiun Dini Tiga PLTU Batu Bara dan Pembangunan Energi Terbarukan Mencapai Rp82,6 T",
            10
          )}
        </p>
        <p className="font-semibold csm:text-[20px] text-[16px] text-[#B2B2B2] mt-[17px] ">
          {formatDate(date)}
        </p>
        <div className="cmd:flex block items-center justify-between csm:mt-[53px] mt-[30px] ">
          <Link
            href={{
              pathname: `/reports/${title}`,
              query: { link: link },
            }}
          >
            <Button
              bg="w-full bg-[#99C948] clxl:w-[290px] clxl:mb-0 mb-[20px] "
              text="Read Report"
            />
          </Link>

          {documents && documents.length > 0 ? (
            <div className="relative w-full clxl:w-[290px]">
              <select
                className="appearance-none w-full bg-[#454D38] translate-y-0 translate-x-0 hover:translate-y-1 hover:translate-x-1 px-[30px] rounded-[13px] text-white py-[20px] sm:text-[18px] text-[16px] pr-[40px]"
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
          ) : null}
        </div>
      </div>
    </div>
  );
}
