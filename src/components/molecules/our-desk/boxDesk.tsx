import Button from '@/components/Button.tsx';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface BoxDeskProps{
    title: string
    link: string
    description: string
}
export default function BoxDesk(props: BoxDeskProps) {
    const {title, link, description} = props
  return (
    <div className=" bg-[url('/images/imageDesk.png')] object-cover rounded-[32px] w-full  cxl:flex block justify-between items-center gap-[50px] cmd:py-[120px] csm:py-[80px] py-[60px] csm:px-[66px] px-[40px] ">
      <div>
        {/* <Image
          src="/icons/bgTextDesk.png"
          alt="bg-text-desk"
          width={150}
          height={81}
        /> */}
        <img
          src="/icons/bgTextDesk.png"
          className="w-auto cmd:h-[61px] h-[40px] "
        />
        <h1 className=" cmd:mt-[-60px] csm:mt-[-40px] mt-[-45px] font-bold cmd:text-[60px] navMobile:text-[64px] cxl:text-[54px] text-[36px] text-[#021D1C] leading-[100%] tracking-[-4%] max-w-[451px] ">
          {title}
        </h1>
      </div>
      <div>
        <h1 className=" navMobile:text-[24px] cxl:text-[20px] csm:text-[20px] text-[18px] tracking-[2%] font-medium text-black max-w-[873px] cxl:mt-0 mt-[20px] ">
          {description}
        </h1>
        <Link
          href={{
            pathname: link,
            query: { name: description },
          }}
        >
          <Button
            text="Learn More"
            bg="bg-[url('/icons/bgButton.png')] mt-[28px]  "
          />
        </Link>
      </div>
    </div>
  );
}
