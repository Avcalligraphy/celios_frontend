import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function ChinaLibrary() {
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
      <div className="w-full flex justify-between gap-[50px] csm:px-[70px] px-[25px] mt-[100px] mb-[210px] ">
        <div>
          <div>
            <Image
              src="/icons/titleCOntent.png"
              alt="title-content"
              width={240}
              height={33}
            />

            <h1 className=" font-bold csm:text-[54px] text-[34px] leading-[140%] tracking-[-2%] csm:mt-[-70px] mt-[-35px] ">
              Library
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
      <Footer />
    </>
  );
}
