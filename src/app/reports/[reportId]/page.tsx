"use client";

import Button from "@/components/Button.tsx";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { fetchDataReportId, useStoreReportId } from "@/lib/store";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";
import Loader from "@/components/loader/loader";

export default function ReportBlog({
  params,
}: {
  params: { reportId: string };
}) {
    const pathname = usePathname();
    const [isLoading, setIsLoading] = React.useState(true);
    const searchParams = useSearchParams();
    const link = searchParams.get("link");
    useEffect(() => {
      fetchDataReportId(link).then(() => {
        setIsLoading(false); // Setelah selesai fetch data, set isLoading jadi false
      });
    }, [link])

    const storeReportId = useStoreReportId((state) => state.dataReportId)
    const formatDate = (dateString: string): string => {
      const options: Intl.DateTimeFormatOptions = {
        day: "2-digit",
        month: "long",
        year: "numeric",
      };
      return new Date(dateString).toLocaleDateString("id-ID", options);
    };

    if (isLoading) {
      return <Loader />; // Tampilkan loading jika masih fetching data
    }
    
  return (
    <>
      <div className=" bg-[#031B1F] min-h-screen  ">
        <div className="w-full bg-[url('/images/background.png')] pb-[271px] ">
          <Navbar />
          <div className=" clg:px-[142px] csm:px-[70px] px-[35px] mt-[146px] ">
            <div className="flex gap-[15px] ">
              <i className="bx bxs-home csm:text-[30px] text-[25px] text-[#CEE3BE] "></i>
              <h1 className=" text-[#CEE3BE] csm:text-[24px] text-[20px] font-semibold ">
                Home
                {pathname
                  .replace(/\//g, " > ")
                  .replace(/%3F/g, "?")
                  .replace(/%20/g, " ")
                  .toLowerCase()}
              </h1>
            </div>
            <div className=" h-[3px] w-full bg-[#CEE3BE] mt-[11px] " />
            <p className=" font-semibold text-[#B2B2B2] csm:text-[24px] text-[20px] mt-[36px] ">
              {storeReportId
                ? formatDate(storeReportId?.attributes.publishedAt)
                : null}
            </p>
            <h1 className=" bg-gradient-to-r from-[#4EE1B5] via-[#BCDECD] to-[#CFE3BE] inline-block text-transparent bg-clip-text font-bold csm:text-[48px] text-[40px] mb-8   ">
              {storeReportId?.attributes.title}
            </h1>
            <div className="prose-xl cxxl:px-[150px] clg:px-[100px] cmd:px-[80px] px-[10px] font-medium csm:text-[22px] text-[18px] text-white ">
              {storeReportId && (
                <BlocksRenderer
                  content={storeReportId.attributes.description || []}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="px-[142px] ">
        <div className=" mt-[73px] mb-[271px] ">
          <Button text="Download Report" bg="bg-[url('/icons/bgButton.png')]" />
        </div>
      </div> */}
      <Footer />
    </>
  );
}
