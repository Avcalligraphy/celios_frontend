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

  const predefinedOrder = [
    "Head of Research Group",
    "Directors",
    "Researchers",
    "Social Media",
    "Finance",
  ];

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

  const sortedCategories = Object.keys(groupedData).sort((a, b) => {
    const indexA = predefinedOrder.indexOf(a);
    const indexB = predefinedOrder.indexOf(b);

    if (indexA === -1 && indexB === -1) {
      return 0; // Both are not in predefinedOrder, maintain their order
    } else if (indexA === -1) {
      return 1; // a is not in predefinedOrder, b should come first
    } else if (indexB === -1) {
      return -1; // b is not in predefinedOrder, a should come first
    } else {
      return indexA - indexB; // Compare based on predefinedOrder
    }
  });

  return (
    <>
      <div className="csm:mt-[277px] mt-[100px] csm:px-[70px] px-[20px] ">
        <div>
          <h1 className="font-bold cmd:text-[40px] csm:text-[34px] text-[26px] leading-[140%] tracking-[-2%]">
            Our Teams
          </h1>
          <div className="flex justify-center">
            <div className="csm:mt-[149px] mt-[54px] grid grid-cols-1 gap-[40px]">
              {sortedCategories.map((category) => (
                <OurTeamBoxName title={category} key={category} count={1}>
                  {groupedData[category].map((item: TeamMember) => (
                    <BoxName
                      key={item.id}
                      name={item.attributes.name}
                      position={item.attributes.position}
                      image={item.attributes.image.data.attributes.url}
                    />
                  ))}
                </OurTeamBoxName>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-t from-[#041C20] to-[#ffff] w-full h-[252px]">
        <div className="bg-[url('/images/background.png')] w-full h-[252px]"></div>
      </div>
    </>
  );
}
