'use client'
import Footer from '@/components/footer'
import Header from '@/components/our-desk/header'
import React, { useState } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { fetchData } from '@/lib/store';
import Loader from '@/components/loader/loader';
export default function OurDesk() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    AOS.init();
    fetchData().then(() => {
      setIsLoading(false); // Setelah selesai fetch data, set isLoading jadi false
    });
  }, []);
  if (isLoading) {
    return <Loader />; // Tampilkan loading jika masih fetching data
  }
  return (
    <>
      <Header />
      <div className="bg-gradient-to-t from-[#041C20] to-[#ffff] w-full h-[100px]">
        <div className=" bg-[url('/images/background.png')] w-full h-[100px] " />
      </div>
      <Footer />
    </>
  );
}
