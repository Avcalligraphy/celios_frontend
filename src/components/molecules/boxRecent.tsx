import React from 'react'

interface BoxRecentProps{
  title: string;
  date: string

}
export default function BoxRecent({ title, date }: BoxRecentProps) {
  return (
    <div className="bg-gradient-to-t from-[#0284C7] to-[#113B4B] p-[4px] csm:w-[387px] w-[347px] csm:h-[492px] h-[442px] rounded-[32px] shadow-xl shadow-gray-400 ">
      <div className=" bg-[url('/images/imageRecent.png')] csm:w-[379px] w-[339px] csm:h-[484px] h-[434px] object-cover rounded-[32px] pt-[56px] px-[36px]   pb-[51px] flex flex-col justify-between items-start ">
        <div>
          <h1 className=" bg-gradient-to-r from-[#CFE3BE]  to-[#FFFFFF] inline-block text-transparent bg-clip-text font-semibold csm:text-[36px] text-[28px] leading-[100%]  csm:max-w-[306px] max-w-[256px]   ">
            {title}
          </h1>
          <p className="csm:text-[20px] text-[18px] font-medium leading-[100%] mt-[22px] text-[#CECECE] ">
            {date}
          </p>
        </div>
        <h1 className="text-white font-semibold leading-[100%] csm:text-[20px] text-[18px]  ">
          See More
        </h1>
      </div>
    </div>
  );
}
