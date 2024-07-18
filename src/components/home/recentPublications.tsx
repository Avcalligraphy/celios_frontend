import Image from 'next/image';
import React from 'react'
import BoxRecent from '../molecules/boxRecent';
import BoxNews from '../molecules/boxNews';
import Link from 'next/link';
import { useStoreNews, useStoreReport } from '@/lib/store';

export default function RecentPublication() {
  const storeData = useStoreReport((state) => state.dataReport);
  // console.log(storeData);
  const storeDataNews = useStoreNews((state) => state.dataNews);
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "long",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };
  const truncateText = (text: string, wordLimit: number): string => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };
  const sortedData = [...storeData].sort(
    (a, b) =>
      new Date(b.attributes.createdAt).getTime() -
      new Date(a.attributes.createdAt).getTime()
  );
  const sortedDataNews = [...storeDataNews].sort(
    (a, b) =>
      new Date(b.attributes.createdAt).getTime() -
      new Date(a.attributes.createdAt).getTime()
  );
  const latestThree = sortedData.slice(0, 3);
  const latestThreeNews = sortedDataNews.slice(0, 6);
  return (
    <>
      <div className="w-full clg:block justify-center flex ">
        <div className="clg:flex block clg:px-[48px] px-[0px]  csm:gap-10 gap-0 csm:justify-normal justify-center ">
          <div>
            {/* <Image
            src="/icons/titleContent.png"
            alt="title-content"
            width={240}
            height={33}
            className="ml-[140px]"
          /> */}
            <h1 className="font-bold csm:text-[54px] text-[34px] tracking-[-4%] csm:leading-[140%] leading-[120%] clg:max-w-[481px] max-w-[330px]  clg:text-center text-left mb-[45px]  ">
              Recent Publications
            </h1>
          </div>
          <div

            className="grid clxl:grid-cols-3 navMobile:grid-cols-2 grid-cols-1 gap-[45px] "
          >
            {latestThree.map((item) => (
              <BoxRecent
                key={item.id}
                title={truncateText(item.attributes.title, 7)}
                date={formatDate(item.attributes.publishedAt)}
                image={item.attributes.file.data.attributes.url}
                link={item.id}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-t from-[#031B1F] to-[#ffff] w-full min-h-[1152px]">
        <div className=" bg-[url('/images/background.png')] w-full min-h-[1152px] pt-[360px] ">
          <div className="flex justify-center  ">
            <div>
              {/* <Image
                src="/icons/bgTextSocial.png"
                width={532.78}
                height={20.36}
                alt="bg-text-social"
              /> */}
              <img
                src="/icons/bgTextSocial.png"
                className=" h-[20.36px] w-auto "
              />
              <h1 className="text-black  font-bold tracking-[-2%] leading-[100%] csm:text-[54px] text-[34px] csm:mt-[-60px] mt-[-40px]   ">
                Recent News
              </h1>
              <h1 className="text-black mt-2 text-[20px] font-semibold ">
                CELIOS Op-Ed and Commentaries
              </h1>
              <div
                className="grid clxl:grid-cols-3 navMobile:grid-cols-2 grid-cols-1 csm:gap-[57px] gap-[37px] csm:mt-[80px] mt-[40px] "
              >
                {latestThreeNews.map((item) => (
                  <BoxNews
                    key={item.id}
                    title={truncateText(item.attributes.title, 7)}
                    titleIcon={item.attributes.titleIcon}
                    link={item.attributes.link}
                  />
                ))}
              </div>
              <Link
                href="/news"
                className="flex justify-end items-center gap-[18px] my-[56px] translate-y-0 translate-x-0 hover:translate-y-1 hover:translate-x-1 "
              >
                <h1 className=" font-semibold text-black leading-[100%] tracking-[-2%] ">
                  See More
                </h1>
                <Image
                  src="/icons/arrowButton.png"
                  height={40}
                  width={40}
                  alt="arrow-buttons"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
