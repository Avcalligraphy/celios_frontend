"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/footer";
import ContactPage from "@/components/home/contactPage";
import Navbar from "@/components/navbar";
import Image from "next/image";
import React, { useEffect } from "react";
import { fetchDataTraining, useStoreTraining } from "@/lib/store";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Loader from "@/components/loader/loader";

export default function Trainings() {

  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    AOS.init();
    fetchDataTraining().then(() => {
      setIsLoading(false); // Setelah selesai fetch data, set isLoading jadi false
    });
  }, []);
  const storeDataTraining = useStoreTraining((state) => state.dataTraining)
  console.log("Trainings : ", storeDataTraining)
  // const encodedImage = image ? image?.replace(/ /g, "%20") : null;
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
      <div className=" bg-[url('/images/backgroundContentFooter.png')] ">
        <div className=" bg-[url('/images/backgroundFooter1.png')] ">
          <div className=" bg-[url('/images/backgroundFooter2.png')] relative z-10 ">
            <div className="fixed top-0 left-0 right-0 z-50">
              <Navbar />
            </div>
            <div className=" clg:px-[157px] cmd:px-[100px] csm:px-[60px] px-[30px] pb-[275px] ">
              <div className="csm:pt-[250px] pt-[200px]">
                <Image
                  src="/icons/bgTextSocial.png"
                  width={174.48}
                  height={20.36}
                  alt="bg-text-social"
                />
                <h1 className="text-white cmd:text-[54px] csm:text-[44px] text-[34px] font-bold tracking-[-2%] leading-[100%] cmd:mt-[-60px] csm:mt-[-50px] mt-[-40px]   ">
                  Trainings
                </h1>
              </div>
              {storeDataTraining.map((item) => (
                <div key={item.id}>
                  <div data-aos="fade-right">
                    <p className=" font-semibold text-[#B2B2B2] cmd:text-[24px] csm:text-[20px] text-[16px] mt-[61px] ">
                      {formatDate(item.attributes.publishedAt)}
                    </p>
                    <h1 className=" bg-gradient-to-r from-[#4EE1B5] via-[#BCDECD] to-[#CFE3BE] inline-block text-transparent bg-clip-text font-bold cmd:text-[48px] csm:text-[40px] text-[34px] mt-[15px]   ">
                      {item.attributes.title}
                    </h1>
                    <div className=" font-medium cmd:text-[32px] csm:text-[28px] text-[22px] text-white mt-[30px]">
                      <BlocksRenderer
                        content={item.attributes.description || []}
                      />
                    </div>
                  </div>
                  <div
                    data-aos="flip-left"
                    className="clg:flex block  gap-[72px]  "
                  >
                    {item.attributes.image.data.map((image: any) => (
                      <div
                        key={image.id}
                        className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] mt-[46px] clg:w-[658px] w-full"
                      >
                        <img
                          className="cxl:h-[367px] csm:h-[267px] h-[167px] w-full object-cover rounded-[32px]"
                          src={image.attributes.url}
                          alt={image.attributes.name}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
