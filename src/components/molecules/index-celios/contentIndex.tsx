import React from 'react'

export default function ContentIndex() {
  return (
    <div className="max-w-[416px] mb-[12px] ">
      <div className="w-full  h-[5px] bg-[#DFDFDF]  " />
      <h1 className="mt-[15px] mb-[7px] font-semibold text-[20px] ">
        Indicator
      </h1>
      <p className=" text-[#ABBBA0] font-medium text-[18px] ">
        Rumah Tangga dengan penerangan tenaga surya
      </p>
      <div className="flex justify-between mt-[15px]">
        <div>
          <h1 className=" mb-[7px] font-semibold text-[20px] ">Score</h1>
          <p className=" text-[#ABBBA0] font-medium text-[18px] ">1.04</p>
        </div>
        <div>
          <h1 className=" mb-[7px] font-semibold text-[20px] ">National Average</h1>
          <p className=" text-[#ABBBA0] font-medium text-[18px] ">1.21</p>
        </div>
      </div>
    </div>
  );
}
