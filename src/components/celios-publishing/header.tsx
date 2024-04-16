import React from "react";
import Navbar from "../navbar";
import BoxPublishing from "../molecules/celios-publixhing/boxPublishing";

export default function Header() {
  return (
    <div className=" bg-gradient-to-b from-[#031B1F] from-20% to-white to-90% mb-[324px] ">
      <div className="w-full bg-[url('/images/background.png')] relative z-10  ">
        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        <div className="cmd:px-[96px] csm:-[66px] px-[26px] flex justify-center ">
          <div className=" flex flex-col gap-[116px] pt-[250px] ">
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
