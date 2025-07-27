"use client"
import React from 'react';
import { motion } from 'framer-motion';

const icons = [
  { icon: '❤', label: 'Wishlist' },
  { icon: '🛒', label: 'Cart' },
  { icon: '👤', label: 'Account' },
  { icon: '🔐', label: 'Register/Login' },
];

const NavIcons = () => (
  <div className="flex gap-6 text-2xl">
    {icons.map(({ icon, label }) => (
      <motion.a
        key={label}
        href="#"
        title={label}
        whileHover={{ scale: 1.2, color: '#ffc107' }}
        transition={{ type: 'spring', stiffness: 350 }}
        aria-label={label}
        className="transition-all"
      >
        {icon}
      </motion.a>
    ))}
  </div>
);

export default NavIcons;
