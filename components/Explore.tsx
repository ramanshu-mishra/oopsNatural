"use client"
import {useRouter} from "next/navigation";
import { products } from "@/data/products";
import Image from "next/image";

export default function Page({product}:{product:string}){
    const router = useRouter();
    return(
        <div className=" my-2 w-[85%] px-4">
        <div className="font-bold text-2xl">Explore More</div>
        <div className="text-neutral-700">Have a look on our other products</div>
        <div className="flex gap-15 my-4 flex-wrap">
                {products.map((prod, ind) => {
  const total = products.length;
  const current = Number(product); // Assuming `product` is a string, hence Number()

  // Calculate circular distance
  const diff = Math.abs(ind - current);
  const circularDiff = Math.min(diff, total - diff);

  if (circularDiff <= 3 && ind !== current) {
    return (
        <div key={ind}>
      <div className="w-35 h-35 overflow-hidden rounded-2xl hover:scale-105 active:scale-95 transition-scale ease-in-out duration-200"
      onClick={()=>router.push(`/products/${ind+1}`)}
      >
        <Image src={prod.image} alt="img" width={140} height={0} />
      </div>
      <div className="text-sm pb-5 w-35">{prod.name}</div>
      </div>
    );
  }
})}

        </div>
    </div>
    )
}