/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Loader from "@/components/loader/loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://celios.co.id"),
  title: {
    default: "CELIOS  - Center of Economic and Law Studies",
    template: "%s - Center of Economic and Law Studies",
  },
  description:
    "CELIOS merupakan lembaga riset di Indonesia yang bergerak dibidang makro ekonomi, keuangan, ekonomi hijau dan kebijakan publik dalam mendorong percepatan inovasi-digitalisasi secara inklusif.",
  twitter: {
    card: "summary_large_image",
  },
  openGraph: {
    title: "CELIOS",
    description: "Center of Economic and Law Studies",
    images: "/opengraph-image.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <script
          src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.min.js"
          defer
        />
        {/* <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
        <script src="https://cdn.jsdelivr.net/npm/react-apexcharts"></script> */}
        {/* <!-- AOS Animation --> */}
        <link
          href="https://unpkg.com/aos@2.3.1/dist/aos.css"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </head>
      <body className={inter.className}>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </body>
    </html>
  );
}
