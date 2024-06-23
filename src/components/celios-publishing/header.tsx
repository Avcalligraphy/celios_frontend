import React from "react";
import Navbar from "../navbar";
import BoxPublishing from "../molecules/celios-publixhing/boxPublishing";
import { useStorePubllish } from "@/lib/store";


export default function Header() {
  const storeDataPublish = useStorePubllish((state) => state.dataPublish);
  return (
    <div className=" bg-gradient-to-b from-[#031B1F] from-20% to-white to-90% mb-[324px] ">
      <div className="w-full bg-[url('/images/background.png')] relative z-10  ">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        <div className="cmd:px-[96px] csm:-[66px] px-[26px] flex justify-center ">
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className=" flex flex-col gap-[116px] pt-[250px] "
          >
            {storeDataPublish.map((item) => (
              <BoxPublishing key={item.id} title={item.attributes.title} penulis={item.attributes.penulis} penerbit={item.attributes.penerbit} isbn={item.attributes.isbn} cover={item.attributes.cover} halaman={item.attributes.halaman} berat={item.attributes.berat} ukuran={item.attributes.ukuran} linkTokped={item.attributes.linkTokped} linkShoppe={item.attributes.linkShoppe} image={item.attributes.image.data.attributes.url} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
