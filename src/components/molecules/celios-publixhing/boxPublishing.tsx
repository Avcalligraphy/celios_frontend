import Image from 'next/image'
import React from 'react'

export default function BoxPublishing() {
  return (
    <div className=" cxl:flex block gap-[74px]  ">
      <div className='flex justify-center cxl:mb-0 mb-[30px] ' >
        {/* <Image
          src="/images/imageGeo.png"
          alt="image-deo"
          width={512}
          height={800}
          className="rounded-[32px]"
        /> */}
        <img src="/images/imageGeo.png" className=' cmd:w-[512px] csm:w-[412px] w-[312px] h-auto rounded-[32px] ' />
      </div>
      <div className=" bg-[#00130D] rounded-[32px] cmd:px-[66px] csm:px-[46px] px-[26px] csm:py-[46px] py-[26px] cxl:w-[950px] min-h-[800px] w-full ">
        <p className=" cxl:text-[24px] csm:text-[22px] text-[18px] font-semibold text-[#AAAAAA] ">
          Celios Book
        </p>
        <h1 className=" bg-gradient-to-r from-[#CFE3BE]  to-[#FFFFFF] inline-block text-transparent bg-clip-text font-semibold cxxl:text-[48px] cxl:text-[36px] csm:text-[32px] text-[28px] tracking-[-2%] max-w-[792px] mt-[36px]   ">
          GEOTHERMAL DI INDONESIA Dilema Potensi dan Eksploitasi atas nama
          Transisi Energi
        </h1>
        <div className=" mt-[29px] ">
          <h1 className="cxl:text-[24px] csm:text-[22px] text-[18px] text-white  ">
            <span className="font-bold">Penulis :</span> MHD Zakiul Fikri
          </h1>
          <h1 className="cxl:text-[24px] csm:text-[22px] text-[18px] text-white  ">
            <span className="font-bold">Penerbit :</span> YAYASAN CELIOS PECERAH
            BANGSA
          </h1>
          <h1 className="cxl:text-[24px] csm:text-[22px] text-[18px] text-white  ">
            <span className="font-bold">ISBN :</span> Proses
          </h1>
          <h1 className="cxl:text-[24px] csm:text-[22px] text-[18px] text-white  ">
            <span className="font-bold">Cover :</span> Soft Cover
          </h1>
          <h1 className="cxl:text-[24px] csm:text-[22px] text-[18px] text-white  ">
            <span className="font-bold">Halaman :</span> ix+102 hlm
          </h1>
          <h1 className="cxl:text-[24px] csm:text-[22px] text-[18px] text-white  ">
            <span className="font-bold">Berat :</span> 400 gram
          </h1>
          <h1 className="cxl:text-[24px] csm:text-[22px] text-[18px] text-white  ">
            <span className="font-bold">Ukuran :</span> 13x20 cm
          </h1>
          <div className=" mt-[46px] ">
            <h1 className=" text-[#CFE3BE] cxl:text-[32px] csm:text-[30px] text-[26px] font-semibold  ">
              👜 Link Pembelian
            </h1>
            <div className=" grid cmd:grid-cols-4 csm:grid-cols-3 grid-cols-2 gap-[30px]  mt-[27px] ">
              <img
                src="/icons/shoppe.png"
                alt="shoppe"
                className="w-auto cxl:h-[88px] csm:h-[76px] h-[56px] "
              />
              <img
                src="/icons/tokped.png"
                className="w-auto cxl:h-[88px] csm:h-[76px] h-[56px] "
                alt="tokped"
              />
              <img
                src="/icons/instagram.png"
                className="w-auto cxl:h-[90px] csm:h-[76px] h-[56px] "
                alt="instagram"
              />
              <img
                src="/icons/whatsapp.png"
                className="w-auto cxl:h-[88px] csm:h-[76px] h-[56px] "
                alt="whatsapp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
