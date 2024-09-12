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
import { fetchDataFeatureReport, fetchDataReport, useStoreFeatureReport, useStoreReport } from '@/lib/store';
import Loader from '@/components/loader/loader';
import { Metadata } from "next";

export default function Reports() {
  const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
      AOS.init();
      fetchDataFeatureReport()
      fetchDataReport().then(() => {
        setIsLoading(false); // Setelah selesai fetch data, set isLoading jadi false
      });
    }, []);
    const storeData = useStoreReport((state) => state.dataReport);
    const storeDataFeatureReport = useStoreFeatureReport((state) => state.dataFeatureReport);
    if (isLoading) {
      return <Loader />; // Tampilkan loading jika masih fetching data
    }


  return (
    <>
      <Header storeData={storeDataFeatureReport} />
      <NewestReports storeData={storeData} />
      {/* <OurWritings /> */}
      <ContactPage></ContactPage>
      <Footer />
    </>
  );
}
