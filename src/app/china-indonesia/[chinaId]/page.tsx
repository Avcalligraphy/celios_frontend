"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {
  fetchDataChinaArticle,
  fetchDataChinaBriefId,
  fetchDataChinaMedia,
  useStoreChinaArticle,
  useStoreChinaBriefId,
  useStoreChinaMedia,
} from "@/lib/store";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Loader from "@/components/loader/loader";

export default function ChinaItem({ params }: { params: { chinaId: string } }) {
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchDataChinaArticle();
    fetchDataChinaMedia();
    fetchDataChinaBriefId(params.chinaId).then(() => {
      setIsLoading(false); // Setelah selesai fetch data, set isLoading jadi false
    });
  }, [params.chinaId]); // Tambahkan endpoint sebagai dependency

  const storeDataArticle = useStoreChinaArticle(
    (state) => state.dataChinaArticle
  );
  const storeDataMedia = useStoreChinaMedia((state) => state.dataChinaMedia);
  const storeDataBrief = useStoreChinaBriefId(
    (state) => state.dataChinaBriefId
  );

  const filteredArticles = storeDataArticle.filter((item) =>
    item.attributes.title.toLowerCase().includes(query.toLowerCase())
  );

  const filteredMedia = storeDataMedia.filter((item) =>
    item.attributes.title.toLowerCase().includes(query.toLowerCase())
  );

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
                {params.chinaId === "articles" ||
                params.chinaId === "medias" ? (
                  <div className="flex justify-end flex-row gap-[45px] mt-9 items-center">
                    <div className="container-inputContainer">
                      <div className="container-input">
                        <div className="search-box">
                          <button className="btn-search">
                            <i className="bx bx-search"></i>
                          </button>
                          <input
                            type="text"
                            className="input-search"
                            placeholder="Type to Search..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
              <div className="block mt-14">
                {params.chinaId === "articles"
                  ? filteredArticles.map((item) => (
                      <ul
                        className="list-disc text-[20px] font-medium text-[#BDDFCF]"
                        key={item.id}
                      >
                        <li>
                          <a
                            target="_blank"
                            className=" hover:text-[#7CB937]"
                            href={item.attributes.link}
                          >
                            {item.attributes.title}
                          </a>
                        </li>
                      </ul>
                    ))
                  : params.chinaId === "medias"
                  ? filteredMedia.map((item) => (
                      <ul
                        className="list-disc text-[20px] font-medium text-[#BDDFCF]"
                        key={item.id}
                      >
                        <li>
                          <a
                            target="_blank"
                            className=" hover:text-[#7CB937]"
                            href={item.attributes.link}
                          >
                            {item.attributes.title}
                          </a>
                        </li>
                      </ul>
                    ))
                  : storeDataBrief && (
                      <div className="prose-xl cxxl:px-[150px] clg:px-[100px] cmd:px-[80px] px-[10px] list-disc cmd:text-[20px] text-[16px] font-medium csm:text-[22px]  text-white mt-[30px]">
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
