import Image from 'next/image';
import React from 'react'

export default function BoxSocial() {
  return (
    <div className=" bg-[url('/icons/boxSocial.png')] cmd:w-[680px]  cmd:h-[538px] csm:w-[580px] csm:h-[438px] w-[300px] h-[340px] p-[23px] object-cover csm:rounded-[32px] rounded-[22px] ">
      <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] csm:rounded-[32px] rounded-[22px] ">
        <div className=" bg-[url('/images/imageSocial.png')] cmd:w-[628px] cmd:h-[310px] csm:w-[528px] w-[248px] csm:h-[180px] h-[150px] object-cover csm:rounded-[32px] rounded-[22px] ">
          {/* <Image
            src="/images/shadowSocial.png"
            alt="shadow-social"
            width={628}
            height={310}
            className=" csm:rounded-[32px] rounded-[22px] "
          /> */}
          <img
            src="/images/shadowSocial.png"
            className="cmd:w-[628px] cmd:h-[310px] csm:w-[528px] w-[248px] csm:h-[180px] h-[150px]  csm:rounded-[32px] rounded-[22px] "
          />
        </div>
      </div>
      <h1 className=" bg-gradient-to-r from-[#CFE3BE]  to-[#FFFFFF] inline-block text-transparent bg-clip-text font-semibold csm:text-[36px] text-[28px] leading-[100%] csm:max-w-[408px] max-w-[208px] truncate mt-[28px] ml-[9px]  ">
        Celios Berjuang Ekonomi Indonesia
      </h1>
      <div className="flex items-center mt-[15px] ml-[9px] gap-[11px] ">
        {/* <Image
          src="/icons/instagram.png"
          alt="instagram"
          width={50}
          height={50}
        /> */}
        <img
          src="/icons/instagram.png"
          className="csm:w-[50px] w-[35px] h-auto "
        />
        <p className=" csm:text-[24px] text-[20px] font-medium text-white leading-[120%] ">
          @celios.id
        </p>
      </div>
    </div>
  );
}
