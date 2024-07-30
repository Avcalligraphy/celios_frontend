'use client'
import Header from '@/components/about-us/header'
import OurTeam from '@/components/about-us/our-team'
import Footer from '@/components/footer'
import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { fetchDataAbout, fetchDataMission, fetchDataOurTeam, fetchDataVision } from '@/lib/store'
import Loader from '@/components/loader/loader'

export default function AboutUs() {
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    AOS.init();
    fetchDataAbout()
    fetchDataMission()
    fetchDataVision()
    fetchDataOurTeam().then(() => {
      setIsLoading(false); // Setelah selesai fetch data, set isLoading jadi false
    });
  }, []);
  if (isLoading) {
    return <Loader />; // Tampilkan loading jika masih fetching data
  }
  return (
    <>  
      <Header />
      <OurTeam />
      <Footer />
    </>
  )
}
