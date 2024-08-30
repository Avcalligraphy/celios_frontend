"use client";

import Button from "@/components/Button.tsx";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {
  fetchDataFeatureReport,
  fetchDataReportId,
  useStoreFeatureReport,
  useStoreReportId,
} from "@/lib/store";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
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
  const id = searchParams.get("id");

  // Store data
  const storeDataFeatureReport = useStoreFeatureReport(
    (state) => state.dataFeatureReport
  );
  const storeReportId = useStoreReportId((state) => state.dataReportId);

  // Fetch data based on the ID
  useEffect(() => {
    if (id === "feature") {
      fetchDataFeatureReport().then(() => {
        setIsLoading(false); // Set isLoading to false after fetching feature report data
      });
    } else {
      fetchDataReportId(link).then(() => {
        setIsLoading(false); // Set isLoading to false after fetching report data
      });
    }
  }, [id, link]);

  // Function to format date
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "long",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  // Show loader while data is being fetched
  if (isLoading) {
    return <Loader />;
  }

  // Determine which data to display
  const dataToDisplay =
    id === "feature" ? storeDataFeatureReport : storeReportId;
  console.log("report", storeReportId);

  return (
    <>
      {id === "feature" ? (
        <div className=" bg-[#031B1F] min-h-screen  ">
          <div className="w-full bg-[url('/images/background.png')]  pb-[271px] relative z-10  ">
            <div className="fixed top-0 left-0 right-0 z-50">
              <Navbar />
            </div>
            <div className=" clg:px-[142px] csm:px-[70px] px-[35px] pt-[206px] ">
              <div className="flex gap-[15px] ">
                <i className="bx bxs-home csm:text-[30px] text-[25px] text-[#CEE3BE] "></i>
                <h1 className=" text-[#CEE3BE] csm:text-[20px] text-[16px] font-semibold ">
                  Home
                  {pathname
                    .replace(/\//g, " > ")
                    .replace(/%3F/g, "?")
                    .replace(/%20/g, " ")
                    .toLowerCase()}
                </h1>
              </div>
              <div className=" h-[3px] w-full bg-[#CEE3BE] mt-[11px] " />
              {storeDataFeatureReport.map((item) => (
                <>
                  <p className=" font-semibold text-[#B2B2B2] csm:text-[18px] text-[16px] mt-[36px] ">
                    {item.attributes.date || null}
                  </p>
                  <h1 className=" bg-gradient-to-r from-[#4EE1B5] via-[#BCDECD] to-[#CFE3BE] inline-block text-transparent bg-clip-text font-bold csm:text-[38px] text-[30px] mb-8   ">
                    {item.attributes.title}
                  </h1>
                  <div className="prose-xl cxxl:px-[150px] clg:px-[100px] cmd:px-[80px] px-[10px] font-medium csm:text-[20px] text-[16px] text-white ">
                    <BlocksRenderer
                      content={item.attributes.description || []}
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className=" bg-[#031B1F] min-h-screen  ">
          <div className="w-full bg-[url('/images/background.png')] bg-cover pb-[271px] relative z-10  ">
            <div className="fixed top-0 left-0 right-0 z-50">
              <Navbar />
            </div>
            <div className=" clg:px-[142px] csm:px-[70px] px-[35px] pt-[206px] ">
              <div className="flex gap-[15px] ">
                <i className="bx bxs-home csm:text-[30px] text-[25px] text-[#CEE3BE] "></i>
                <h1 className=" text-[#CEE3BE] csm:text-[20px] text-[16px] font-semibold ">
                  Home
                  {pathname
                    .replace(/\//g, " > ")
                    .replace(/%3F/g, "?")
                    .replace(/%20/g, " ")
                    .toLowerCase()}
                </h1>
              </div>
              <div className=" h-[3px] w-full bg-[#CEE3BE] mt-[11px] " />
              <p className=" font-semibold text-[#B2B2B2] csm:text-[18px] text-[16px] mt-[36px] ">
                {storeReportId ? storeReportId?.attributes.date : null}
              </p>
              <h1 className=" bg-gradient-to-r from-[#4EE1B5] via-[#BCDECD] to-[#CFE3BE] inline-block text-transparent bg-clip-text font-bold csm:text-[38px] text-[30px] mb-8   ">
                {storeReportId?.attributes.title}
              </h1>
              <div className="prose-xl cxxl:px-[150px] clg:px-[100px] cmd:px-[80px] px-[10px] font-medium csm:text-[20px] text-[16px] text-white ">
                {storeReportId && (
                  <BlocksRenderer
                    content={storeReportId.attributes.description || []}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
