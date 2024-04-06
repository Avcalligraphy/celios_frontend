import Footer from "@/components/footer";
import AboutCelios from "@/components/home/aboutCelios";
import ContactPage from "@/components/home/contactPage";
import DeskContent from "@/components/home/deskContent";
import Header from "@/components/home/header";
import RecentPublication from "@/components/home/recentPublications";
import BoxSocial from "@/components/molecules/boxSocial";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      {/* <DeskContent />
      <AboutCelios />
      <RecentPublication />
      <ContactPage>
        <div className="flex justify-center">
          <div>
            <Image
              src="/icons/bgTextSocial.png"
              width={532.78}
              height={20.36}
              alt="bg-text-social"
            />
            <h1 className="text-white text-[54px] font-bold tracking-[-2%] leading-[100%] mt-[-60px]   ">
              🔗Social Media
            </h1>
            <p className=" text-[24px] leading-[150%] text-[#BAE6FD] text-center mt-[30px] ">
              Let is connect and engage with us!
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[75px]  mt-[116px] ">
          <BoxSocial />
          <BoxSocial />
        </div>
      </ContactPage>
      <Footer /> */}
    </>
  );
}
