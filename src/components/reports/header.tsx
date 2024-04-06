import React from 'react'
import Navbar from '../navbar'
import BoxDesk from '../molecules/reports/boxDesk';

export default function Header() {
  return (
    <div className=" bg-gradient-to-b from-[#031B1F] from-20% to-white to-90% mb-[324px] ">
      <div className="w-full bg-[url('/images/background.png')] ">
        <Navbar />
        <div className="px-[70px] flex justify-between  mt-[170px] ">
          <div>
            <p className="font-semibold text-[24px] text-[#B2B2B2]  ">
              January 25, 2024
            </p>
            <h1 className="bg-gradient-to-r from-[#BDDFCF]  to-[#FFFFFF] inline-block text-transparent bg-clip-text font-bold text-[90px] leading-[100%] tracking-[-4%] max-w-[905px] ">
              Dampak Pensiun Dini PLTU Batu Bara terhadap Ekonomi
            </h1>
            <h1 className="font-semibold text-[24px] max-w-[817px] text-black text-justify mt-[60px] ">
              Jakarta, 25 Januari 2024 – Hasil studi yang dilakukan Yayasan
              Indonesia CERAH dan Center of Economic and Law Studies (CELIOS)
              menemukan bahwa penutupan lebih cepat PLTU batu bara yang secara
              bersamaan digantikan dengan pembangkit listrik berbasis energi
              terbarukan lebih menguntungkan secara ekonomi. Studi pemodelan
              dengan skenario tersebut pada PLTU Cirebon-1, PLTU Pelabuhan Ratu,
              dan PLTU Suralaya, hasilkan produk domestik bruto (PDB) hingga Rp
              82,6 triliun.
            </h1>
          </div>
          <BoxDesk />
        </div>
      </div>
    </div>
  );
}
