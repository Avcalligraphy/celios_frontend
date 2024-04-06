import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <>
      <div className="w-full h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500" />
      <div className="bg-[#00130D] pt-[82px] pb-[111px] px-[139px]  ">
        <div className=" bg-[url('/images/backgroundFooter.png')] w-full ">
          <div className="flex justify-between">
            <div>
              <Image src="/icons/logo.png" alt="logo" width={75} height={116} />
              <h1 className=" text-[24px] leading-[120%] text-white max-w-[723px] mt-[15px] ">
                <span className="font-bold">Lembaga riset</span> yang bergerak
                dibidang makro ekonomi, keuangan, ekonomi hijau dan kebijakan
                publik dalam mendorong percepatan inovasi-digitalisasi secara
                inklusif.
              </h1>
              <h1 className=" font-bold text-white text-[24px] leading-[150%] mt-[27px] ">
                Email :{" "}
                <span className="text-[#A7D147]">admin@celios.co.id</span>
              </h1>
            </div>
            <div>
              <h1 className=" font-bold text-white text-[24px] leading-[150%] mt-[100px] ">
                Ikuti Kami
              </h1>
              <div className="flex items-center gap-[15px] ">
                <Image
                  src="/icons/instagram.png"
                  width={65}
                  height={65}
                  alt="instagram"
                />
                <p className=" text-[24px] font-medium text-white leading-[120%] ">
                  @celios.id
                </p>
              </div>
              <div className="flex items-center gap-[15px] ">
                <Image
                  src="/icons/maps.png"
                  width={65}
                  height={65}
                  alt="maps"
                />
                <p className=" text-[24px] font-medium text-white leading-[120%] mt-[6px] max-w-[551px] ">
                  Tokopedia Tower 22th Fl. Jl. Prof. Dr Satrio Karet Semanggi,
                  Setiabudi. Jakarta Selatan. Indonesia 12950
                </p>
              </div>
            </div>
          </div>
          <div className="w-full h-[2px] mt-[31px] bg-white " />
          <p className="text-[18px] mt-[30px] leading-[120%] text-white ">
            Copyright © 2023 Celios. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}
