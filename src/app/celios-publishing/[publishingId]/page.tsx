import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Metadata } from "next";

interface BookAttributes {
  title: string;
  penulis: string;
  penerbit: string;
  isbn: string;
  cover: string;
  halaman: string;
  berat: string;
  ukuran: string;
  date:any
  linkTokped: string;
  linkShoppe: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  desc: string;
  profile: string;
  image: any;
}

interface BookItem {
  id: string;
  attributes: BookAttributes;
}

async function fetchDataBook(id: string): Promise<BookItem> {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(
    `${apiURL}/api/publish-houses/${id}?populate[image]=*&populate[profile]=*&populate[desc]=*`,
    { cache: "no-store" }
  );
  const data = await response.json();
  return data.data;
}

export async function generateMetadata({
  params
}: {
  params: { publishingId: string };
}): Promise<Metadata> {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;

  let data: any = null;

  data = await fetchDataBook(params.publishingId);

  // Ambil title dan description dari data
  const title = data?.attributes?.title || "Default Title";
  const description = data?.attributes?.desc || "Default Title";

  const imageURL =
    apiURL + data?.attributes?.image?.data?.attributes?.url ||
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

export default async function PublishingDeskPage({
  params,
}: {
  params: { publishingId: string };
}) {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;
  let dataBookId: BookItem | null = null;
  if (params.publishingId) {
    dataBookId = await fetchDataBook(params.publishingId);
  }

  console.log("Data Book", dataBookId);

  return (
    <>
      <div className="bg-[url('/images/backgroundContentFooter.png')]">
        <div className="bg-[url('/images/backgroundFooter1.png')]">
          <div className="bg-[url('/images/backgroundFooter2.png')] relative z-10">
            <div className="fixed top-0 left-0 right-0 z-50">
              <Navbar />
            </div>
            {dataBookId && (
              <div className="clg:px-[157px] cmd:px-[100px] csm:px-[60px] px-[30px] pb-[275px] csm:pt-[250px] pt-[200px] ">
                <div className=" navMobile:flex-row flex flex-col gap-[74px]  ">
                  <div className="flex justify-center cxl:mb-0 mb-[30px] ">
                    {/* <Image
          src="/images/imageGeo.png"
          alt="image-deo"
          width={512}
          height={800}
          className="rounded-[32px]"
        /> */}
                    <img
                      src={
                        apiURL + dataBookId.attributes.image.data.attributes.url
                      }
                      className=" cmd:w-[512px] csm:w-[412px] w-[312px] bg-cover object-cover h-auto rounded-[32px] "
                    />
                  </div>
                  <div className=" bg-[#00130D] rounded-[32px] cmd:px-[66px] csm:px-[46px] h-fit px-[26px] csm:py-[46px] py-[26px] cxl:w-[950px] min-h-[800px] w-full shadow-sm shadow-gray-400 ">
                    <p className=" cxl:text-[20px] csm:text-[18px] text-[16px] font-semibold text-[#AAAAAA] ">
                      CELIOS Book
                    </p>
                    <h1 className=" bg-gradient-to-r from-[#CFE3BE]  to-[#FFFFFF] inline-block text-transparent bg-clip-text font-bold cxxl:text-[26px] cxl:text-[26px] csm:text-[22px] text-[26px] tracking-[-2%] max-w-[792px] mt-[36px]   ">
                      {dataBookId.attributes.title}
                    </h1>
                    <div className=" mt-[29px] ">
                      <h1 className="cxl:text-[20px] csm:text-[18px] text-[16px] text-white  ">
                        <span className="font-bold">Penulis :</span>{" "}
                        {dataBookId.attributes.penulis}
                      </h1>
                      <h1 className="cxl:text-[20px] csm:text-[18px] text-[16px] text-white  ">
                        <span className="font-bold">Penerbit :</span>{" "}
                        {dataBookId.attributes.penerbit}
                      </h1>
                      <h1 className="cxl:text-[20px] csm:text-[18px] text-[16px] text-white  ">
                        <span className="font-bold">ISBN :</span>{" "}
                        {dataBookId.attributes.isbn}
                      </h1>
                      <h1 className="cxl:text-[20px] csm:text-[18px] text-[16px] text-white  ">
                        <span className="font-bold">Cover :</span>{" "}
                        {dataBookId.attributes.cover}
                      </h1>
                      <h1 className="cxl:text-[20px] csm:text-[18px] text-[16px] text-white  ">
                        <span className="font-bold">Halaman :</span>{" "}
                        {dataBookId.attributes.halaman}
                      </h1>
                      <h1 className="cxl:text-[20px] csm:text-[18px] text-[16px] text-white  ">
                        <span className="font-bold">Berat :</span>{" "}
                        {dataBookId.attributes.berat}
                      </h1>
                      <h1 className="cxl:text-[20px] csm:text-[18px] text-[16px] text-white  ">
                        <span className="font-bold">Ukuran :</span>{" "}
                        {dataBookId.attributes.ukuran}
                      </h1>
                      <div className=" mt-[46px] ">
                        <h1 className=" text-[#CFE3BE] cxl:text-[26px] csm:text-[24px] text-[22px] font-semibold  ">
                          👜 Link Pembelian
                        </h1>
                        <div className=" flex flex-row gap-[70px]  mt-[27px] ">
                          <a
                            target="_blank"
                            href={dataBookId.attributes.linkShoppe}
                          >
                            <img
                              src="/icons/shoppe.png"
                              alt="shoppe"
                              className="w-auto cxl:h-[78px] csm:h-[76px] h-[56px] "
                            />
                          </a>
                          <a
                            target="_blank"
                            href={dataBookId.attributes.linkTokped}
                          >
                            <img
                              src="/icons/tokped.png"
                              className="w-auto cxl:h-[78px] csm:h-[76px] h-[56px] "
                              alt="tokped"
                            />
                          </a>
                          {/* <a target="_blank" href="https://www.instagram.com/celios_id/">
                <img
                  src="/icons/instagram.png"
                  className="w-auto cxl:h-[90px] csm:h-[76px] h-[56px] "
                  alt="instagram"
                />
              </a>
              <a
                target="_blank"
                href="https://wa.me/6282329191591
"
              >
                <img
                  src="/icons/whatsapp.png"
                  className="w-auto cxl:h-[88px] csm:h-[76px] h-[56px] "
                  alt="whatsapp"
                />
              </a> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="csm:pt-[250px] pt-[200px]">
                  <img
                    src="/icons/bgTextSocial.png"
                    alt="bg-text-social"
                    className="h-auto cmd:w-[160px] cmd:w-[160px] w-[140px] "
                  />
                  <h1 className="text-white cmd:text-[40px] csm:text-[36px] text-[30px] font-bold tracking-[-2%] leading-[100%] cmd:mt-[-50px] csm:mt-[-40px] mt-[-40px]">
                    Book Description
                  </h1>
                  <p className="font-medium cmd:text-[20px] csm:text-[18px] text-[16px] text-white mt-[30px]">
                    {dataBookId.attributes.desc || "Ddescription not available"}
                  </p>
                </div>
                <div className="csm:pt-[250px] pt-[200px]">
                  <img
                    src="/icons/bgTextSocial.png"
                    alt="bg-text-social"
                    className="h-auto cmd:w-[160px] cmd:w-[160px] w-[140px] "
                  />
                  <h1 className="text-white cmd:text-[40px] csm:text-[36px] text-[30px] font-bold tracking-[-2%] leading-[100%] cmd:mt-[-50px] csm:mt-[-40px] mt-[-40px]">
                    Writer Profile
                  </h1>
                  <p className="font-medium cmd:text-[20px] csm:text-[18px] text-[16px] text-white mt-[30px]">
                    {dataBookId?.attributes?.profile || "Profile not available"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
