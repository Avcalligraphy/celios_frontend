'use client'
import Footer from '@/components/footer'
import Header from '@/components/our-desk/header'
import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function OurDesk() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <div className="bg-gradient-to-t from-[#041C20] to-[#ffff] w-full h-[552px]">
        <div className=" bg-[url('/images/background.png')] w-full h-[552px] " />
      </div>
      <Footer />
    </>
  );
}
