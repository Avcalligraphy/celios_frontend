"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {
  fetchDataChinaArticle,
  fetchDataChinaBrief,
  fetchDataChinaBriefId,
  fetchDataChinaMedia,
  useStoreChinaArticle,
  useStoreChinaBrief,
  useStoreChinaBriefId,
  useStoreChinaMedia,
} from "@/lib/store";
import Image from "next/image";
import React from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Loader from "@/components/loader/loader";

export default function ChinaItem({ params }: { params: { chinaId: string } }) {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetchDataChinaArticle();
    fetchDataChinaMedia();
    fetchDataChinaBriefId(params.chinaId).then(() => {
      setIsLoading(false); // Setelah selesai fetch data, set isLoading jadi false
    });;
  }, [params.chinaId]); // Tambahkan endpoint sebagai dependency

  const storeDataArticle = useStoreChinaArticle(
    (state) => state.dataChinaArticle
  );
  const storeDataMedia = useStoreChinaMedia((state) => state.dataChinaMedia);
  const storeDataBrief = useStoreChinaBriefId((state) => state.dataChinaBriefId);
  if (isLoading) {
    return <Loader />; // Tampilkan loading jika masih fetching data
  }

  return (
    <>
      <div className="bg-[url('/images/backgroundContentFooter.png')]">
        <div className="bg-[url('/images/backgroundFooter1.png')]">
          <div className="bg-[url('/images/backgroundFooter2.png')] relative z-10">
            <div className="fixed top-0 left-0 right-0 z-50">
              <Navbar />
            </div>
            <div className="clg:px-[157px] cmd:px-[100px] csm:px-[60px] px-[30px] pb-[275px]">
              <div className="csm:pt-[250px] pt-[200px]">
                <Image
                  src="/icons/bgTextSocial.png"
                  width={174.48}
                  height={20.36}
                  alt="bg-text-social"
                />
                <h1 className="text-white cmd:text-[54px] csm:text-[44px] text-[34px] font-bold tracking-[-2%] leading-[100%] cmd:mt-[-60px] csm:mt-[-50px] mt-[-40px]">
                  {params.chinaId === "articles"
                    ? "Articles by China-Indonesia Studies"
                    : params.chinaId === "medias"
                    ? "Media Commentaries by China-Indonesia Studies at CELIOS"
                    : `China-Indonesia Monthly Brief: ${storeDataBrief?.attributes.title}`}
                </h1>
              </div>
              <div className="block mt-14">
                {params.chinaId === "articles"
                  ? storeDataArticle.map((item) => (
                      <ul
                        className="list-disc text-[20px] font-medium text-[#BDDFCF]"
                        key={item.id}
                      >
                        <li>
                          <a
                            target="_blank"
                            className="underline"
                            href={item.attributes.link}
                          >
                            {item.attributes.title}
                          </a>
                        </li>
                      </ul>
                    ))
                  : params.chinaId === "medias"
                  ? storeDataMedia.map((item) => (
                      <ul
                        className="list-disc text-[20px] font-medium text-[#BDDFCF]"
                        key={item.id}
                      >
                        <li>
                          <a
                            target="_blank"
                            className="underline"
                            href={item.attributes.link}
                          >
                            {item.attributes.title}
                          </a>
                        </li>
                      </ul>
                    ))
                  : storeDataBrief && (
                      <div className="prose-xl font-medium cmd:text-[32px] csm:text-[28px] text-[22px] text-white mt-[30px]">
                        <BlocksRenderer
                          content={storeDataBrief.attributes.description || []}
                        />
                      </div>
                    )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
