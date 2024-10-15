"use client";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import {
  fetchDataMenaArticle,
  fetchDataChinaBriefId,
  fetchDataMenaMedia,
  useStoreMenaArticle,
  useStoreChinaBriefId,
  useStoreMenaMedia,
} from "@/lib/store";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Loader from "@/components/loader/loader";

interface MenaIdProps {
  params: any;
}
export default function MenaId({ params }: MenaIdProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchDataMenaArticle();
    fetchDataMenaMedia();
    fetchDataChinaBriefId(params.menaId).then(() => {
      setIsLoading(false); // Setelah selesai fetch data, set isLoading jadi false
    });
  }, [params.menaId]); // Tambahkan endpoint sebagai dependency

  const storeDataArticle = useStoreMenaArticle(
    (state) => state.dataMenaArticle
  );
  const storeDataMedia = useStoreMenaMedia((state) => state.dataMenaMedia);
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
                  {params.menaId === "articles"
                    ? "Articles by Mena Indonesia Relations"
                    : "Media Commentaries by Mena Indonesia Relations at CELIOS"
}
                </h1>
                {params.menaId === "articles" ||
                params.menaId === "medias" ? (
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
                {params.menaId === "articles"
                  ? filteredArticles.map((item) => (
                      <ul
                        className="list-disc text-[20px] font-medium text-[#BDDFCF]"
                        key={item.id}
                      >
                        <li>
                          <a
                            target="_blank"
                            className=" hover:text-[#7CB937] leading-9"
                            href={item.attributes.link}
                          >
                            {item.attributes.title}
                          </a>
                        </li>
                      </ul>
                    ))
                  : params.menaId === "medias"
                  ? filteredMedia.map((item) => (
                      <ul
                        className="list-disc text-[20px] font-medium text-[#BDDFCF]"
                        key={item.id}
                      >
                        <li>
                          <a
                            target="_blank"
                            className=" hover:text-[#7CB937] leading-9"
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
