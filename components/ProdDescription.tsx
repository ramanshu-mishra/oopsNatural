"use client"
import {AnimatePresence, motion} from "motion/react";
import { products } from "@/data/products";
import { useState } from "react"
import { div } from "motion/react-client";

const tabs = ["Description", "Specifications", "Reviews", "FAQs"];

export default function Page({prodId}:{prodId:number}){
    const [num,setNum] = useState(0);

    return (
        <div className="w-full min-h-10  ">
                        <motion.div className="w-full flex justify-between px-5 items-center mt-2 text-lg">
                            <AnimatePresence>
                            {tabs.map((tab,idx)=>{
                                return <motion.button key={idx} className="px-4 py-2 shadow-cardShadow rounded-full"
                                animate={{backgroundColor: idx==num ? "var(--color-neutral-400)": "transparent"}}
                                transition={{duration: 1}}
                                onClick={()=>{setNum(idx)}}
                                >{tab}</motion.button>
                            })}
                            </AnimatePresence>
                        </motion.div>
                        <div className="bg-neutral-800/50 h-0.5 w-full mt-1"></div>
                        <div className="w-full shadow-cardShadow max-h-70 rounded-3xl my-2 overflow-y-auto px-5 py-4 bg-white text-neutral-900 space-y-4">
  {products.map((prod, idx) => {
    if (idx + 1 === prodId)
      return (
        <div className="text-[17px] space-y-4" key={idx}>
          {num === 0 && (
            <div>
              {/* <h3 className="text-xl font-semibold mb-2">Description</h3> */}
              <ul className="list-disc list-inside space-y-1">
                {prod.longDescription.map((desc, ind) => (
                  <li key={ind}>{desc}</li>
                ))}
              </ul>
            </div>
          )}

          {num === 1 && (
            <div>
              {/* <h3 className="text-xl font-semibold mb-2">Specifications</h3> */}
              <ul className="list-decimal list-inside space-y-1">
                {prod.specifications.map((spec, ind) => (
                  <li key={ind}>{spec}</li>
                ))}
              </ul>
            </div>
          )}

          {num === 2 && (
            <div>
              {/* <h3 className="text-xl font-semibold mb-2">Reviews</h3> */}
              <div className="space-y-2">
                {prod.reviews.map((review, ind) => (
                  <div key={ind} className="p-3 bg-neutral-100 rounded-md">
                    {review}
                  </div>
                ))}
              </div>
            </div>
          )}

          {num === 3 && (
            <div>
              {/* <h3 className="text-xl font-semibold mb-2">FAQs</h3> */}
              <div className="space-y-4">
                {prod.faqs.map((faq, ind) => (
                  <div key={ind} className="bg-neutral-100 p-3 rounded-lg">
                    <p className="font-medium">
                      {ind + 1}. {faq.question}
                    </p>
                    <p className="text-sm mt-1">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
  })}
</div>

                    </div>
    )
}