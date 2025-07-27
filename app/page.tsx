"use client"
import React, { useState } from 'react';
import TopHeader from '../components/TopHeader';
import MainHeader from '../components/MainHeader';
import Navbar from '../components/Navbar';
import ProductsSection from '../components/ProductsSection';
import Footer from '../components/Footer';

export default function Home() {
  const [search, setSearch] = useState('');
  return (
    <div className=''>
      <TopHeader />
      <MainHeader />
      <Navbar onSearch={setSearch} />
      <ProductsSection filter={search} />
      <Footer />
    </div>
  );
}
