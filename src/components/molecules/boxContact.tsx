import React from 'react'
import Button from '../Button.tsx';

export default function BoxContact() {
  return (
    <div className="bg-gradient-to-r from-[#7DD3FC] to-[#FFFFFF] p-[2px] rounded-[32px] mt-[46px] ">
      <div className="bg-[#00130D] px-[128px] pt-[66px] pb-[225px] rounded-[32px] ">
        <div>
          <label className=" text-[36px] text-white font-semibold leading-[100%] tracking-[-2%]  ">
            ✏️ Name
          </label>
          <input
            className="bg-white placeholder-[#6D6D6D] py-[25px] px-[25px] w-full text-[32px] leading-[100%] tracking-[-2%] rounded-[23px] mt-[24px] "
            placeholder="Your Name"
          />
        </div>
        <div className=" mt-[52px] ">
          <label className=" text-[36px] text-white font-semibold leading-[100%] tracking-[-2%]  ">
            ✉️ Email
          </label>
          <input
            className="bg-white placeholder-[#6D6D6D] py-[25px] px-[25px] w-full text-[32px] leading-[100%] tracking-[-2%] rounded-[23px] mt-[24px] "
            placeholder="Your Email Address"
          />
        </div>
        <Button
          text="Join With Us"
          bg="bg-[url('/icons/bgButton.png')] mt-[45px] "
        />
      </div>
    </div>
  );
}
