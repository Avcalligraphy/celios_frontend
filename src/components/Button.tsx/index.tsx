import React from 'react'

interface ButtonProps extends React.ComponentProps<'button'> {
    text: String,
    bg?: String
}
export default function Button(props: Partial<ButtonProps>) {
    const { text, bg = "bg-[#99C948]", ...nativeProps } = props;
  return (
    <button className={`${bg} px-[65px] rounded-[13px] text-white py-[20px] font-semibold text-[18px] `} {...nativeProps}>{text}</button>
  )
}
