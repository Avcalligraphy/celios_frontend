import { MetadataRoute } from "next";

// URL API untuk fetching data blog
const apiURL = process.env.NEXT_PUBLIC_API_URL;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch data dari API blog-reports
  const response = await fetch(`${apiURL}/api/blog-reports`);
  const data = await response.json();

  // Ambil semua blog reports dan buat URL dinamis berdasarkan id
  const blogUrls = data.data.map((report: any) => ({
    url: `https://celios.co.id/reports/${report.id}?link=${report.id}`,
    lastModified: new Date(report.attributes.updatedAt).toISOString(),
  }));

  // Sitemap statis untuk halaman lain (misalnya about-us)
  const staticUrls = [
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/about-us`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/celios-index`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/celios-publishing`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/china-indonesia`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/china-library`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/news-media`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/our-desk`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/reports`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/social-media`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/trainings`,
      lastModified: new Date().toISOString(),
    },
  ];

  // Gabungkan sitemap statis dan dinamis
  return [...staticUrls, ...blogUrls];
}
