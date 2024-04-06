import Image from 'next/image';
import React from 'react'

export default function BoxName() {
  return (
    <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] ">
      <div className=" bg-[#00130D] py-[25px] px-[26px] rounded-[32px] flex gap-[39px] items-center  ">
        <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] ">
          <div className=" bg-[url('/images/imageName.png')]  h-[210px] w-[226px] object-cover rounded-[32px] ">
            <Image
              src="/images/shadowSocial.png"
              alt="shadow-social"
              width={226}
              height={210}
              className=" rounded-[32px] "
            />
          </div>
        </div>
        <div>
          <h1 className=" max-w-[282px] text-white text=[32px] tracking-[-6%]  ">
            Bhima Yudhistira Adhinegara
          </h1>
          <p className=" text-[#B2B2B2] font-medium text-[20px] mt-[20px]  ">
            Executive Director Celios
          </p>
        </div>
      </div>
    </div>
  );
}
