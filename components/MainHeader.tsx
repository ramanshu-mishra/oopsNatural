"use client"
import React from 'react';
import Image from 'next/image';

const MainHeader = () => (
  <header className="bg-[#4e300d] text-[#c7c1b6] py-6 px-8">
    <div className="flex items-center gap-7 max-w-5xl ">
      <Image
        src="/img/logo.png"
        alt="Ops Natural Logo"
        width={100}
        height={100}
        className="rounded-xl   "
        priority
      />
      <div className='flex flex-col gap-2 font-timesNewRoman'>
        <h1 className="font-semibold text-4xl sm:text-5xl  ">Ops Natural Spices & Food</h1>
        <p className="mx-1 mt-1 text-lg">स्वाद जो ले आये माँ के हाथों की याद - Ops Natural.</p>
        
      </div>
    </div>
  </header>
);

export default MainHeader;
