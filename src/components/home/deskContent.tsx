import React from 'react'
import BoxContent from '../molecules/boxContent'
import { useStore } from '@/lib/store';

export default function DeskContent() {
  const storeData = useStore((state) => state.data);
  const sortedData = [...storeData].sort(
    (a, b) =>
      new Date(b.attributes.createdAt).getTime() -
      new Date(a.attributes.createdAt).getTime()
  );
  const latestThree = sortedData.slice(0, 3);
  const truncateText = (text: string, wordLimit: number): string => {
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
        className="grid clxl:grid-cols-3 cxl:grid-cols-2 grid-cols-1 mt-[-90px] mb-[362px] gap-[36px] "
      >
        {latestThree.map((item) => (
          <BoxContent
            key={item.id}
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
        ))}
        {/* <BoxContent
          title="China-Indonesia Desk "
          desk="Menyediakan laporan berkualitas disertai dengan analisis mendalam dan data yang kredibel bagi Pemerintah, Pelaku usaha dan publik"
        />
        <BoxContent
          title="China-Indonesia Desk "
          desk="Menyediakan laporan berkualitas disertai dengan analisis mendalam dan data yang kredibel bagi Pemerintah, Pelaku usaha dan publik"
        /> */}
      </div>
    </div>
  );
}
