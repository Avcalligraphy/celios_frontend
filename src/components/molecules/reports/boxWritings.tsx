import React from 'react'

export default function BoxWritings() {
  const truncateText = (text: string, limit: number) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + " ...";
    }
    return text;
  };
  return (
    <div className="bg-gradient-to-t from-[#0284C7] to-[#113B4B] p-[4px] rounded-[32px] shadow-xl shadow-gray-400 csm:w-[564px] w-full csm:h-[492px] h-fit ">
      <div className=" bg-[url('/images/imageWriting.png')] csm:w-[556px] csm:h-[484px] w-full h-fit object-cover rounded-[32px] pt-[56px] px-[36px] pb-[51px] flex flex-col justify-between items-end ">
        <div>
          <p className="font-semibold text-[20px] text-[#B2B2B2] mb-[8px] ">
            The Conversation
          </p>
          <h1 className=" bg-gradient-to-r from-[#CFE3BE]  to-[#FFFFFF] inline-block text-transparent bg-clip-text font-semibold clg:text-[36px] csm:text-[30px] text-[24px] leading-[100%] max-w-[448px]   ">
            {truncateText(
              "Dampak Pensium Dini PLTU Batu Bara terhadap Ekonomi",
              5
            )}
          </h1>
          <p className="csm:text-[24px] text-[18px] font-medium csm:mt-[46px] mt-[30px] text-[#ffff] text-justify  ">
            {truncateText(
              "Manfaat Ekonomi Pensiun Dini Tiga PLTU Batu Bara dan Pembangunan Energi Terbarukan Mencapai Rp82,6 T",
              7
            )}
          </p>
        </div>
        <h1 className="text-white font-semibold leading-[100%] csm:text-[20px] text-[16px] csm:mt-0 mt-[50px]  ">
          See More
        </h1>
      </div>
    </div>
  );
}
