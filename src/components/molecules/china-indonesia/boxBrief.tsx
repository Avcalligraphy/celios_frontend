import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BoxBriefProps {
  id: number
  title: string;
  date: string;
  description: any[];
}

export default function BoxBrief({ id, title, date, description }: BoxBriefProps) {
  // Extract only the first item from the description array
  const firstItem = description[0]?.children[0];
  const truncateText = (text: string, wordLimit: number): string => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "long",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  return (
    <div className="bg-[url('/icons/bgBoxContent.png')] csm:w-[536px] w-[346px] h-[342px] flex flex-col py-[30px] px-[32px] rounded-[32px] object-cover">
      <h1 className="bg-gradient-to-r from-[#BDDFCF] to-[#50E2BB] inline-block text-transparent bg-clip-text font-bold csm:text-[24px] text-[18px] my-[12px] leading-[100%] underline">
        China-Indonesia Monthly Brief: {title}
      </h1>
      <p className="font-medium text-[16px] text-[#C4C4C4] mt-[13px]">
        {formatDate(date)}
      </p>
      {firstItem &&
        firstItem.children.map((child: any, index: number) => (
          <p
            key={index}
            className="font-medium csm:text-[20px] text-[16px] csm:max-w-[378px] max-w-[250px] text-[#BDDFCF] text-justify csm:leading-[100%] leading-[120%] mt-[26px]"
          >
            {truncateText(child.text, 6)}
          </p>
        ))}
      <Link
        href={`/china-indonesia/${id}`}
        className="flex items-center font-medium text-[20px] text-[#BDDFCF] mt-[20px]"
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
  );
}
