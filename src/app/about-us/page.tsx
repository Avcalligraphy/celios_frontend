import AboutUs from "@/components/pages/AboutUs";
import { Metadata } from "next";

// Mengatur metadata di server-side untuk SEO
export const metadata: Metadata = {
  title: "About Us - Center of Economic and Laws",
};

export default function AboutUsPage() {
  return <AboutUs />;
}
