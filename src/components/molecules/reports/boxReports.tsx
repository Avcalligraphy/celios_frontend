import Button from '@/components/Button.tsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface BoxReportsProps{
  title: string
  image: string
  date: string
  link: number
  document: any
}
export default function BoxReports({title, image, date, link, document}: BoxReportsProps) {
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

          <a download href={apiURL + document}>
            <Button
              text="Download Report"
              bg="w-full clxl:w-[290px] bg-[#454D38]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
