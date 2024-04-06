import Image from 'next/image'
import React from 'react'

export default function BoxPublishing() {
  return (
    <div className=" flex gap-[74px]  ">
      <Image
        src="/images/imageGeo.png"
        alt="image-deo"
        width={512}
        height={800}
        className="rounded-[32px]"
      />
      <div className=" bg-[#00130D] rounded-[32px] px-[66px] py-[46px] w-[950px] min-h-[800px] ">
        <p className=" text-[24px] font-semibold text-[#AAAAAA] ">
          Celios Book
        </p>
        <h1 className=" bg-gradient-to-r from-[#CFE3BE]  to-[#FFFFFF] inline-block text-transparent bg-clip-text font-semibold text-[48px] tracking-[-2%] max-w-[792px] mt-[36px]   ">
          GEOTHERMAL DI INDONESIA Dilema Potensi dan Eksploitasi atas nama
          Transisi Energi
        </h1>
        <div className=" mt-[29px] ">
          <h1 className="text-[24px] text-white  ">
            <span className="font-bold">Penulis :</span> MHD Zakiul Fikri
          </h1>
          <h1 className="text-[24px] text-white  ">
            <span className="font-bold">Penerbit :</span> YAYASAN CELIOS PECERAH
            BANGSA
          </h1>
          <h1 className="text-[24px] text-white  ">
            <span className="font-bold">ISBN :</span> Proses
          </h1>
          <h1 className="text-[24px] text-white  ">
            <span className="font-bold">Cover :</span> Soft Cover
          </h1>
          <h1 className="text-[24px] text-white  ">
            <span className="font-bold">Halaman :</span> ix+102 hlm
          </h1>
          <h1 className="text-[24px] text-white  ">
            <span className="font-bold">Berat :</span> 400 gram
          </h1>
          <h1 className="text-[24px] text-white  ">
            <span className="font-bold">Ukuran :</span> 13x20 cm
          </h1>
          <div className=" mt-[46px] ">
            <h1 className=" text-[#CFE3BE] text-[32px] font-semibold  ">
              👜 Link Pembelian
            </h1>
            <div className=" flex gap-[21px] mt-[27px] ">
              <Image
                src="/icons/shoppe.png"
                width={88}
                height={88}
                alt="shoppe"
              />
              <Image
                src="/icons/tokped.png"
                width={88}
                height={88}
                alt="tokped"
              />
              <Image
                src="/icons/instagram.png"
                width={88}
                height={88}
                alt="instagram"
              />
              <Image
                src="/icons/whatsapp.png"
                width={88}
                height={88}
                alt="whatsapp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
