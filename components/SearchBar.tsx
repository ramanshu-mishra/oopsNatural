"use client"
import React, { useState } from 'react';
import { motion } from 'motion/react';

const SearchBar: React.FC<{ onSearch: (search: string) => void }> = ({ onSearch }) => {
  const [term, setTerm] = useState('');
  const [searching, setSearching] = useState(false);
  const [v, setV] = useState(0);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        setSearching(true);
        setV(v+360);
        setTimeout(() => setSearching(false), 600);
        onSearch(term);
      }}
      className="flex items-center gap-2 mb-3  w-[60%]  rounded-lg  border-neutral-900 transition-all border-1 focus:outline-0 p-1"
    >
      <input
        type="text"
        value={term}
        onChange={e => setTerm(e.target.value)}
        placeholder="Search for products..."
        className=" p-2 rounded-lg   w-full focus:ring-0  focus:outline-0"
      />
      <motion.button
        type="submit"
        className="p-2 px-4 bg-[#4e300d] text-white rounded-lg"
        animate={searching && {rotate: v+360}}
        transition={{ duration: 0.4 }}
      >
        🔍
      </motion.button>
    </form>
  );
};

export default SearchBar;
