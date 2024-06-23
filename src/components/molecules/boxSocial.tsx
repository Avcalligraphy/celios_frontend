import Image from 'next/image';
import React from 'react'

interface BoxSocialProps{
  title: string,
  titleIcon: string,
  link: string,
  image: string,
  icon: string
}
export default function BoxSocial({title, titleIcon, link, image, icon}: BoxSocialProps) {
  const encodedImage = image.replace(/ /g, "%20");
  return (
    <a
      href={link}
      target="_blank"
      className=" translate-y-0 translate-x-0 hover:translate-y-1 hover:translate-x-1 bg-[url('/icons/boxSocial.png')] cmd:w-[680px]  cmd:h-[538px] csm:w-[580px] csm:h-[438px] w-[300px] h-[340px] p-[23px] object-cover csm:rounded-[32px] rounded-[22px] "
    >
      <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] csm:rounded-[32px] rounded-[22px] ">
        <div
          style={{ backgroundImage: `url(${encodedImage})` }}
          className="cmd:w-[628px] cmd:h-[310px] csm:w-[528px] w-[248px] csm:h-[180px] h-[150px] object-cover csm:rounded-[32px] rounded-[22px]"
        >
          {/* <Image
            src="/images/shadowSocial.png"
            alt="shadow-social"
            width={628}
            height={310}
            className=" csm:rounded-[32px] rounded-[22px] "
          /> */}
          <img
            src="/images/shadowSocial.png"
            className="cmd:w-[628px] cmd:h-[310px] csm:w-[528px] w-[248px] csm:h-[180px] h-[150px]  csm:rounded-[32px] rounded-[22px] "
          />
        </div>
      </div>
      <h1 className=" bg-gradient-to-r from-[#CFE3BE]  to-[#FFFFFF] inline-block text-transparent bg-clip-text font-semibold csm:text-[36px] text-[28px] leading-[100%] csm:max-w-[408px] max-w-[208px] truncate mt-[28px] ml-[9px]  ">
        {title}
      </h1>
      <div className="flex items-center mt-[15px] ml-[9px] gap-[11px] ">
        {/* <Image
          src="/icons/instagram.png"
          alt="instagram"
          width={50}
          height={50}
        /> */}
        <img
          src={icon}
          className="csm:w-[50px] w-[35px] h-auto rounded-[100%] "
        />
        <p className=" csm:text-[24px] text-[20px] font-medium text-white leading-[120%] ">
          {titleIcon}
        </p>
      </div>
    </a>
  );
}
