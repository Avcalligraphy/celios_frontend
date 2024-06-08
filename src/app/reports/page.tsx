'use client'
import Footer from '@/components/footer';
import ContactPage from '@/components/home/contactPage';
import Header from '@/components/reports/header'
import NewestReports from '@/components/reports/newestReports';
import OurWritings from '@/components/reports/ourWritings';
import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Reports() {
    useEffect(() => {
      AOS.init();
    }, []);
  return (
    <>
      <Header />
      <NewestReports />
      <OurWritings />
      <ContactPage></ContactPage>
      <Footer />
    </>
  );
}
