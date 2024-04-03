import Image from 'next/image';
import React from 'react'

export default function BoxSocial() {
  return (
    <div className=" bg-[url('/icons/boxSocial.png')] w-[680px] h-[538px] p-[23px] ">
      <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] ">
        <div className=" bg-[url('/images/imageSocial.png')] w-[628px] h-[310px] rounded-[32px] ">
          <Image
            src="/images/shadowSocial.png"
            alt="shadow-social"
            width={628}
            height={310}
            className=" rounded-[32px] "
          />
        </div>
      </div>
      <h1 className=" bg-gradient-to-r from-[#CFE3BE]  to-[#FFFFFF] inline-block text-transparent bg-clip-text font-semibold text-[36px] leading-[100%] max-w-[408px] mt-[28px] ml-[9px]  ">
        Celios Berjuang Ekonomi Indonesia
      </h1>
      <div className="flex items-center mt-[15px] ml-[9px] gap-[11px] ">
        <Image
          src="/icons/instagram.png"
          alt="instagram"
          width={40}
          height={50}
        />
        <p className=" text-[24px] font-medium text-white leading-[120%] ">
          @celios.id
        </p>
      </div>
    </div>
  );
}
