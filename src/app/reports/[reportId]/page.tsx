"use client";

import Button from "@/components/Button.tsx";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

export default function ReportBlog({
  params,
}: {
  params: { reportId: string };
}) {
    const pathname = usePathname();
  return (
    <>
      <div className=" bg-gradient-to-b from-[#031B1F] from-20% to-white to-90%  ">
        <div className="w-full bg-[url('/images/background.png')] ">
          <Navbar />
          <div className=" px-[142px] mt-[146px] ">
            <div className="flex gap-[15px] ">
              <i className="bx bxs-home text-[30px] text-[#CEE3BE] "></i>
              <h1 className=" text-[#CEE3BE] text-[24px] font-semibold ">
                Home
                {pathname
                  .replace(/\//g, " > ")
                  .replace(/%20/g, " ")
                  .toLowerCase()}
              </h1>
            </div>
            <div className=" h-[3px] w-full bg-[#CEE3BE] mt-[11px] " />
            <p className=" font-semibold text-[#B2B2B2] text-[24px] mt-[36px] ">
              January 25, 2024
            </p>
            <h1 className=" bg-gradient-to-r from-[#4EE1B5] via-[#BCDECD] to-[#CFE3BE] inline-block text-transparent bg-clip-text font-bold text-[48px]   ">
              {decodeURIComponent(params.reportId)}
            </h1>
            <img
              src="/images/imageReport.png"
              alt="image-report"
              className="object-cover mt-[30px] w-full h-[644px] mb-[68px] "
            />
          </div>
        </div>
      </div>
      <div className=" px-[142px] ">
        <p className=" font-medium text-[32px]  ">
          Terima kasih banyak kepada Saudara Septian Hario Seto dan Mas Yustinus
          Prastowo yang telah menanggapi tulisan saya. Baru tiga orang saja
          menyampaikan pandangannya, persoalan kehadiran smelter nikel dari
          negara China kian terang benderang. Apatah lagi kian banyak pihak yang
          mengetahui persoalan ini bersedia bersuara, insya Allah publik bakal
          bisa memahami duduk perkaranya dan proses perumusan kebijakan akan
          lebih baik lewat saling koreksi demi sebesar-besar kemakmuran rakyat
          dan berkeadilan sebagaimana diamanatkan oleh UUD 1945 dan Pancasila.{" "}
          <br /> <br />
          Terima kasih banyak kepada Saudara Septian Hario Seto dan Mas Yustinus
          Prastowo yang telah menanggapi tulisan saya. Baru tiga orang saja
          menyampaikan pandangannya, persoalan kehadiran smelter nikel dari
          negara China kian terang benderang. Apatah lagi kian banyak pihak yang
          mengetahui persoalan ini bersedia bersuara, insya Allah publik bakal
          bisa memahami duduk perkaranya dan proses perumusan kebijakan akan
          lebih baik lewat saling koreksi demi sebesar-besar kemakmuran rakyat
          dan berkeadilan sebagaimana diamanatkan oleh UUD 1945 dan Pancasila.
        </p>
        <div className=" mt-[73px] mb-[271px] ">
          <Button text="Download Report" bg="bg-[url('/icons/bgButton.png')]" />
        </div>
      </div>
      <Footer />
    </>
  );
}
