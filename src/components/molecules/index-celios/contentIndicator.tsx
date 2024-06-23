import React from 'react'

interface ContentIndicatorProps{
  indicator: string
  score: string 
}

export default function ContentIndicator({indicator, score}: ContentIndicatorProps) {
  return (
    <div className="max-w-[416px] mb-[12px] ">
      <div className="w-full  h-[5px] bg-[#DFDFDF]  " />
      <div className="flex justify-between mt-[15px]">
        <h1 className=" font-semibold text-[20px] ">Indicator</h1>
        <h1 className=" font-semibold text-[20px] ">Score</h1>
      </div>
      <div className="flex justify-between mt-[3px]">
        <p className=" text-[#ABBBA0] font-medium text-[18px] ">{indicator}</p>
        <p className=" text-[#ABBBA0] font-medium text-[18px] ">{score}</p>
      </div>
    </div>
  );
}
