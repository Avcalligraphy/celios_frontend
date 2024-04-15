import Image from 'next/image';
import React from 'react'

export default function BoxNews() {
  return (
    <div className="bg-gradient-to-r from-[#164E63] to-[#022529] csm:w-[495px] w-[295px]  px-[32px] py-[23px] rounded-[18px] ">
      <div className="flex justify-between">
        <div className="flex items-center gap-[12px] mb-[8px] ">
          <div className="csm:h-[10px] h-[8px] csm:w-[10px] w-[8px] rounded-full bg-white" />
          <p className="csm:text-[24px] text-[18px] leading-[100%] tracking-[-2%] text-[#40F4B2] font-semibold ">
            Kompas Tv
          </p>
        </div>
        <div className=" bg-[#164E63] shadow-lg shadow-black p-[8px] rounded-[8px]  ">
          <Image src="/icons/arrow.png" width={15} height={15} alt="arrow" />
        </div>
      </div>
      <h1 className=" font-semibold text-white csm:text-[40px] text-[32px] leading-[100%] tracking-[-2%] truncate csm:max-w-[264px] max-w-[164px] ">
        Tambang Ilegal Pemerintahan Indonesia
      </h1>
    </div>
  );
}
