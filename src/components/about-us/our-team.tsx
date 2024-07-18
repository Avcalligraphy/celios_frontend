import React from "react";
import BoxName from "../molecules/about-us/boxName";
import OurTeamBoxName from "../molecules/about-us/ourTeamBoxName";
import { useStoreOurTeam } from "@/lib/store";

interface ImageData {
  url: string;
}

interface CategoryTeam {
  id: number;
  attributes: {
    division: string;
  };
}

interface TeamMemberAttributes {
  name: string;
  position: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  category_teams: {
    data: CategoryTeam[];
  };
  image: {
    data: any;
  };
}

interface TeamMember {
  id: number;
  attributes: TeamMemberAttributes;
}

export default function OurTeam() {
  const storeDataTeam = useStoreOurTeam((state) => state.dataOurTeam);

  const groupByCategory = (
    data: TeamMember[]
  ): Record<string, TeamMember[]> => {
    return data.reduce(
      (result: Record<string, TeamMember[]>, item: TeamMember) => {
        const categories = item.attributes.category_teams.data.map(
          (cat) => cat.attributes.division
        );
        categories.forEach((category) => {
          if (!result[category]) {
            result[category] = [];
          }
          result[category].push(item);
        });
        return result;
      },
      {}
    );
  };

  const groupedData = groupByCategory(storeDataTeam);

  return (
    <>
      <div className="mt-[277px] px-[70px]">
        <div>
          <h1 className="font-bold csm:text-[54px] text-[34px] leading-[140%] tracking-[-2%]">
            Our Teams
          </h1>
          <div className="flex justify-center">
            <div className="csm:mt-[149px] mt-[74px] grid grid-cols-1 gap-[40px]">
              {Object.entries(groupedData).map(([category, members]) => (
                <OurTeamBoxName title={category} key={category} count={1}>
                  {members.map((item: TeamMember) => {
                    // console.log(item)
                    return (
                      <BoxName
                        key={item.id}
                        name={item.attributes.name}
                        position={item.attributes.position}
                        image={item.attributes.image.data.attributes.url}
                      />
                    );
                  })}
                </OurTeamBoxName>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-t from-[#041C20] to-[#ffff] w-full h-[552px]">
        <div className="bg-[url('/images/background.png')] w-full h-[552px]"></div>
      </div>
    </>
  );
}
