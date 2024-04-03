import React from 'react'

export default function BoxRecent() {
  return (
    <div className="bg-gradient-to-t from-[#0284C7] to-[#113B4B] p-[4px] rounded-[32px] shadow-xl shadow-gray-400 ">
      <div className=" bg-[url('/images/imageRecent.png')] w-[379px] h-[484px] object-cover rounded-[32px] pt-[56px] px-[36px] pb-[51px] flex flex-col justify-between items-end ">
        <div>
          <h1 className=" bg-gradient-to-r from-[#CFE3BE]  to-[#FFFFFF] inline-block text-transparent bg-clip-text font-semibold text-[36px] leading-[100%] max-w-[306px]   ">
            Dampak Pensium Dini PLTU Batu Bara terhadap Ekonomi
          </h1>
          <p className="text-[20px] font-medium leading-[100%] mt-[22px] text-[#CECECE] ">
            Celios 20, Jan 24
          </p>
        </div>
        <h1 className="text-white font-semibold leading-[100%] text-[20px]  ">
          See More
        </h1>
      </div>
    </div>
  );
}
