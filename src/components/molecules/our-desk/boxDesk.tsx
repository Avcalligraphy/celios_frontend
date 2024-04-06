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
    <div className=" bg-[url('/images/imageDesk.png')] object-cover rounded-[32px] w-full  flex justify-between items-center py-[120px] px-[66px] ">
      <div>
        <Image
          src="/icons/bgTextDesk.png"
          alt="bg-text-desk"
          width={150}
          height={81}
        />
        <h1 className=" mt-[-85px] font-bold text-[84px] text-[#021D1C] leading-[100%] tracking-[-4%] max-w-[451px] ">
          {title}
        </h1>
      </div>
      <div>
        <h1 className=" text-[30px] tracking-[2%] font-medium text-black max-w-[873px] ">
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
