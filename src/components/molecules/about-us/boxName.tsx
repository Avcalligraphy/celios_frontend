import Image from 'next/image';
import React from 'react'

interface BoxNameProps{
  name: string,
  position: string
  image:string
}
export default function BoxName(props: BoxNameProps) {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;
  const {name, position, image} = props
  const encodedImage = image ? image?.replace(/ /g, "%20") : null;
  // console.log(image)
  return (
    <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] ">
      <div className=" bg-[#00130D] py-[25px] px-[26px] rounded-[32px] csm:flex-row flex flex-col   gap-[39px] items-center  ">
        <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] w-fit p-[2px] rounded-[32px] ">
          <div
            style={{
              backgroundImage: `url(${apiURL + image})`,
              backgroundSize: "cover",
            }}
            className=" h-[180px] w-[180px]  rounded-[32px] "
          >
            {/* <Image
              src="/images/shadowSocial.png"
              alt="shadow-social"
              width={226}
              height={210}
              className=" rounded-[32px] "
            /> */}
            {/* <img
              src="/images/shadowSocial.png"
              className="w-full h-[210px] rounded-[32px] "
            /> */}
          </div>
        </div>
        <div className=" csm:mt-0 mt-0">
          <h1 className=" max-w-[282px] text-white csm:text-left text-center cxl:text-[24px] csm:text-[24px] text-[20px] tracking-[-6%]  ">
            {name}
          </h1>
          <p className=" text-[#B2B2B2] font-medium csm:text-[16px] text-[14px] csm:mt-[20px] mt-[15px]  csm:text-left text-center  ">
            {position}
          </p>
        </div>
      </div>
    </div>
  );
}
