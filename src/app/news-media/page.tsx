import NewsMedia from "@/components/pages/NewsMedia";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
};

export default function NewsMediaPage() {
  return <NewsMedia />;
}
