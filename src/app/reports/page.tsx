import Footer from '@/components/footer';
import ContactPage from '@/components/home/contactPage';
import Header from '@/components/reports/header'
import NewestReports from '@/components/reports/newestReports';
import OurWritings from '@/components/reports/ourWritings';
import React from 'react'

export default function Reports() {
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
