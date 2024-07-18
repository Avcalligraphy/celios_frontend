import React from "react";
import BoxContent from "../molecules/boxContent";
import { useStore } from "@/lib/store";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

export default function DeskContent() {
  const storeData = useStore((state) => state.data);
  // Urutan yang diinginkan
  const order = [
    "Macro-economy",
    "Just Energy Transition",
    "Fiscal Justice",
    "Sustainable Finance",
    "Mining Advocacy",
    "China-Indonesia Relations",
    "Digital Economy",
    "Strategic Litigation",
  ];
  const compare = (a:any, b:any) => {
    return (
      order.indexOf(a.attributes.title) - order.indexOf(b.attributes.title)
    );
  };

  // Mengurutkan storeData
  const sortedData = [...storeData].sort(compare);

  const truncateText = (text:any, wordLimit:any) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="flex justify-center">
      <div
        data-aos="fade-up-right"
        className="mt-[-90px] mb-[362px] gap-[36px] w-full cxxl:px-[180px] cxl:px-[120px] clg:px-[80px] px-[20px]  "
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={90}
          pagination={false}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            894: {
              slidesPerView: 2,
              spaceBetween: 320,
            },
            1646: {
              slidesPerView: 3,
              spaceBetween: 320,
            },
          }}
        >
          {sortedData.map((item) => (
            <SwiperSlide key={item.id}>
              <BoxContent
                title={item.attributes.title}
                desk={truncateText(item.attributes.description, 24)}
                link={
                  item.attributes.title === "China-Indonesia Relations"
                    ? "/china-indonesia"
                    : `our-desk/${item.attributes.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
