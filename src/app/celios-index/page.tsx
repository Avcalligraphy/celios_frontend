import Header from '@/components/celios-index/header'
import Footer from '@/components/footer'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Index Energy Transitions",
};



export default function CeliosIndex() {
  return (
    <>
      <Header />
      <Footer />
    </>
  )
}
