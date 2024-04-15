import Button from '@/components/Button.tsx';
import Image from 'next/image';
import React from 'react'

export default function BoxDesk() {
  return (
    <div className=" bg-[#00130D] py-[23px] csm:px-[46px] px-[20px] rounded-[32px] pb-[44px] ">
      <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] ">
        <div className=" bg-[url('/images/imageHeader.png')]  csm:h-[420px] h-[180px] object-cover rounded-[32px] ">
          {/* <Image
            src="/images/shadowSocial.png"
            alt="shadow-social"
            width={628}
            height={310}
            className=" rounded-[32px] "
          /> */}
        </div>
      </div>
      <div className="clg:flex block items-center justify-between mt-[32px] gap-[50px] ">
        <Button text="Download Report" bg=" w-full clxl:w-[290px] bg-[#99C948] " />
        <Button text="Read More" bg=" w-full clxl:w-[290px] bg-[#454D38] clg:mt-0 mt-[20px] " />
      </div>
    </div>
  );
}
