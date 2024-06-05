import Button from '@/components/Button.tsx';
import Footer from '@/components/footer';
import BoxBrief from '@/components/molecules/china-indonesia/boxBrief';
import BoxReports from '@/components/molecules/reports/boxReports';
import Navbar from '@/components/navbar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function China() {
  return (
    <>
      <div className="bg-[url('/images/imageChina.png')]  w-full  min-h-[842px] ">
        <div className="bg-[url('/images/background.png')] object-cover w-full min-h-[842px] relative z-10 ">
          <div className="fixed top-0 left-0 right-0 z-50">
            <Navbar />
          </div>
          <div className="block cmd:pt-[283px]   clg:px-[162px] csm:px-[81px]  px-[20px] pt-[200px] ">
            <div>
              {/* <Image
                src="/icons/bgText.png"
                alt="bg-text"
                width={247}
                height={81}
                className="  "
              /> */}
              <img
                src="/icons/bgText.png"
                className="w-auto csm:h-[81px] h-[60px] "
              />
              <h1 className="font-bold csm:text-[87px] text-[67px] csm:mt-[-90px] mt-[-56px] leading-[100%] tracking-[-4%] text-white max-w-[804px] mb-[25px] ">
                China Indonesia Relations
              </h1>
            </div>
            <h1 className=" text-[30px] tracking-[2%] font-semibold text-white max-w-[1200px] ">
              China-Indonesia Desk at CELIOS fosters policy-oriented research on
              China’s engagement with Indonesia in an attempt to ensure mutually
              beneficial cooperation between the two countries which promotes
              human well-being, financial stability, and environmental
              sustainability.
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between gap-[50px] csm:px-[70px] px-[25px] mt-[100px] ">
        <div>
          <div>
            <Image
              src="/icons/titleCOntent.png"
              alt="title-content"
              width={240}
              height={33}
            />

            <h1 className=" font-bold csm:text-[54px] text-[34px] leading-[140%] tracking-[-2%] csm:mt-[-70px] mt-[-35px] ">
              Articles
            </h1>
          </div>
          <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] w-full mt-[33px] ">
            <div className=" bg-[#00130D] csm:py-[75px] py-[37px] csm:px-[65px] px-[32px] rounded-[32px] w-full  ">
              <div className="block">
                <div>
                  <a
                    href="https://www.youtube.com/"
                    className="text-[20px] font-medium text-[#BDDFCF] underline "
                  >
                    “Siapapun yang terpilih dalam Pilpres 2024, Indonesia
                    akan tetap mendekat ke Cina” The Conversation, 10 February
                    2024. 
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/"
                    className="text-[20px] font-medium text-[#BDDFCF] underline "
                  >
                    “Siapapun yang terpilih dalam Pilpres 2024, Indonesia
                    akan tetap mendekat ke Cina” The Conversation, 10 February
                    2024. 
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/"
                    className="text-[20px] font-medium text-[#BDDFCF] underline "
                  >
                    “Siapapun yang terpilih dalam Pilpres 2024, Indonesia
                    akan tetap mendekat ke Cina” The Conversation, 10 February
                    2024. 
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/"
                    className="text-[20px] font-medium text-[#BDDFCF] underline "
                  >
                    “Siapapun yang terpilih dalam Pilpres 2024, Indonesia
                    akan tetap mendekat ke Cina” The Conversation, 10 February
                    2024. 
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/"
                    className="text-[20px] font-medium text-[#BDDFCF] underline "
                  >
                    “Siapapun yang terpilih dalam Pilpres 2024, Indonesia
                    akan tetap mendekat ke Cina” The Conversation, 10 February
                    2024. 
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/"
                    className="text-[20px] font-medium text-[#BDDFCF] underline "
                  >
                    “Siapapun yang terpilih dalam Pilpres 2024, Indonesia
                    akan tetap mendekat ke Cina” The Conversation, 10 February
                    2024. 
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/"
                    className="text-[20px] font-medium text-[#BDDFCF] underline "
                  >
                    “Siapapun yang terpilih dalam Pilpres 2024, Indonesia
                    akan tetap mendekat ke Cina” The Conversation, 10 February
                    2024. 
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/"
                    className="text-[20px] font-medium text-[#BDDFCF] underline "
                  >
                    “Siapapun yang terpilih dalam Pilpres 2024, Indonesia
                    akan tetap mendekat ke Cina” The Conversation, 10 February
                    2024. 
                  </a>
                </div>
                <Link
                  href="#"
                  className="flex items-center font-medium text-[20px] text-[#BDDFCF] mt-[20px] "
                >
                  <Image
                    src="/icons/arrowButton.png"
                    alt="arrow-button"
                    width={32}
                    height={32}
                    className="mr-[17px]"
                  />
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Image
              src="/icons/titleCOntent.png"
              alt="title-content"
              width={240}
              height={33}
            />

            <h1 className=" font-bold csm:text-[54px] text-[34px] leading-[140%] tracking-[-2%] csm:mt-[-70px] mt-[-35px] ">
              Media Comentaries
            </h1>
          </div>
          <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] w-full mt-[33px] ">
            <div className=" bg-[#00130D] csm:py-[75px] py-[37px] csm:px-[65px] px-[32px] rounded-[32px] w-full  ">
              <div className="block">
                <div>
                  <a
                    href="https://www.youtube.com/"
                    className="text-[20px] font-medium text-[#BDDFCF] underline "
                  >
                    “Siapapun yang terpilih dalam Pilpres 2024, Indonesia
                    akan tetap mendekat ke Cina” The Conversation, 10 February
                    2024. 
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/"
                    className="text-[20px] font-medium text-[#BDDFCF] underline "
                  >
                    “Siapapun yang terpilih dalam Pilpres 2024, Indonesia
                    akan tetap mendekat ke Cina” The Conversation, 10 February
                    2024. 
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/"
                    className="text-[20px] font-medium text-[#BDDFCF] underline "
                  >
                    “Siapapun yang terpilih dalam Pilpres 2024, Indonesia
                    akan tetap mendekat ke Cina” The Conversation, 10 February
                    2024. 
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/"
                    className="text-[20px] font-medium text-[#BDDFCF] underline "
                  >
                    “Siapapun yang terpilih dalam Pilpres 2024, Indonesia
                    akan tetap mendekat ke Cina” The Conversation, 10 February
                    2024. 
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/"
                    className="text-[20px] font-medium text-[#BDDFCF] underline "
                  >
                    “Siapapun yang terpilih dalam Pilpres 2024, Indonesia
                    akan tetap mendekat ke Cina” The Conversation, 10 February
                    2024. 
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/"
                    className="text-[20px] font-medium text-[#BDDFCF] underline "
                  >
                    “Siapapun yang terpilih dalam Pilpres 2024, Indonesia
                    akan tetap mendekat ke Cina” The Conversation, 10 February
                    2024. 
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/"
                    className="text-[20px] font-medium text-[#BDDFCF] underline "
                  >
                    “Siapapun yang terpilih dalam Pilpres 2024, Indonesia
                    akan tetap mendekat ke Cina” The Conversation, 10 February
                    2024. 
                  </a>
                </div>
                <div>
                  <a
                    href="https://www.youtube.com/"
                    className="text-[20px] font-medium text-[#BDDFCF] underline "
                  >
                    “Siapapun yang terpilih dalam Pilpres 2024, Indonesia
                    akan tetap mendekat ke Cina” The Conversation, 10 February
                    2024. 
                  </a>
                </div>
                <Link
                  href="#"
                  className="flex items-center font-medium text-[20px] text-[#BDDFCF] mt-[20px] "
                >
                  <Image
                    src="/icons/arrowButton.png"
                    alt="arrow-button"
                    width={32}
                    height={32}
                    className="mr-[17px]"
                  />
                  See More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center mt-[73px] mb-[271px] ">
        <Link href='/china-library'>
          <Button
            text="China Indonesia Library"
            bg="bg-[url('/icons/bgButton.png')]"
          />
        </Link>
      </div>
      <div className="csm:px-[70px] px-[25px] mb-[271px]">
        <div>
          <Image
            src="/icons/titleCOntent.png"
            alt="title-content"
            width={240}
            height={33}
          />

          <h1 className=" font-bold csm:text-[54px] text-[34px] leading-[140%] tracking-[-2%] csm:mt-[-70px] mt-[-35px] ">
            China-Indonesia Monthly Brief
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-7 mt-[60px] ">
          <BoxBrief />
          <BoxBrief />
          <BoxBrief />
          <BoxBrief />
        </div>
      </div>
      <div className="csm:px-[70px] px-[25px]">
        <div>
          <Image
            src="/icons/titleCOntent.png"
            alt="title-content"
            width={240}
            height={33}
          />

          <h1 className=" font-bold csm:text-[54px] text-[34px] leading-[140%] tracking-[-2%] csm:mt-[-70px] mt-[-35px] ">
            Reports, Brief, and Books
          </h1>
        </div>
      </div>
      <div className="bg-[url('/images/imageBrief.png')] flex flex-col justify-center items-center object-cover h-[644px] mt-[60px]  w-full">
        <h1 className="text-center text-white font-bold text-[64px] max-w-[1071px] mb-[40px]  ">
          China Muslim Diplomacy in Indonesia
        </h1>
        <p className="text-center text-white font-medium text-[32px] max-w-[1161px] ">
          Terima kasih banyak kepada Saudara Septian Hario Seto dan Mas Yustinus
          Prastowo yang telah menanggapi tulisan saya. Baru tiga orang saja
          menyampaikan pandangannya, persoalan kehadiran smelter nikel dari
          negara China kian terang benderang.
        </p>
        <button className="text-white font-semibold text-[20px] py-[20px] px-[26px] mt-[60px] border-[1px] border-white rounded-[13px] ">
          Click Here
        </button>
      </div>
      <div className="csm:px-[70px] px-[25px] mt-[60px]">
        <div>
          <Image
            src="/icons/titleCOntent.png"
            alt="title-content"
            width={240}
            height={33}
          />

          <h1 className=" font-bold csm:text-[54px] text-[34px] leading-[140%] tracking-[-2%] csm:mt-[-70px] mt-[-35px] ">
            Events
          </h1>
        </div>
        <div className="clg:flex block  gap-[72px]  ">
          <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] mt-[46px]  clg:w-[658px] w-full ">
            <img
              className="  cxl:h-[367px] csm:h-[267px] h-[167px] w-full object-cover rounded-[32px] "
              src="/images/imageHeader.png"
            />
          </div>
          <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] mt-[46px]  clg:w-[658px] w-full ">
            <img
              className="  cxl:h-[367px] csm:h-[267px] h-[167px w-full object-cover rounded-[32px] "
              src="/images/imageHeader.png"
            />
          </div>
          <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] mt-[46px]  clg:w-[658px] w-full ">
            <img
              className="  cxl:h-[367px] csm:h-[267px] h-[167px w-full object-cover rounded-[32px] "
              src="/images/imageHeader.png"
            />
          </div>
        </div>
        <div className="mt-[60px]">
          <Image
            src="/icons/titleCOntent.png"
            alt="title-content"
            width={240}
            height={33}
          />

          <h1 className=" font-bold csm:text-[54px] text-[34px] leading-[140%] tracking-[-2%] csm:mt-[-70px] mt-[-35px] ">
            We have worked and collaborated with:
          </h1>
        </div>
        <div className="grid grid-cols-4 gap-[100px] mt-[40px] mb-[210px] ">
          <img src="/sponshor/1.png" className="h-[86px] w-auto " />
          <img src="/sponshor/2.png" className="h-[86px] w-auto " />
          <img src="/sponshor/3.png" className="h-[86px] w-auto " />
          <img src="/sponshor/4.png" className="h-[86px] w-auto " />
        </div>
      </div>
      <Footer />
    </>
  );
}
