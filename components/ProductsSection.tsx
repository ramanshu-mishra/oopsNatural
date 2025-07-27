"use client"
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { motion } from 'framer-motion';

const ProductsSection: React.FC<{ filter?: string }> = ({ filter = "" }) => {
  const [cart, setCart] = useState<string[]>([]);

  const filtered = products.filter(p => 
    p.name.toLowerCase().includes(filter.toLowerCase()) || 
    (p.description?.toLowerCase().includes(filter.toLowerCase()) ?? false)
  );

  const handleAddToCart = (name: string) => {
    setCart([...cart, name]);
  };

  return (
    <section className="px-4 py-10 mx-auto max-w-7xl">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl text-center mb-7 font-bold text-brown-900"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Our Products
      </motion.h2>
      <div className="flex flex-wrap gap-7 justify-center">
        {filtered.map((product, idx) => (
          <ProductCard
          idx={idx}
            key={idx}
            product={product}
            onAddToCart={() => handleAddToCart(product.name)}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
