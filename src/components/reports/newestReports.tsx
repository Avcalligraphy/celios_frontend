import Image from 'next/image';
import React from 'react'
import BoxReports from '../molecules/reports/boxReports';
import BoxMedia from '../molecules/reports/boxMedia';

export default function NewestReports() {
  return (
    <div className="w-full px-[70px]">
      <div>
        <Image
          src="/icons/titleCOntent.png"
          alt="title-content"
          width={240}
          height={33}
          className="ml-[95px]"
        />
        <h1 className=" font-bold text-[54px] leading-[140%] tracking-[-2%] mt-[-70px] ">
          Newest Reports
        </h1>
      </div>
      <div className="flex justify-center items-center gap-[53px] mt-[30px] ">
        <BoxReports />
        <BoxReports />
      </div>
      <div className='mt-[312px]'>
        <Image
          src="/icons/titleCOntent.png"
          alt="title-content"
          width={240}
          height={33}
          className="ml-[95px]"
        />
        <h1 className=" font-bold text-[54px] leading-[140%] tracking-[-2%] mt-[-70px] ">
          Media Commentaries
        </h1>
      </div>
      <div className="flex justify-center items-center gap-[53px] mt-[30px] ">
        <BoxMedia />
        <BoxMedia />
      </div>
    </div>
  );
}
