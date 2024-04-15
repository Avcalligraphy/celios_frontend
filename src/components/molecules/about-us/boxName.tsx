import Image from 'next/image';
import React from 'react'

interface BoxNameProps{
  name: string,
  position: string
}
export default function BoxName(props: BoxNameProps) {
  const {name, position} = props
  return (
    <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] ">
      <div className=" bg-[#00130D] py-[25px] px-[26px] rounded-[32px] csm:flex block gap-[39px] items-center  ">
        <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] ">
          <div className=" bg-[url('/images/imageName.png')]  csm:h-[210px] h-[150px] csm:w-[226px] w-full object-cover rounded-[32px] ">
            {/* <Image
              src="/images/shadowSocial.png"
              alt="shadow-social"
              width={226}
              height={210}
              className=" rounded-[32px] "
            /> */}
            <img
              src="/images/shadowSocial.png"
              className="w-full csm:h-[210px] h-[150px] rounded-[32px] "
            />
          </div>
        </div>
        <div className=" csm:mt-0 mt-[20px] ">
          <h1 className=" max-w-[282px] text-white csm:text-[32px] text-[24px] tracking-[-6%]  ">
            {name}
          </h1>
          <p className=" text-[#B2B2B2] font-medium csm:text-[20px] text-[18px] csm:mt-[20px] mt-[15px]  ">
            {position}
          </p>
        </div>
      </div>
    </div>
  );
}
