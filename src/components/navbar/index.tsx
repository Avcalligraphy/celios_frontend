"use client";

import Image from "next/image";
import React, { useState } from "react";
import MenuListUser from "./menuListUser";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="navMobile:flex hidden justify-between items-center mx-[76px] pt-[38px]">
        <Link href="/">
          <Image src="/icons/logo.png" width={75} height={116} alt="logo" />
        </Link>
        <div className="grid grid-cols-7 gap-[24px]">
          {MenuListUser.map((item, index) => (
            <div
              key={index}
              className={
                item.link === pathname
                  ? `bg-[url('/icons/bgButtonNavbar.png')] px-[20px] py-[12px] rounded-[8px]  flex justify-center items-center`
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
      <div
        className={`w-full block navMobile:hidden text-gray-700 dark-mode:text-gray-200 dark-mode:bg-gray-800 ${
          open ? "bg-[url('/images/imageNavbar.png')]" : "bg-transparent"
        } `}
      >
        <div className="flex flex-col max-w-screen-xl px-4 pt-[38px] mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8 2xl:px-[76px] ">
          <div className="p-4 flex flex-row items-center justify-between">
            <Link href="/">
              <img src="/icons/logo.png" alt="logo" className="cmd:w-[75px] h-auto w-[55px] " />
            </Link>
            <button
              className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
              onClick={() => setOpen(!open)}
            >
              <svg
                fill="white"
                viewBox="0 0 20 20"
                className="w-[40px] h-[40px] "
              >
                <path
                  style={{ display: open ? "none" : "block" }}
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
                <path
                  style={{ display: open ? "block" : "none" }}
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <nav
            className={`flex-col flex-grow pb-4 md:pb-0  ${
              open ? "flex" : "hidden"
            } md:flex md:justify-end md:flex-row`}
          >
            {MenuListUser.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className={`px-4 py-2 mt-2 text-sm font-semibold  ${
                  item.link === pathname
                    ? "bg-gray-200 hover:text-gray-900 focus:text-gray-900 text-gray-900 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 "
                    : "bg-transparent text-white "
                } rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600  md:mt-0  hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
