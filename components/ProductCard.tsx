"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import {useRouter} from "next/navigation"

interface ProductCardProps {
  product: {
    image?: string;
    name: string;
    description?: string;
    price?: number;
    mrp?: number;
    per100g?: string;
  };
  onAddToCart: () => void;
  idx : number
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, idx }) => {
  const { image, name, description, price, mrp, per100g } = product;
  const router = useRouter();

  return (
    <motion.div
      className="bg-[#efdcd3] p-4 rounded-xl shadow-cardShadow w-full max-w-xs flex flex-col items-center hover:shadow-2xl hover:-translate-y-1 transition "
      style={{userSelect: "none"}}
      whileHover={{ scale: 1.025 , cursor: "pointer"}}
      transition={{duration: 0.3}}
      onClick={()=>router.push(`/products/${idx+1}`)}
    >
      <div  className="w-70 h-70 flex items-center justify-center mb-3 rounded-2xl overflow-hidden bg-white">
        {image ? (
          <Image src={image} alt={name} width={240} height={240} className="object-cover w-full h-full" />
        ) : (
          <div className="bg-gray-200 w-full h-full flex items-center justify-center">No Image</div>
        )}
      </div>
      <div className="text-center">
        <h3 className="font-bold text-lg">{name}</h3>
        {description && <p className="text-sm mt-1">{description}</p>}
        <div className="my-1">
          {mrp && <span className="text-gray-400 line-through mr-2">₹{mrp}</span>}
          {typeof price === "number" && (
            <span className="text-[#d32f2f] font-semibold mr-2">₹{price}</span>
          )}
          {per100g && <span className="text-gray-500 text-xs">({per100g})</span>}
        </div>
        <motion.button
          onClick={onAddToCart}
          whileTap={{ scale: 0.95 }}
          className="mt-2 px-3 py-2 bg-[#8e24aa] text-white rounded-lg shadow hover:bg-[#621681] transition"
        >
          Add To Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
