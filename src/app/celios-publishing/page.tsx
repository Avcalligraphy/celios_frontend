"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "@/components/celios-publishing/header";
import Footer from "@/components/footer";
import React from "react";

export default function CeliosPublishing() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Header />
      <Footer />
    </>
  );
}
