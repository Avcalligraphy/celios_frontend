import Image from 'next/image';
import React from 'react'
import BoxName from '../molecules/about-us/boxName';
import OurTeamBoxName from '../molecules/about-us/ourTeamBoxName';

export default function OurTeam() {
  return (
    <>
      <div className="mt-[277px] px-[70px]">
        <div>
          <Image
            src="/icons/titleCOntent.png"
            alt="title-content"
            width={240}
            height={33}
            className="ml-[95px]"
          />
          <h1 className=" font-bold text-[54px] leading-[140%] tracking-[-2%] mt-[-70px] ">
            Our Teams
          </h1>
          <div className="flex justify-center">
            <div className="mt-[149px] grid grid-cols-1 gap-[40px]  ">
              <OurTeamBoxName title="Head of Research Group">
                <BoxName />
              </OurTeamBoxName>
              <OurTeamBoxName title="China-Indonesia Team">
                <BoxName />
                <BoxName />
              </OurTeamBoxName>
              <OurTeamBoxName title="Public Policy">
                <BoxName />
                <BoxName />
              </OurTeamBoxName>
              <OurTeamBoxName title="Law Team">
                <BoxName />
                <BoxName />
                <BoxName />
              </OurTeamBoxName>
              <OurTeamBoxName title="Finance Team">
                <BoxName />
                <BoxName />
                <BoxName />
              </OurTeamBoxName>
              <OurTeamBoxName title="Mining Team">
                <BoxName />
                <BoxName />
                <BoxName />
              </OurTeamBoxName>
              <OurTeamBoxName title="Digital Economy">
                <BoxName />
              </OurTeamBoxName>
              <OurTeamBoxName title="Management Team">
                <BoxName />
                <BoxName />
              </OurTeamBoxName>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-t from-[#7CB937] to-[#ffff] w-full h-[552px]">
        <div className=" bg-[url('/images/background.png')] w-full h-[552px] " />
      </div>
    </>
  );
}
