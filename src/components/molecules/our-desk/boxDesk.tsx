import Button from '@/components/Button.tsx';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface BoxDeskProps{
    title: string
    link: string
}
export default function BoxDesk(props: BoxDeskProps) {
    const {title, link} = props
  return (
    <div className=" bg-[url('/images/imageDesk.png')] object-cover rounded-[32px] w-full  cxl:flex block justify-between items-center gap-[50px] cmd:py-[120px] csm:py-[80px] py-[60px] csm:px-[66px] px-[40px] ">
      <div>
        {/* <Image
          src="/icons/bgTextDesk.png"
          alt="bg-text-desk"
          width={150}
          height={81}
        /> */}
        <img src="/icons/bgTextDesk.png" className='w-auto csm:h-[81px] h-[40px] ' />
        <h1 className=" csm:mt-[-85px] mt-[-45px] font-bold cmd:text-[84px] csm:text-[64px] text-[36px] text-[#021D1C] leading-[100%] tracking-[-4%] max-w-[451px] ">
          {title}
        </h1>
      </div>
      <div>
        <h1 className=" cmd:text-[30px] csm:text-[26px] text-[20px] tracking-[2%] font-medium text-black max-w-[873px] cxl:mt-0 mt-[20px] ">
          CELIOS merupakan lembaga riset di Indonesia yang bergerak dibidang
          makro ekonomi, keuangan, ekonomi hijau dan kebijakan publik dalam
          mendorong percepatan inovasi-digitalisasi secara inklusif.
        </h1>
        <Link href={link}>
          <Button
            text="Learn More"
            bg="bg-[url('/icons/bgButton.png')] mt-[28px]  "
          />
        </Link>
      </div>
    </div>
  );
}
