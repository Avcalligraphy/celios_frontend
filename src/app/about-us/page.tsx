'use client'
import Header from '@/components/about-us/header'
import OurTeam from '@/components/about-us/our-team'
import Footer from '@/components/footer'
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export default function AboutUs() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>  
      <Header />
      <OurTeam />
      <Footer />
    </>
  )
}
