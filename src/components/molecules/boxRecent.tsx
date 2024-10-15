import Link from 'next/link';
import React from 'react'

interface BoxRecentProps{
  title: string;
  date: string
  image: string
  link: number

}

const encodedImage = (image: string) => {
  image ? image?.replace(/ /g, "%20") : null;
};
const apiURL = process.env.NEXT_PUBLIC_API_URL;
export default function BoxRecent({ title, date, image, link }: BoxRecentProps) {
  return (
    <div className=" translate-y-0 hover:translate-y-2 bg-gradient-to-t from-[#0284C7] to-[#113B4B] p-[2px] csm:w-[363px] csm:h-[458px] w-[303px] h-[398px] rounded-[32px] shadow-xl shadow-gray-400 ">
      <div
        // style={{
        //   backgroundImage: `url(${apiURL + image})`,
        // }}
        className="bg-[url('/icons/boxSocial.png')] bg-cover csm:w-[359px] csm:h-[454px] w-[299px] h-[394px]  rounded-[32px]  p-[18px]   pb-[51px] flex flex-col justify-between items-start "
      >
        <div>
          <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] csm:rounded-[32px] rounded-[22px] ">
            <img
              src={apiURL + image}
              alt="background-recent"
              className="w-full csm:h-[200px] h-[150px] bg-cover csm:rounded-[32px] rounded-[22px]  "
            />
          </div>
          <h1 className=" bg-gradient-to-r from-[#CFE3BE]  to-[#FFFFFF] inline-block text-transparent bg-clip-text font-semibold csm:text-[26px] text-[20px] leading-[100%] mt-[20px]  max-w-fit   ">
            {title}
          </h1>
          <p className="csm:text-[16px] text-[16px] font-medium leading-[100%] mt-[18px] text-[#CECECE] ">
            {date}
          </p>
        </div>
        <Link
          href={{
            pathname: `/reports/${link}`,
            query: { link: link },
          }}
        >
          <h1 className="translate-y-0 hover:translate-y-2 text-white font-semibold leading-[100%] csm:text-[16px] text-[14px]  ">
            See More
          </h1>
        </Link>
      </div>
    </div>
  );
}
