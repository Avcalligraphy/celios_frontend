import Button from '@/components/Button.tsx';
import Image from 'next/image';
import React from 'react'

export default function BoxReports() {
  return (
    <div className="bg-gradient-to-t from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px]">
      <div className=" bg-[#00130D] py-[27px] px-[27px] rounded-[32px] pb-[44px] w-[712px] ">
        <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] ">
          <div className=" bg-[url('/images/imageHeader.png')]  h-[367px] object-cover rounded-[32px] ">
            <Image
              src="/images/shadowReports.png"
              alt="shadow-social"
              width={728}
              height={420}
              className=" rounded-[32px] "
            />
          </div>
        </div>
        <h1 className=" bg-gradient-to-r from-[#CFE3BE]  to-[#FFFFFF] inline-block text-transparent bg-clip-text font-semibold text-[36px] leading-[100%] max-w-[530px]  mt-[36px] ">
          Dampak Pensium Dini PLTU Batu Bara terhadap Ekonomi
        </h1>
        <p className="font-semibold text-white text-[24px] mt-[27px]  ">
          Manfaat Ekonomi Pensiun Dini Tiga PLTU Batu Bara dan Pembangunan
          Energi Terbarukan Mencapai Rp82,6 T
        </p>
        <p className="font-semibold text-[20px] text-[#B2B2B2] mt-[17px] ">
          January 25, 2024
        </p>
        <div className="flex items-center justify-between mt-[53px] ">
          <Button text="Download Report" />
        </div>
      </div>
    </div>
  );
}
