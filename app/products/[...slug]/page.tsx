import ProdDescription from "../../../components/ProdDescription";
import { products } from "@/data/products";
import Image from "next/image";
import MotionImage from "@/components/motionImage";
import Explore from "../../../components/Explore";




export default async function Page({params}:{params: Promise<{slug: string[]}>}){
    const path = await params;
    const product = (await params).slug[0];
    console.log(product);
    // product reviews should be fetched from the database but instead i am going to hardcode them for now 
    // idealy prices and other facts should also be fethed from the database but I am hardcoding all of them for now on. Neither I am getting paid nor founder wants any backend interactivity 
    return(
        <div className="flex flex-col w-full items-center bg-neutral-50  ">
                 <div className="flex flex-col h-auto w-[85%] bg-white px-5 my-2 rounded-3xl shadow-cardShadow ">
        {products.map((prod, idx)=>{
            // console.log(idx)
           if((idx+1).toString().trim() == product) return (<div className="flex flex-col " key={idx}>
                    <div className="flex py-4 px-2 gap-10 ">
                        <MotionImage layoutId="img">
                            <Image src={prod.image} alt="image" width={400} height={400} className="w-110 rounded-3xl shadow-cardShadow"></Image>
                        </MotionImage>
                       
                       <div className="flex flex-col  flex-1 min-w-70 py-2 px-10 ">
                            <div className="text-3xl font-semibold text-neutral-900">{prod.name}</div>
                            <div className="flex gap-2 mt-10 text-sm">
                                <div className=""><span className="font-semibold ">MRP</span>: <span className="line-through">₹{prod.mrp}</span></div>
                                <div className="font-bold text-lg reletive -translate-y-1 text-red-400"> ₹{prod.price}</div>
                                <div className="text-neutral-800">incl. of all taxes</div>
                            </div>
                            <div className="text-amber-800 text-lg">Save ₹{prod.mrp - prod.price}</div>
                            <div className="flex flex-1  justify-center items-center">
                                <div className="h-30 px-10 rounded-lg  shadow-cardShadow flex justify-center items-center">
                                    <div className="font-semibold text-2xl text-neutral-800">Not Availble for SALE</div>
                                </div>
                            </div>
                       </div>
                    </div>
                    <ProdDescription prodId = {Number(product)}></ProdDescription>
                    <Explore product={product}></Explore>
            </div>)
        })}
    </div>
    
        </div>
   )
     
}

