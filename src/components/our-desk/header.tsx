import React from 'react'
import Navbar from '../navbar';
import BoxDesk from '../molecules/our-desk/boxDesk';
import listDesk from './lisDesk';
import Link from 'next/link';

export default function Header() {
  return (
    <div className=" bg-gradient-to-b from-[#031B1F] from-20% to-white to-90% mb-[324px] ">
      <div className="w-full bg-[url('/images/background.png')] ">
        <Navbar />
        <div className="flex flex-col gap-[88px] csm:px-[93px] px-[25px]  csm:mt-[197px] mt-[98px] ">
          {listDesk.map((item, index) => ( 
              <BoxDesk title={item.name} link={`our-desk/${item.deskId}`} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
