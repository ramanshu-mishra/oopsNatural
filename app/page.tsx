"use client"
import React, { useState } from 'react';
import TopHeader from '../components/TopHeader';
import MainHeader from '../components/MainHeader';
import Navbar from '../components/Navbar';
import ProductsSection from '../components/ProductsSection';
import Footer from '../components/Footer';
import { SearchContext } from './contexts/context';

export default function Home() {
  
  const [search, setSearch] = useState('');
  return (
    <div className='min-h-screen '>
      <SearchContext.Provider value={{x: search, y: setSearch}}>
      <TopHeader />
      <MainHeader />
      <Navbar onSearch={setSearch} />
      <ProductsSection filter={search} />
      <div className='bg-green-400 '>
    <Footer />
      </div>
      
      </SearchContext.Provider>
    </div>
  );
}
