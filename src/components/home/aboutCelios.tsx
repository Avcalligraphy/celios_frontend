import Image from 'next/image'
import React from 'react'

export default function AboutCelios() {
  return (
    <div className="  px-[248px] mb-[363px] ">
      <div>
        <Image
          src="/icons/titleCOntent.png"
          alt="title-content"
          width={240}
          height={33}
          className="ml-[95px]"
        />
        <h1 className=" font-bold text-[54px] leading-[140%] tracking-[-2%] mt-[-70px] ">
          🧰 Tentang Celios
        </h1>
      </div>
      <div className=" bg-[url('/icons/frameAboutCelios.png')] h-[1045px] w-[1195px] mt-[33px] pt-[71px] pl-[80px] ">
        <Image
          src="/icons/logoHorizon.png"
          alt="log-horizon"
          width={269}
          height={131}
        />
        <p className=" text-[24px] max-w-[903px] leading-[150%] mt-[56px] ">
          <span className='font-bold'>Lembaga riset</span> yang bergerak dibidang makro ekonomi,
          keuangan, ekonomi hijau dan kebijakan publik dalam mendorong
          percepatan inovasi-digitalisasi secara inklusif.
        </p>
      </div>
    </div>
  );
}
