import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="w-full h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500" />
      <div className="bg-[#00130D] pt-[82px] pb-[111px] csm:px-[139px] px-[65px]  ">
        <div className=" bg-[url('/images/backgroundFooter.png')] w-full ">
          <div className="grid clg:grid-cols-2 grid-cols-1 gap-[50px]">
            <div>
              {/* <Image src="/icons/logo.png" alt="logo" width={75} height={116} /> */}
              <img
                src="/icons/logo.png"
                className="csm:w-[75px] h-auto w-[55px] "
              />
              <h1 className=" csm:text-[24px] text-[20px] leading-[120%] text-white max-w-[723px] mt-[15px] ">
                <span className="font-bold">Lembaga riset</span> yang bergerak
                dibidang makro ekonomi, keuangan, ekonomi hijau dan kebijakan
                publik dalam mendorong percepatan inovasi-digitalisasi secara
                inklusif.
              </h1>
              <h1 className=" font-bold text-white csm:text-[24px] text-[20px] leading-[150%] mt-[27px] ">
                Email :{" "}
                <span className="text-[#A7D147]">admin@celios.co.id</span>
              </h1>
            </div>
            <div>
              {/* <Image
                src="/images/imageNGO.png"
                width={327}
                height={56}
                alt="image-ngo"
              /> */}
              <h1 className=" font-bold text-white csm:text-[24px] text-[20px] leading-[150%] my-[13px] ">
                Recognition and Accreditation by:
              </h1>
              <img
                src="/images/imageNGO.png"
                className=" csm:w-[327px] w-[307px] h-auto "
              />
              <h1 className=" font-bold text-white csm:text-[24px] text-[20px] leading-[150%] my-[13px] ">
                Ikuti Kami
              </h1>
              <div className="flex items-center gap-[35px] mb-[15px] ">
                <Image
                  src="/icons/instagram.png"
                  width={65}
                  height={65}
                  alt="instagram"
                />

                <p className=" csm:text-[24px] text-[20px] font-medium text-white leading-[120%] ">
                  @celios.id
                </p>
              </div>
              <div className="flex items-center gap-[15px] ">
                {/* <Image
                  src="/icons/maps.png"
                  width={65}
                  height={65}
                  alt="maps"
                /> */}
                <img src="/icons/maps.png" className="w-[65px] h-auto" />
                <p className=" csm:text-[24px] text-[20px] font-medium text-white leading-[120%] mt-[6px] max-w-[551px] ">
                  Jl. Abuserin III Cilandak Jakarta Selatan
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[2px] mt-[31px] bg-white " />
          <p className="csm:text-[18px] text-[16px] mt-[30px] leading-[120%] text-white ">
            Copyright © 2023 Celios. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}
