import React from 'react'

interface OurTeamBoxNameProps{
    children: React.ReactNode
    title: any 
    count: number
}
export default function OurTeamBoxName(props: OurTeamBoxNameProps) {
    const {children, title, count} = props
  return (
    <div>
      <h1 className=" text-[#063928] csm:text-[30px] text-[24px] font-bold leading-[100%] text-center mb-[40px] ">
        {title}
      </h1>
      <div
        className={`grid items-center justify-center ${
          count > 3
            ? "clxl:grid-cols-3 cxl:grid-cols-2 grid-cols-1"
            : `clxl:grid-cols-${count} cxl:grid-cols-2 grid-cols-1 `
        } gap-[32px] `}
      >
        {children}
      </div>
    </div>
  );
}
