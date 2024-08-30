'use client'
import Footer from "@/components/footer";
import AboutCelios from "@/components/home/aboutCelios";
import ContactPage from "@/components/home/contactPage";
import DeskContent from "@/components/home/deskContent";
import Header from "@/components/home/header";
import RecentPublication from "@/components/home/recentPublications";
import BoxSocial from "@/components/molecules/boxSocial";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { fetchData, fetchDataOpEd, fetchDataReport, fetchDataSocial, useStoreSocial } from "@/lib/store";
import Loader from "@/components/loader/loader";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    fetchData();
    fetchDataReport()
    fetchDataOpEd()
    fetchDataSocial().then(() => {
      setIsLoading(false); // Setelah selesai fetch data, set isLoading jadi false
    });
  }, []);
  const storeData = useStoreSocial((state) => state.dataSocial);
  const sortedData = storeData ? ( [...storeData].sort(
    (a, b) =>
      new Date(b.attributes.createdAt).getTime() -
      new Date(a.attributes.createdAt).getTime()
  )) : null;
  const latestThree = sortedData?.slice(0, 4);
  if (isLoading) {
    return <Loader />; // Tampilkan loading jika masih fetching data
  }
  return (
    <>
      <Header />
      <DeskContent />
      <AboutCelios />
      <RecentPublication />
      <ContactPage>
        <div className="flex justify-center">
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
            <h1 className="text-white cmd:text-[40px] csm:text-[34px] text-[34px] font-bold tracking-[-2%] leading-[100%] cmd:mt-[-48px] csm:mt-[-40px] mt-[-40px]   ">
              🔗Social Media
            </h1>
            <p className=" cmd:text-[20px] csm:text-[18px] text-[18px] leading-[150%] text-[#BAE6FD] text-center cmd:mt-[25px] csm:mt-[15px] mt-[15px] ">
              Let connect and engage with us!
            </p>
          </div>
        </div>
        <div data-aos="zoom-in-up" className="flex justify-center">
          <div>
            <div className="grid cxxl:grid-cols-2 grid-cols-1 csm:gap-[75px] gap-[20px]  csm:mt-[116px] mt-[55px] ">
              {latestThree?.map((item) => {
                return (
                  <BoxSocial
                    key={item.id}
                    title={item.attributes.title}
                    titleIcon={item.attributes.titleIcon}
                    link={item.attributes.link}
                    icon={item.attributes.icon.data.attributes.url}
                    image={item.attributes.image.data.attributes.url}
                  />
                );
              })}
            </div>
            <Link
              href="/social-media"
              className="flex justify-end items-center gap-[18px] mt-[56px] translate-y-0 translate-x-0 hover:translate-y-1 hover:translate-x-1 "
            >
              <h1 className=" text-[20px] font-semibold text-white leading-[100%] tracking-[-2%] ">
                See More
              </h1>
              <img
                src="/icons/arrowButton.png"
                className="cmd:w-[35px] csm:w-[30px] w-[30px] h-auto "
                alt="arrow-buttons"
              />
            </Link>
          </div>
        </div>
      </ContactPage>
      <Footer />
    </>
  );
}

  