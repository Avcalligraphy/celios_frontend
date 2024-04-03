import React from 'react'
import Navbar from '../navbar'

export default function Header() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="px-[70px] flex justify-between items-center">
        <div>
          <p className='font-semibold text-[24px]  '>January 25, 2024</p>
        </div>
      </div>
    </div>
  );
}
