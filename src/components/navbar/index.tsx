"use client";

import Image from "next/image";
import React from "react";
import MenuListUser from "./menuListUser";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="flex justify-between items-center mx-[76px] pt-[38px]">
      <Link href='/' >
        <Image src="/icons/logo.png" width={75} height={116} alt="logo" />
      </Link>
      <div className="grid grid-cols-7 gap-[24px]">
        {MenuListUser.map((item, index) => (
          <div
            key={index}
            className={
              item.link === pathname
                ? `bg-[url('/icons/bgButtonNavbar.png')] px-[48px] py-[8px] rounded-[8px]  flex justify-center items-center`
                : "flex justify-center items-center"
            }
          >
            <Link
              href={item.link}
              className="font-medium text-white hover:text-[#99C948] text-[18px]"
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
