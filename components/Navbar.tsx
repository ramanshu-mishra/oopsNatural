"use client"
import React from 'react';
import SearchBar from './SearchBar';
import NavIcons from './NavIcons';
import Image from "next/image"
import logo2 from "../public/img/logo2.png"
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { SearchContext } from '@/app/contexts/context';

const Navbar: React.FC<{ onSearch: (t: string) => void }> = ({ onSearch }) => {
  const { y:setTerm}=  useContext(SearchContext);
  const router = useRouter();
  return(
  <nav className="bg-[#f3e4d7] py-2 flex  justify-between  sticky top-0 z-20 shadow-cardShadow  ">
    <Image src={logo2} alt='logo2' height={70} className=' mx-5 hover:cursor-pointer'
    onClick={()=>{router.push("/"); setTerm("");}}
    ></Image>
    <div className='flex justify-center  items-center w-full'>
    <SearchBar onSearch={onSearch} />
    </div>
    
    <div className='flex justify-center mx-5 items-center '>
         <NavIcons />
    </div>
   
  </nav>
  )
};

export default Navbar;
