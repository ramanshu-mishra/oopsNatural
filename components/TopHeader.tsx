"use client"
import React from 'react';

const TopHeader = () => (
  <div className="bg-neutral-900 text-white text-sm py-2 px-4 flex justify-end">
    <div className="flex gap-6">
      <a href="#" className="transition-colors hover:text-yellow-400 underline-offset-2">Track Order</a>
      <a href="#id_footer" className="transition-colors hover:text-yellow-400 underline-offset-2">Contact Us</a>
    </div>
  </div>
);

export default TopHeader;
