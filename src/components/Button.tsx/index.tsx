import React from 'react'

interface ButtonProps extends React.ComponentProps<'button'> {
    text: String,
    bg?: String
}
export default function Button(props: Partial<ButtonProps>) {
    const { text, bg = "bg-[#99C948]", ...nativeProps } = props;
  return (
    <button
      className={`${bg} translate-y-0 translate-x-0 hover:translate-y-1 hover:translate-x-1 cmd:px-[65px] csm:px-[40px] px-[30px] rounded-[13px] text-white cmd:py-[20px] py-[16px] font-semibold text-[13px] `}
      {...nativeProps}
    >
      {text}
    </button>
  );
}
