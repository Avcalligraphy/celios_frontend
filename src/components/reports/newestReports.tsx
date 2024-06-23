import Image from 'next/image';
import React from 'react'
import BoxReports from '../molecules/reports/boxReports';
import BoxMedia from '../molecules/reports/boxMedia';

export default function NewestReports({storeData} : {storeData:any}) {
  return (
    <div className="w-full csm:px-[70px] px-[25px] mb-[230px] ">
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
          {storeData.map((item: any) => (
            <BoxReports
              key={item.id}
              title={item.attributes.title}
              image={item.attributes.file.data.attributes.url}
              date={item.attributes.publishedAt}
              link={item.id}
              document={item.attributes.document.data.attributes.url}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
