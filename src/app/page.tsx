import Footer from "@/components/footer";
import AboutCelios from "@/components/home/aboutCelios";
import ContactPage from "@/components/home/contactPage";
import DeskContent from "@/components/home/deskContent";
import Header from "@/components/home/header";
import RecentPublication from "@/components/home/recentPublications";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <DeskContent />
      <AboutCelios />
      <RecentPublication />
      <ContactPage />
      <Footer />
    </>
  );
}
