"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "@/components/celios-publishing/header";
import Footer from "@/components/footer";
import React from "react";
import { fetchDataPublish } from "@/lib/store";
import Loader from "@/components/loader/loader";

export default function CeliosPublishing() {
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    AOS.init();
    fetchDataPublish().then(() => {
      setIsLoading(false); // Setelah selesai fetch data, set isLoading jadi false
    });
  }, []);

  if (isLoading) {
    return <Loader />; // Tampilkan loading jika masih fetching data
  }
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
