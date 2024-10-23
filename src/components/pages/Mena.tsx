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
import {
  fetchDataMenaArticle,
  fetchDataChinaBrief,
  fetchDataChinaEvent,
  fetchDataMenaMedia,
  fetchDataMenaJournal,
  fetchDataReport,
  useStoreMenaArticle,
  useStoreChinaBrief,
  useStoreChinaEvent,
  useStoreMenaMedia,
  useStoreMenaJournal,
  useStoreReport,
} from "@/lib/store";
import Loader from "@/components/loader/loader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default function Mena() {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    AOS.init();
    fetchDataMenaArticle();
    fetchDataMenaMedia();
    fetchDataChinaBrief();
    fetchDataMenaJournal();
    fetchDataReport();
    fetchDataChinaEvent().then(() => {
      setIsLoading(false); // Setelah selesai fetch data, set isLoading jadi false
    });
  }, []);
  const storeDataArticle = useStoreMenaArticle(
    (state) => state.dataMenaArticle
  ).slice(0, 10);
  const storeDataBrief = useStoreChinaBrief((state) => state.dataChinaBrief);
  const storeDataMedia = useStoreMenaMedia(
    (state) => state.dataMenaMedia
  ).slice(0, 10);

  const storeDataEvent = useStoreChinaEvent((state) => state.dataChinaEvent);
  console.log(storeDataEvent);
  const storeDataReportBrief = useStoreMenaJournal(
    (state) => state.dataMenaJournal
  );
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const encodedImage = (image: string) => {
    image ? image?.replace(/ /g, "%20") : null;
  };
  const storeDataReport = useStoreReport((state) => state.dataReport);
  const filteredData = storeDataReport.filter((item) =>
    item.attributes.our_desks.data.some(
      (desk: any) => desk.attributes.title === "Mena-Indonesia Relations"
    )
  );
  const sorted = storeDataBrief.sort((a, b) => {
    const dateA = new Date(a.attributes.date).getTime();
    const dateB = new Date(b.attributes.date).getTime();
    return dateB - dateA;
  });
  const sortedReport = filteredData.sort((a, b) => {
    const dateA = new Date(a.attributes.date).getTime();
    const dateB = new Date(b.attributes.date).getTime();
    return dateB - dateA;
  });

  if (isLoading) {
    return <Loader />; // Tampilkan loading jika masih fetching data
  }
  const apiURL = process.env.NEXT_PUBLIC_API_URL;

  return (
    <>
      <div className="bg-[url('/images/china-indonesia.png')] bg-cover  w-full  csm:min-h-[842px] min-h-[602px] ">
        <div className="bg-[url('/images/background.png')] bg-cover w-full csm:min-h-[842px] min-h-[602px] relative z-10 ">
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
                className="w-auto cxl:h-[71px] cmd:h-[60px] h-[50px] "
              />
              <h1 className="font-bold navMobile:text-[67px] cxl:text-[60px] cmd:text-[57px] csm:text-[40px] text-[37px] cmd:mt-[-70px] mt-[-46px] leading-[100%] tracking-[-4%] text-white max-w-[804px] mb-[25px] ">
                Mena-Indonesia Relations
              </h1>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <h1 className=" navMobile:text-[24px]  csm:text-[20px] text-[16px] tracking-[2%] font-semibold text-white max-w-[1200px] cxxl:mt-0 mt-5 ">
                {name}
              </h1>
            </Suspense>
          </div>
        </div>
      </div>
      <div className="w-full csm:px-[70px] px-[25px] mt-[100px] ">
        <div>
          <img
            src="/icons/titleContent.png"
            alt="title-content"
            className="csm:w-[200px] w-[160px] h-auto"
          />
          <h1 className="font-bold cmd:text-[40px] csm:text-[30px] text-[26px] leading-[140%] tracking-[-2%] cmd:mt-[-60px] csm:mt-[-52px] mt-[-40px] ">
            Latest Reports
          </h1>
        </div>
        <div className="flex justify-center items-center mt-[30px] mb-[210px] ">
          <div className="grid clxl:grid-cols-2 grid-cols-1 gap-[53px]">
            {sortedReport && sortedReport.length > 0 ? (
              sortedReport.map((item) => {
                // console.log(item.attributes.description);
                return (
                  <BoxReports
                    key={item.id}
                    title={item.attributes.title}
                    image={item.attributes.file.data.attributes.url}
                    date={item.attributes.date || null}
                    desc={item.attributes.description[0].children[0].text}
                    link={item.id}
                    documents={item.attributes.document?.data || null}
                  />
                );
              })
            ) : (
              <p className=""></p>
            )}
          </div>
        </div>
      </div>
      <div className="w-full cxl:flex block justify-between gap-[50px] csm:px-[70px] px-[25px] mt-[100px] ">
        <div>
          <div>
            <img
              src="/icons/titleContent.png"
              alt="title-content"
              className="csm:w-[200px] w-[160px] h-auto"
            />
            <h1 className="font-bold cmd:text-[40px] csm:text-[30px] text-[26px] leading-[140%] tracking-[-2%] cmd:mt-[-60px] csm:mt-[-52px] mt-[-40px] ">
              Mena OpEd
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
                    className="list-disc  cmd:text-[20px] text-[16px] font-medium text-[#BDDFCF] "
                    key={item.id}
                  >
                    <li>
                      <a
                        target="_blank"
                        className="hover:text-[#7CB937] leading-9"
                        href={item.attributes.link}
                      >
                        {item.attributes.title}
                      </a>
                    </li>
                  </ul>
                ))}
                <Link
                  href={`/mena-indonesia/articles`}
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
            <img
              src="/icons/titleContent.png"
              alt="title-content"
              className="csm:w-[200px] w-[160px] h-auto"
            />
            <h1 className="font-bold cmd:text-[40px] csm:text-[30px] text-[26px] leading-[140%] tracking-[-2%] cmd:mt-[-60px] csm:mt-[-52px] mt-[-40px] ">
              Mena Media
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
                    className="list-disc cmd:text-[20px] text-[16px] font-medium text-[#BDDFCF] "
                    key={item.id}
                  >
                    <li>
                      <a
                        target="_blank"
                        className="hover:text-[#7CB937] leading-9 "
                        href={item.attributes.link}
                      >
                        {item.attributes.title}
                      </a>
                    </li>
                  </ul>
                ))}
                <Link
                  href={`/mena-indonesia/medias`}
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

      <div className="csm:px-[70px] px-[25px] mt-[271px]">
        <div>
          <img
            src="/icons/titleContent.png"
            alt="title-content"
            className="csm:w-[200px] w-[160px] h-auto"
          />
          <h1 className="font-bold cmd:text-[40px] csm:text-[30px] text-[26px] leading-[140%] tracking-[-2%] cmd:mt-[-60px] csm:mt-[-52px] mt-[-40px] ">
            Journals, Books, Interviews, and Podcasts
          </h1>
        </div>
      </div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mb-[200px]"
      >
        {storeDataReportBrief.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              style={{
                backgroundImage: `url(${
                  apiURL + item.attributes.image.data.attributes.url
                })`,
                backgroundSize: "cover",
              }}
              className="flex flex-col justify-center items-center object-cover clg:h-[644px] csm:h-[544px] h-[444px] mt-[60px]  w-full"
            >
              <h1 className="text-center text-white font-bold clg:text-[40px] csm:text-[34px] text-[28px] leading-[100%] max-w-[1571px] mb-[40px]  ">
                {item.attributes.title}
              </h1>
              <p className="text-center text-white font-medium clg:text-[26px] csm:text-[20px] text-[16px] max-w-[1161px] ">
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
      <Footer />
    </>
  );
}