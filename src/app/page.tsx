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
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
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
            <h1 className="text-white csm:text-[54px] text-[34px] font-bold tracking-[-2%] leading-[100%] csm:mt-[-60px] mt-[-40px]   ">
              🔗Social Media
            </h1>
            <p className=" csm:text-[24px] text-[18px] leading-[150%] text-[#BAE6FD] text-center csm:mt-[30px] mt-[15px] ">
              Let is connect and engage with us!
            </p>
          </div>
        </div>
        <div data-aos="zoom-in-up" className="flex justify-center">
          <div>
            <div className="grid cxxl:grid-cols-2 grid-cols-1 csm:gap-[75px] gap-[50px]  csm:mt-[116px] mt-[55px] ">
              <BoxSocial />
              <BoxSocial />
            </div>
            <Link
              href="/social-media"
              className="flex justify-end items-center gap-[18px] mt-[56px] "
            >
              <h1 className=" font-semibold text-white leading-[100%] tracking-[-2%] ">
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
      </ContactPage>
      <Footer />
    </>
  );
}
