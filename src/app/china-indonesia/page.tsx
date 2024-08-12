"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "@/components/Button.tsx";
import Footer from "@/components/footer";
import BoxBrief from "@/components/molecules/china-indonesia/boxBrief";
import BoxReports from "@/components/molecules/reports/boxReports";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { fetchDataChinaArticle, fetchDataChinaBrief, fetchDataChinaEvent, fetchDataChinaMedia, fetchDataChinaReportBrief, useStoreChinaArticle, useStoreChinaBrief, useStoreChinaEvent, useStoreChinaMedia, useStoreChinaReportBrief } from "@/lib/store";
import Loader from "@/components/loader/loader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default function China() {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    AOS.init();
    fetchDataChinaArticle()
    fetchDataChinaMedia()
    fetchDataChinaBrief()
    fetchDataChinaReportBrief()
    fetchDataChinaEvent().then(() => {
      setIsLoading(false); // Setelah selesai fetch data, set isLoading jadi false
    });
  }, []);
  const storeDataArticle = useStoreChinaArticle((state) => state.dataChinaArticle)
  const storeDataBrief = useStoreChinaBrief((state) => state.dataChinaBrief)
  const storeDataMedia = useStoreChinaMedia(
    (state) => state.dataChinaMedia
  );
  const storeDataEvent = useStoreChinaEvent((state) => state.dataChinaEvent);
  const storeDataReportBrief = useStoreChinaReportBrief((state) => state.dataChinaReportBrief)
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const encodedImage = (image: string) => {
    image ? image?.replace(/ /g, "%20") : null;
  };


  if (isLoading) {
    return <Loader />; // Tampilkan loading jika masih fetching data
  }
  const apiURL = process.env.NEXT_PUBLIC_API_URL;
  
  return (
    <>
      <div className="bg-[url('/images/china-indonesia.png')]  w-full  min-h-[842px] ">
        <div className="bg-[url('/images/background.png')] object-cover w-full min-h-[842px] relative z-10 ">
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>
          <div
            data-aos="fade-right"
            className="block cmd:pt-[283px]   clg:px-[162px] csm:px-[81px]  px-[20px] pt-[200px] "
          >
            <div>
              {/* <Image
                src="/icons/bgText.png"
                alt="bg-text"
                width={247}
                height={81}
                className="  "
              /> */}
              <img
                src="/icons/bgText.png"
                className="w-auto csm:h-[81px] h-[60px] "
              />
              <h1 className="font-bold csm:text-[87px] text-[67px] csm:mt-[-90px] mt-[-56px] leading-[100%] tracking-[-4%] text-white max-w-[804px] mb-[25px] ">
                China Indonesia Relations
              </h1>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <h1 className=" text-[30px] tracking-[2%] font-semibold text-white max-w-[1200px] ">
                {name}
              </h1>
            </Suspense>
          </div>
        </div>
      </div>
      <div className="w-full cxl:flex block justify-between gap-[50px] csm:px-[70px] px-[25px] mt-[100px] ">
        <div>
          <div>
            <Image
              src="/icons/titleCOntent.png"
              alt="title-content"
              width={240}
              height={33}
            />

            <h1 className=" font-bold csm:text-[54px] text-[34px] leading-[140%] tracking-[-2%] csm:mt-[-70px] mt-[-35px] ">
              Articles
            </h1>
          </div>
          <div
            data-aos="zoom-in-up"
            className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] w-full mt-[33px] "
          >
            <div className=" bg-[#00130D] csm:py-[75px] py-[37px] csm:px-[65px] px-[32px] rounded-[32px] w-full  ">
              <div className="block">
                {storeDataArticle.map((item) => (
                  <ul
                    className="list-disc text-[20px] font-medium text-[#BDDFCF] "
                    key={item.id}
                  >
                    <li>
                      <a
                        target="_blank"
                        className=""
                        href={item.attributes.link}
                      >
                        {item.attributes.title}
                      </a>
                    </li>
                  </ul>
                ))}
                <Link
                  href={`/china-indonesia/articles`}
                  className="flex items-center font-medium text-[20px] text-[#BDDFCF] mt-[20px] "
                >
                  <Image
                    src="/icons/arrowButton.png"
                    alt="arrow-button"
                    width={32}
                    height={32}
                    className="mr-[17px]"
                  />
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="cxl:mt-0 mt-[80px]">
            <Image
              src="/icons/titleCOntent.png"
              alt="title-content"
              width={240}
              height={33}
            />

            <h1 className=" font-bold csm:text-[54px] text-[34px] leading-[140%] tracking-[-2%] csm:mt-[-70px] mt-[-35px] ">
              Media Comentaries
            </h1>
          </div>
          <div
            data-aos="zoom-in-up"
            className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] w-full mt-[33px] "
          >
            <div className=" bg-[#00130D] csm:py-[75px] py-[37px] csm:px-[65px] px-[32px] rounded-[32px] w-full  ">
              <div className="block">
                {storeDataMedia.map((item) => (
                  <ul
                    className="list-disc text-[20px] font-medium text-[#BDDFCF] "
                    key={item.id}
                  >
                    <li>
                      <a
                        target="_blank"
                        className=""
                        href={item.attributes.link}
                      >
                        {item.attributes.title}
                      </a>
                    </li>
                  </ul>
                ))}
                <Link
                  href={`/china-indonesia/medias`}
                  className="flex items-center font-medium text-[20px] text-[#BDDFCF] mt-[20px] "
                >
                  <Image
                    src="/icons/arrowButton.png"
                    alt="arrow-button"
                    width={32}
                    height={32}
                    className="mr-[17px]"
                  />
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center mt-[73px] mb-[271px] ">
        <Link href="/china-library">
          <Button
            text="China Indonesia Library"
            bg="bg-[url('/icons/bgButton.png')]"
          />
        </Link>
      </div>
      <div className="csm:px-[70px] px-[5px] mb-[271px]">
        <div>
          <Image
            src="/icons/titleCOntent.png"
            alt="title-content"
            width={240}
            height={33}
          />

          <h1 className=" font-bold csm:text-[54px] text-[34px] leading-[140%] tracking-[-2%] csm:mt-[-70px] mt-[-35px] ">
            China-Indonesia Monthly Brief
          </h1>
        </div>
        <div
          data-aos="fade-right"
          className="grid clxl:grid-cols-3 cxl:grid-cols-2 grid-cols-1 gap-7 mt-[60px] "
        >
          {storeDataBrief.map((item) => (
            <BoxBrief
              key={item.id}
              id={item.id}
              title={item.attributes.title}
              date={item.attributes.publishedAt}
              description={item.attributes.description}
            />
          ))}
        </div>
      </div>
      <div className="csm:px-[70px] px-[25px]">
        <div>
          <Image
            src="/icons/titleCOntent.png"
            alt="title-content"
            width={240}
            height={33}
          />

          <h1 className=" font-bold csm:text-[54px] text-[34px] leading-[140%] tracking-[-2%] csm:mt-[-70px] mt-[-35px] ">
            Reports, Brief, and Books
          </h1>
        </div>
      </div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
      >
        {storeDataReportBrief.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              style={{
                backgroundImage: `url(${
                  apiURL + item.attributes.image.data.attributes.url
                })`,
              }}
              className="flex flex-col justify-center items-center object-cover h-[644px] mt-[60px]  w-full"
            >
              <h1 className="text-center text-white font-bold csm:text-[64px] text-[44px] leading-[100%] max-w-[1571px] mb-[40px]  ">
                {item.attributes.title}
              </h1>
              <p className="text-center text-white font-medium csm:text-[32px] text-[22px] max-w-[1161px] ">
                {item.attributes.description}
              </p>
              <div className="flex justify-center items-center gap-6 ">
                {item.attributes.file.data.attributes.url ? (
                  <a
                    download
                    href={apiURL + item.attributes.file.data.attributes.url}
                    className="text-white font-semibold csm:text-[20px] translate-y-0 hover:translate-y-2 text-[16px] csm:py-[20px] py-[15px] csm:px-[26px] px-[20px] mt-[60px] border-[1px] border-white rounded-[13px] "
                  >
                    Click Here
                  </a>
                ) : null}
                {item.attributes.link ? (
                  <a
                    target="_blank"
                    href={item.attributes.link}
                    className="text-white font-semibold translate-y-0 hover:translate-y-2 csm:text-[20px] text-[16px] csm:py-[20px] py-[15px] csm:px-[26px] px-[20px] mt-[60px] border-[1px] border-white rounded-[13px] "
                  >
                    Link
                  </a>
                ) : null}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="csm:px-[70px] px-[25px] mt-[60px]">
        <div>
          <Image
            src="/icons/titleCOntent.png"
            alt="title-content"
            width={240}
            height={33}
          />

          <h1 className=" font-bold csm:text-[54px] text-[34px] leading-[140%] tracking-[-2%] csm:mt-[-70px] mt-[-35px] ">
            Events
          </h1>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={90}
          pagination={false}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 320,
            },
            894: {
              slidesPerView: 2,
              spaceBetween: 320,
            },
            1646: {
              slidesPerView: 3,
              spaceBetween: 320,
            },
          }}
        >
          {storeDataEvent.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] mt-[46px] csm:w-[404px] w-[304px] ">
                <img
                  className="  cxl:h-[367px] csm:h-[267px] h-[167px] csm:w-[400px] w-[300px]  object-cover rounded-[32px] "
                  src={apiURL + item.attributes.image.data.attributes.url}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-[60px]">
          <Image
            src="/icons/titleCOntent.png"
            alt="title-content"
            width={240}
            height={33}
          />

          <h1 className=" font-bold csm:text-[54px] text-[34px] leading-[140%] tracking-[-2%] csm:mt-[-70px] mt-[-35px] ">
            We have worked and collaborated with:
          </h1>
        </div>
        <div className="grid cxxl:grid-cols-4 cmd:grid-cols-3 csm:grid-cols-2 grid-cols-1  clg:gap-[100px] gap-[50px] mt-[40px] mb-[210px] ">
          <img src="/sponshor/1.png" className="h-[86px] w-auto " />
          <img src="/sponshor/2.png" className="h-[86px] w-auto " />
          <img src="/sponshor/3.png" className="h-[86px] w-auto " />
          <img src="/sponshor/4.png" className="h-[86px] w-auto " />
        </div>
      </div>
      <Footer />
    </>
  );
}
