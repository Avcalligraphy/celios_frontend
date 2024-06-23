import Image from 'next/image';
import React from 'react'
import BoxName from '../molecules/about-us/boxName';
import OurTeamBoxName from '../molecules/about-us/ourTeamBoxName';
import ListTeam from './listTeam';
import { useStoreOurTeam } from '@/lib/store';

export default function OurTeam() {
  const storeDataTeam = useStoreOurTeam((state) => state.dataOurTeam)
   const categoryTeam = (item:any) => {
     return item.attributes.category_teams.data
       .map((team:any) => team.attributes.division)
       .join(", ");
   };
  return (
    <>
      <div className="mt-[277px] px-[70px]">
        <div>
          {/* <Image
            src="/icons/titleCOntent.png"
            alt="title-content"
            width={240}
            height={33}
            className="ml-[95px]"
          /> */}
          <h1 className=" font-bold csm:text-[54px] text-[34px] leading-[140%] tracking-[-2%]  ">
            Our Teams
          </h1>
          <div className="flex justify-center">
            <div className="csm:mt-[149px] mt-[74px] grid grid-cols-1 gap-[40px]  ">
              {storeDataTeam.map((item) => {
                return (
                  <OurTeamBoxName
                    title={categoryTeam(item)}
                    key={item.id}
                    count={1}
                  >
                    <BoxName
                      name={item.attributes.name}
                      position={item.attributes.position}
                      image={item.attributes.image.data.attributes.url}

                    />
                  </OurTeamBoxName>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-t from-[#041C20] to-[#ffff] w-full h-[552px]">
        <div className=" bg-[url('/images/background.png')] w-full h-[552px] " />
      </div>
    </>
  );
}
