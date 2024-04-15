import Image from 'next/image';
import React from 'react'

export default function BoxMedia() {
  const truncateText = (text: string, limit: number) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + " ...";
    }
    return text;
  };
  return (
    <div className="bg-gradient-to-t from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px]">
      <div className=" bg-[#00130D] py-[27px] px-[27px] rounded-[32px] pb-[44px] clg:w-[712px] w-full ">
        <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] ">
          <div className=" bg-[url('/images/imageHeader.png')]  clg:h-[367px] csm:h-[267px] h-[180px] object-cover rounded-[32px] ">
            {/* <Image
              src="/images/shadowReports.png"
              alt="shadow-social"
              width={728}
              height={420}
              className=" rounded-[32px] "
            /> */}
          </div>
        </div>
        <p className="font-semibold text-[20px] text-[#B2B2B2] csm:mt-[44px] mt-[30px] ">
          Kompas
        </p>
        <h1 className=" bg-gradient-to-r from-[#CFE3BE]  to-[#FFFFFF] inline-block text-transparent bg-clip-text font-semibold clg:text-[36px] csm:text-[30px] text-[24px] leading-[100%]   mt-[36px] ">
          {truncateText(
            "Dampak Pensium Dini PLTU Batu Bara terhadap Ekonomi",
            5
          )}
        </h1>
        <p className="font-semibold text-white csm:text-[24px] text-[18px] csm:mt-[27px] mt-[20px] ">
          {truncateText(
            "Manfaat Ekonomi Pensiun Dini Tiga PLTU Batu Bara dan Pembangunan Energi Terbarukan Mencapai Rp82,6 T",
            10
          )}
        </p>
        <p className="font-semibold csm:text-[20px] text-[16px] text-[#B2B2B2] mt-[17px] ">
          January 25, 2024
        </p>
      </div>
    </div>
  );
}
