import { Metadata } from "next";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { title } from "process";

// Tipe untuk data dari API
interface ReportAttributes {
  title: string;
  description: any;
  date: string;
}

interface ReportItem {
  id: string;
  attributes: ReportAttributes;
}

// Fungsi untuk fetching data dari API
async function fetchDataFeatureReport(): Promise<ReportItem[]> {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${apiURL}/api/feature-reports?populate=*`);
  const data = await response.json();
  return data.data;
}

async function fetchDataReportId(id: string): Promise<ReportItem> {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(`${apiURL}/api/blog-reports/${id}?populate=*`);
  const data = await response.json();
  return data.data;
}

// Fungsi untuk generate metadata dinamis berdasarkan data yang di-fetch
export async function generateMetadata({
  params,
  searchParams,
}: {
  params: { reportId: string };
  searchParams: { id?: string; link?: string };
}): Promise<Metadata> {
  const apiURL = process.env.NEXT_PUBLIC_API_URL
  const { id, link } = searchParams;

  let data: any = null;

  // Fetch data berdasarkan id atau link
  if (id === "feature") {
    data = await fetchDataFeatureReport();
  } else if (link) {
    data = await fetchDataReportId(link);
  }


  // Ambil title dan description dari data
  const title =
    id === "feature"
      ? data[0]?.attributes?.title
      : data?.attributes?.title || "Default Title";
  const description =
    id === "feature"
      ? data[0]?.attributes?.description
      : data?.attributes?.description || "Default Description";

  const imageURL =
    apiURL + data?.attributes?.file?.data?.attributes?.url ||
    "https://celios.co.id/opengraph-image.png?48512f3208ed12f2";

  return {
    title,
    description,
    openGraph: {
      images: [
        {
          url: imageURL,
        },
      ],
    },
  };
}

// Halaman utama dengan data fetching dari API
export default async function ReportBlog({
  searchParams,
}: {
  searchParams: { id?: string; link?: string };
}) {
  const { id, link } = searchParams;

  let dataFeatureReport: ReportItem[] | null = null;
  let dataReportId: ReportItem | null = null;

  // Fetch data dari API sesuai parameter
  if (id === "feature") {
    dataFeatureReport = await fetchDataFeatureReport();
  } else if (link) {
    dataReportId = await fetchDataReportId(link);
  }

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "long",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };
  

  return (
    <>
      {id === "feature" ? (
        <div className="bg-[#031B1F] min-h-screen">
          <div className="w-full bg-[url('/images/background.png')] pb-[271px] relative z-10">
            <div className="fixed top-0 left-0 right-0 z-50">
              <Navbar />
            </div>

            <div className="clg:px-[142px] csm:px-[70px] px-[35px] pt-[206px]">
              <div className="flex gap-[15px] ">
                <i className="bx bxs-home csm:text-[30px] text-[25px] text-[#CEE3BE] "></i>
                <h1 className=" text-[#CEE3BE] csm:text-[20px] text-[16px] font-semibold ">
                  Home / Reports
                </h1>
              </div>
              <div className=" h-[3px] w-full bg-[#CEE3BE] mt-[11px] " />
              {dataFeatureReport &&
                dataFeatureReport.map((item) => (
                  <div key={item.id}>
                    <p className="font-semibold text-[#B2B2B2] csm:text-[18px] text-[16px] mt-[36px]">
                      {formatDate(item.attributes.date)}
                    </p>
                    <h1 className="bg-gradient-to-r from-[#4EE1B5] via-[#BCDECD] to-[#CFE3BE] inline-block text-transparent bg-clip-text font-bold csm:text-[38px] text-[30px] mb-8">
                      {item.attributes.title}
                    </h1>
                    <div className="prose-xl cxxl:px-[150px] clg:px-[100px] cmd:px-[80px] px-[10px] font-medium csm:text-[20px] text-[16px] text-white">
                      <BlocksRenderer
                        content={item.attributes.description || []}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#031B1F] min-h-screen">
          <div className="w-full bg-[url('/images/background.png')] bg-cover pb-[271px] relative z-10">
            <div className="fixed top-0 left-0 right-0 z-50">
              <Navbar />
            </div>
            <div className="clg:px-[142px] csm:px-[70px] px-[35px] pt-[206px]">
              <div className="flex gap-[15px] ">
                <i className="bx bxs-home csm:text-[30px] text-[25px] text-[#CEE3BE] "></i>
                <h1 className=" text-[#CEE3BE] csm:text-[20px] text-[16px] font-semibold ">
                  Home / Reports
                </h1>
              </div>
              <div className=" h-[3px] w-full bg-[#CEE3BE] mt-[11px] " />
              {dataReportId && (
                <>
                  <p className="font-semibold text-[#B2B2B2] csm:text-[18px] text-[16px] mt-[36px]">
                    {formatDate(dataReportId.attributes.date)}
                  </p>
                  <h1 className="bg-gradient-to-r from-[#4EE1B5] via-[#BCDECD] to-[#CFE3BE] inline-block text-transparent bg-clip-text font-bold csm:text-[38px] text-[30px] mb-8">
                    {dataReportId.attributes.title}
                  </h1>
                  <div className="prose-xl cxxl:px-[150px] clg:px-[100px] cmd:px-[80px] px-[10px] font-medium csm:text-[20px] text-[16px] text-white">
                    <BlocksRenderer
                      content={dataReportId.attributes.description || []}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
