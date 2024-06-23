import Button from '@/components/Button.tsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface BoxDeskProps{
  image: string
  title: string
  link:string
  document: any
}
export default function BoxDesk({image, title, link, document}: BoxDeskProps) {
  const encodedImage = image ? image?.replace(/ /g, "%20") : null;
  return (
    <div
      data-aos="fade-down"
      className=" bg-[#00130D] py-[23px] csm:px-[46px] px-[20px] rounded-[32px] pb-[44px] "
    >
      <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] ">
        <div
          style={{
            backgroundImage: `url(${encodedImage})`,
            objectFit: "cover",
          }}
          className="csm:h-[420px] h-[180px] object-cover rounded-[32px] "
        >
          {/* <Image
            src="/images/shadowSocial.png"
            alt="shadow-social"
            width={628}
            height={310}
            className=" rounded-[32px] "
          /> */}
        </div>
      </div>
      <div className="clg:flex block items-center justify-between mt-[32px] gap-[50px] ">
        <a download href={document}>
          <Button
            text="Download Report"
            bg=" w-full clxl:w-[290px] bg-[#99C948] "
          />
        </a>
        <Link
          href={{
            pathname: `/reports/${title}`,
            query: { link: link },
          }}
        >
          <Button
            text="Read More"
            bg=" w-full clxl:w-[290px] bg-[#454D38] clg:mt-0 mt-[20px] "
          />
        </Link>
      </div>
    </div>
  );
}
