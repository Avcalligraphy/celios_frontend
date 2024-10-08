import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="w-full h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500" />
      <div className="bg-[#00130D] pt-[82px] pb-[111px] csm:px-[139px] px-[65px]  ">
        <div className="  w-full ">
          <div className="grid clg:grid-cols-2 grid-cols-1 gap-[50px]">
            <div>
              {/* <Image src="/icons/logo.png" alt="logo" width={75} height={116} /> */}
              <img
                src="/icons/logo.png"
                className="csm:w-[55px] h-auto w-[55px] "
              />
              <h1 className=" csm:text-[18px] text-[20px] leading-[120%] text-white max-w-[583px] mt-[15px] ">
                <span className="font-bold">CELIOS</span> is a research
                institution based on independence, quality, and an
                interdisciplinary approach to fighting against the climate
                crisis and inequality.
              </h1>
              <h1 className=" font-bold text-white csm:text-[18px] text-[20px] leading-[150%] mt-[27px] ">
                Email :{" "}
                <span className="text-[#A7D147]">
                  <a href="mailto:admin@celios.co.id">
                    admin@celios.co.id
                  </a>
                </span>
              </h1>
            </div>
            <div>
              {/* <Image
                src="/images/imageNGO.png"
                width={327}
                height={56}
                alt="image-ngo"
              /> */}
              <h1 className=" font-bold text-white csm:text-[18px] text-[20px] leading-[150%] my-[13px] ">
                Registered in:
              </h1>
              <img
                src="/images/imageNGO.png"
                className=" clg:w-[260px] csm:w-[230px] w-[307px] h-auto "
              />
              <h1 className=" font-bold text-white csm:text-[18px] text-[20px] leading-[150%] my-[13px] ">
                Find Us
              </h1>
              <div className="flex items-center gap-[20px] mb-[15px] ">
                <i className="bx bxl-instagram-alt clg:text-[50px] text-[40px] text-white "></i>

                <p className=" csm:text-[18px] text-[20px] font-medium text-white leading-[120%] ">
                  @celios_id
                </p>
              </div>
              <div className="flex items-center gap-[20px] ">
                {/* <Image
                  src="/icons/maps.png"
                  width={65}
                  height={65}
                  alt="maps"
                /> */}
                <i className="bx bxs-map text-white clg:text-[50px] text-[40px] "></i>
                <p className=" csm:text-[18px] text-[20px] font-medium text-white leading-[120%] mt-[6px] max-w-[551px] ">
                  Jl. Abuserin III Cilandak Jakarta Selatan
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[2px] mt-[31px] bg-white " />
          <p className="csm:text-[14px] text-[16px] mt-[30px] leading-[120%] text-white ">
            Copyright © 2024 CELIOS. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}
