"use client"
import React from 'react';
import Image from 'next/image';
import logo from "../public/img/logo.png"
import {motion} from "motion/react"



function Footer(){
    return (
        <footer className='bg-[#290e0e] text-white text-center px-10 py-12' id='id_footer'>
                    <div className='flex justify-between'>
                        <div className='flex gap-2'> 
                            <Image src={logo} alt='logo' height={150} className='rounded-lg'></Image>
                            <div className='flex flex-col gap-2 items-start text-[#c7c1b6]'>
                                <div className='font-semibold text-4xl sm:text-5xl '>Ops Natural Spices & Food</div>
                                <div>स्वाद जो ले आये माँ के हाथों की याद - Ops Natural.</div>
                                <div className='flex flex-col items-start '>
                                <p>📞 +91 74600 51297</p>
                                <p>✉ <span className="">customercare@domain</span></p>
                            </div>
                            </div>
                            
                        </div>
                        <div className=' flex-1'> 
                                <div className='flex flex-col gap-1 items-center'>
                                    <div>Subscribe to our newsletter to get latest updates and offers!</div>
                                    <div className='border-2 border-neutral-50 w-[70%] rounded-full py-2 px-2  flex'>
                                        <input type='email' className='w-full focus:outline-0'></input>
                                        <motion.button type='submit' className='text-black bg-neutral-50 rounded-full px-4 py-1 active:scale-[0.95]'
                                        onClick={(e)=>{e.preventDefault()}}
                                        >Subscribe</motion.button>
                                    </div>
                                </div>
                        </div>
                    </div>
        </footer>
    )
}

export default Footer;
