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
import { fetchDataReport, useStoreReport } from '@/lib/store';
import Loader from '@/components/loader/loader';

export default function Reports() {
  const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
      AOS.init();
      fetchDataReport().then(() => {
        setIsLoading(false); // Setelah selesai fetch data, set isLoading jadi false
      });
    }, []);
    const storeData = useStoreReport((state) => state.dataReport);
    if (isLoading) {
      return <Loader />; // Tampilkan loading jika masih fetching data
    }
  return (
    <>
      <Header storeData={storeData} />
      <NewestReports storeData={storeData} />
      {/* <OurWritings /> */}
      <ContactPage></ContactPage>
      <Footer />
    </>
  );
}
