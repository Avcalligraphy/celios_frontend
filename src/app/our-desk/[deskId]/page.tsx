'use client'
import Footer from '@/components/footer';
import Loader from '@/components/loader/loader';
import BoxReports from '@/components/molecules/reports/boxReports';
import Navbar from '@/components/navbar';
import listDesk from '@/components/our-desk/lisDesk';
import { fetchDataReport, useStoreReport } from '@/lib/store';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import React, { Suspense, useEffect, useState } from 'react'

export default function CeliosDesk({params}: {
    params: {deskId: string}
}) {
  console.log(
    "Desk ID",
    params.deskId
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  );
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const name = searchParams.get("name");
   const encodedImage = (image: string) => {
     image ? image?.replace(/ /g, "%20") : null;
   };
  useEffect(() => {
    fetchDataReport().then(() => {
      setIsLoading(false); // Setelah selesai fetch data, set isLoading jadi false
    });
  }, [])
  const getImageName = (name: string) => {
    switch (name) {
      case "macro-economy":
        return "/images/Macro-economy.png";
      case "just-energy-transition":
        return "/images/Just Energy Transition.png";
      case "fiscal-justice":
        return "/images/Fiscal Justice.png";
      case "sustainable-finance":
        return "/images/Sustainable Finance.png";
      case "mining-advocacy":
        return "/images/Mining Advocacy.png";
      case "digital-economy":
        return "/images/Digital Economy.png";
      case "strategic-litigation":
        return "/images/Strategic Litigation.png";
      default:
        return "/images/Macro-economy.png";
    }
  };
  const storeDataReport = useStoreReport((state) => state.dataReport)
   const filteredData = storeDataReport.filter((item) =>
     item.attributes.our_desks.data.some(
       (desk: any) =>
         desk.attributes.title ===
         params.deskId
           .split("-")
           .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
           .join(" ")
     )
   );
   if (isLoading) {
     return <Loader />; // Tampilkan loading jika masih fetching data
   }
  //  console.log(params.deskId)
  
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${encodeURI(getImageName(params.deskId))})`,
          backgroundSize: "cover",
        }}
        className=" w-full csm:min-h-[842px] min-h-[602px] "
      >
        <div className="bg-[url('/images/background.png')] bg-cover w-full min-h-[842px] relative z-10 ">
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>
          <div className="cxxl:flex block justify-between cmd:pt-[283px]   clg:px-[162px] csm:px-[81px] items-center  px-[20px] pt-[200px] ">
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
              <h1 className="font-bold navMobile:text-[67px] cxl:text-[60px] cmd:text-[57px] csm:text-[40px] text-[37px] cmd:mt-[-70px] mt-[-46px] leading-[100%]  tracking-[-4%] text-white max-w-[300px]   ">
                {params.deskId
                  .split("-")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </h1>
            </div>

            <Suspense fallback={<div>Loading...</div>}>
              <h1 className=" navMobile:text-[24px]  csm:text-[20px] text-[16px] tracking-[2%] font-semibold text-white max-w-[870px] cxxl:mt-0 mt-5 ">
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
            Newest Reports
          </h1>
        </div>
        <div className="flex justify-center items-center mt-[30px] mb-[210px] ">
          <div className="grid clxl:grid-cols-2 grid-cols-1 gap-[53px]">
            {filteredData.map((item) => {
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
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
