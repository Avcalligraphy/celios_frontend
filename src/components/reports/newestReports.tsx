import Image from 'next/image';
import React from 'react'
import BoxReports from '../molecules/reports/boxReports';
import BoxMedia from '../molecules/reports/boxMedia';

export default function NewestReports() {
  return (
    <div className="w-full csm:px-[70px] px-[25px] ">
      <div>
        <Image
          src="/icons/titleContent.png"
          alt="title-content"
          width={240}
          height={33}
        />

        <h1 className=" font-bold csm:text-[54px] text-[34px] leading-[140%] tracking-[-2%] csm:mt-[-70px] mt-[-35px] ">
          Newest Reports
        </h1>
      </div>
      <div className="flex justify-center items-center mt-[30px] ">
        <div className="grid clxl:grid-cols-2 grid-cols-1 gap-[53px]">
          <BoxReports />
          <BoxReports />
          <BoxReports />
          <BoxReports />
          <BoxReports />
          <BoxReports />
          <BoxReports />
          <BoxReports />
          <BoxReports />
          <BoxReports />
        </div>
      </div>
      <div className="csm:mt-[312px] mt-[150px] ">
        <Image
          src="/icons/titleContent.png"
          alt="title-content"
          width={240}
          height={33}
        />

        <h1 className=" font-bold csm:text-[54px] text-[34px] leading-[140%] tracking-[-2%] csm:mt-[-70px] mt-[-35px] ">
          Media Comentaries
        </h1>
      </div>
      <div className="flex justify-center items-center mt-[30px] ">
        <div className="grid clxl:grid-cols-2 grid-cols-1 gap-[53px]">
          <BoxMedia />
          <BoxMedia />
        </div>
      </div>
    </div>
  );
}
