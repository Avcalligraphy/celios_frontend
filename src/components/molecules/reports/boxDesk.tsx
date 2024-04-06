import Button from '@/components/Button.tsx';
import Image from 'next/image';
import React from 'react'

export default function BoxDesk() {
  return (
    <div className=" bg-[#00130D] py-[23px] px-[46px] rounded-[32px] pb-[44px] ">
      <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] ">
        <div className=" bg-[url('/images/imageHeader.png')]  h-[420px] object-cover rounded-[32px] ">
          <Image
            src="/images/shadowSocial.png"
            alt="shadow-social"
            width={628}
            height={310}
            className=" rounded-[32px] "
          />
        </div>
      </div>
      <div className="flex items-center justify-between mt-[32px] ">
        <Button text="Download Report" bg="w-[290px] bg-[#99C948] " />
        <Button text="Read More" bg="w-[290px] bg-[#454D38] " />
      </div>
    </div>
  );
}
