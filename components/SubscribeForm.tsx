"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  return (
    <form
      className="flex gap-3 justify-center mt-2 flex-wrap"
      onSubmit={e => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 2000);
      }}
    >
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        required
        onChange={e => setEmail(e.target.value)}
        className="p-2 w-60 rounded border-none outline-none"
      />
      <motion.button
        type="submit"
        className="px-4 py-2 rounded bg-yellow-400 text-black cursor-pointer font-semibold"
        whileTap={{ scale: 0.92 }}
      >
        {sent ? 'Thank You!' : 'Subscribe'}
      </motion.button>
    </form>
  );
};

export default SubscribeForm;
