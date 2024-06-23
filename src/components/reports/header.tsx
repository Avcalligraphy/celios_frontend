import React from 'react'
import Navbar from '../navbar'
import BoxDesk from '../molecules/reports/boxDesk';
import { useStoreReport } from '@/lib/store';

export default function Header({storeData}: {storeData:any}) {
  
  const sortedData = [...storeData].sort(
    (a, b) =>
      new Date(b.attributes.createdAt).getTime() -
      new Date(a.attributes.createdAt).getTime()
  );
  const latestThree = sortedData.slice(0, 1);
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "long",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };
  const truncateText = (text: string, limit: number) => {
    const words = text.split(" ");
    if (words.length > limit) {
      return words.slice(0, limit).join(" ") + " ...";
    }
    return text;
  };
  return (
    <div className=" bg-gradient-to-b from-[#031B1F] from-20% to-white to-90% csm:mb-[324px] mb-[160px] ">
      <div className="w-full bg-[url('/images/background.png')] relative z-10 ">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        {latestThree.map((item) => (
          <div
            key={item.id}
            className="csm:px-[70px] px-[25px] clxl:flex block justify-between gap-[50px]  csm:pt-[220px] pt-[180px] "
          >
            <div
              data-aos="fade-down-right"
              className=" clxl:mb-0 csm:mb-[50px] mb-[30px] "
            >
              <div>
                <p className="font-semibold csm:text-[24px] text-[18px] text-[#B2B2B2]  ">
                  {formatDate(item.attributes.publishedAt)}
                </p>
                <h1 className="bg-gradient-to-r from-[#BDDFCF]  to-[#FFFFFF] inline-block text-transparent bg-clip-text font-bold csm:text-[90px] text-[40px] leading-[100%] tracking-[-4%] clxl:max-w-[905px] max-w-fit ">
                  {truncateText(item.attributes.title, 6)}
                </h1>
              </div>
              <h1 className="font-semibold csm:text-[24px] text-[18px] clxl:max-w-[817px] max-w-fit text-black text-justify csm:mt-[60px] mt-[30px] ">
                Jakarta, 25 Januari 2024 – Hasil studi yang dilakukan Yayasan
                Indonesia CERAH dan Center of Economic and Law Studies (CELIOS)
                menemukan bahwa penutupan lebih cepat PLTU batu bara yang secara
                bersamaan digantikan dengan pembangkit listrik berbasis energi
                terbarukan lebih menguntungkan secara ekonomi. Studi pemodelan
                dengan skenario tersebut pada PLTU Cirebon-1, PLTU Pelabuhan
                Ratu, dan PLTU Suralaya, hasilkan produk domestik bruto (PDB)
                hingga Rp 82,6 triliun.
              </h1>
            </div>
            <BoxDesk
              image={item.attributes.file.data.attributes.url}
              title={item.attributes.title}
              link={item.id}
              document={item.attributes.document.data.attributes.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
