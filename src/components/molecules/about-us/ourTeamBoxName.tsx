import React from 'react'

interface OurTeamBoxNameProps{
    children: React.ReactNode
    title: string
}
export default function OurTeamBoxName(props: OurTeamBoxNameProps) {
    const {children, title} = props
  return (
    <div>
      <h1 className=" text-[#063928] text-[36px] font-bold leading-[100%] text-center mb-[40px] ">
        {title}
      </h1>
      <div className='flex gap-[33px] justify-center'>{children}</div>
    </div>
  );
}
