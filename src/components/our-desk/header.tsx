import React from "react";
import Navbar from "../navbar";
import BoxDesk from "../molecules/our-desk/boxDesk";
import Link from "next/link";
import { useStore } from "@/lib/store";

export default function Header() {
  const storeData = useStore((state) => state.data);

  // Urutan yang diinginkan
  const order = [
    "Macro-economy",
    "Just Energy Transition",
    "Fiscal Justice",
    "Socio Bioeconomy",
    "Sustainable Finance",
    "Mining Advocacy",
    "China-Indonesia Relations",
    // "Mena-Indonesia Relations",
    "Digital Economy",
    "Strategic Litigation",
  ];

  // Fungsi pembanding untuk mengurutkan
  const compare = (a:any, b:any) => {
    return (
      order.indexOf(a.attributes.title) - order.indexOf(b.attributes.title)
    );
  };

  // Mengurutkan storeData
  const sortedData = [...storeData].sort(compare);

  return (
    <div className="bg-gradient-to-b from-[#031B1F] from-20% to-white to-90% mb-[324px]">
      <div className="w-full bg-[url('/images/background.png')] relative z-10">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        <div
          data-aos="fade-up-right"
          className="flex flex-col gap-[88px] navMobile:px-[163px] cxl:px-[100px] px-[25px] csm:pt-[197px] pt-[150px]"
        >
          {sortedData.map((item) => {
            // console.log(item.attributes.title);
            return (
              <BoxDesk
                title={item.attributes.title}
                link={
                  item.attributes.title === "China-Indonesia Relations"
                    ? "/china-indonesia"
                    : item.attributes.title === "Mena-Indonesia Relations"
                    ? "/mena-indonesia"
                    : `our-desk/${item.attributes.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`
                }
                description={item.attributes.description}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
