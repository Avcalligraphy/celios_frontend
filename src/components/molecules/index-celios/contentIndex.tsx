import React from 'react'

interface ContextIndexProps{
  indicator: string
  score: string
  retataNasional: string
}
export default function ContentIndex({indicator, score, retataNasional}:ContextIndexProps) {
  return (
    <div className="max-w-[416px] mb-[12px] ">
      <div className="w-full  h-[5px] bg-[#DFDFDF]  " />
      <h1 className="mt-[15px] mb-[7px] font-semibold text-[20px] ">
        Indicator
      </h1>
      <p className=" text-[#ABBBA0] font-medium text-[18px] ">{indicator}</p>
      <div className="flex justify-between mt-[15px]">
        <div>
          <h1 className=" mb-[7px] font-semibold text-[20px] ">Score</h1>
          <p className=" text-[#ABBBA0] font-medium text-[18px] ">{score}</p>
        </div>
        <div>
          <h1 className=" mb-[7px] font-semibold text-[20px] ">
            National Average
          </h1>
          <p className=" text-[#ABBBA0] font-medium text-[18px] ">{retataNasional}</p>
        </div>
      </div>
    </div>
  );
}
