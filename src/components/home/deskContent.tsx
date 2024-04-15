import React from 'react'
import BoxContent from '../molecules/boxContent'

export default function DeskContent() {
  return (
    <div className='flex justify-center'>
      <div className="grid clxl:grid-cols-3 cxl:grid-cols-2 grid-cols-1 mt-[-90px] mb-[362px] gap-[36px] ">
        <BoxContent
          title="China-Indonesia Desk "
          desk="Menyediakan laporan berkualitas disertai dengan analisis mendalam dan data yang kredibel bagi Pemerintah, Pelaku usaha dan publik"
        />
        <BoxContent
          title="China-Indonesia Desk "
          desk="Menyediakan laporan berkualitas disertai dengan analisis mendalam dan data yang kredibel bagi Pemerintah, Pelaku usaha dan publik"
        />
        <BoxContent
          title="China-Indonesia Desk "
          desk="Menyediakan laporan berkualitas disertai dengan analisis mendalam dan data yang kredibel bagi Pemerintah, Pelaku usaha dan publik"
        />
      </div>
    </div>
  );
}
