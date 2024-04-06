import React from "react";
import Navbar from "../navbar";
import BoxPublishing from "../molecules/celios-publixhing/boxPublishing";

export default function Header() {
  return (
    <div className=" bg-gradient-to-b from-[#031B1F] from-20% to-white to-90% mb-[324px] ">
      <div className="w-full bg-[url('/images/background.png')] ">
        <Navbar />
        <div className="px-[96px] flex justify-center ">
          <div className=" flex flex-col gap-[116px] mt-[196px] ">
            <BoxPublishing />
            <BoxPublishing />
            <BoxPublishing />
            <BoxPublishing />
            <BoxPublishing />
          </div>
        </div>
      </div>
    </div>
  );
}
