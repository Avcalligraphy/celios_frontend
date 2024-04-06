import React from 'react'

export default function BoxWritings() {
  return (
    <div className="bg-gradient-to-t from-[#0284C7] to-[#113B4B] p-[4px] rounded-[32px] shadow-xl shadow-gray-400 ">
      <div className=" bg-[url('/images/imageWriting.png')] w-[556px] h-[484px] object-cover rounded-[32px] pt-[56px] px-[36px] pb-[51px] flex flex-col justify-between items-end ">
        <div>
          <p className="font-semibold text-[20px] text-[#B2B2B2] mb-[8px] ">
            The Conversation
          </p>
          <h1 className=" bg-gradient-to-r from-[#CFE3BE]  to-[#FFFFFF] inline-block text-transparent bg-clip-text font-semibold text-[36px] leading-[100%] max-w-[448px]   ">
            Dampak Pensium Dini PLTU Batu Bara terhadap Ekonomi
          </h1>
          <p className="text-[24px] font-medium mt-[46px] text-[#ffff] text-justify max-w-[454px] ">
            Manfaat Ekonomi Pensiun Dini Tiga PLTU Batu Bara dan Pembangunan
            Energi Terbarukan Mencapai Rp82,6 T
          </p>
        </div>
        <h1 className="text-white font-semibold leading-[100%] text-[20px]  ">
          See More
        </h1>
      </div>
    </div>
  );
}
