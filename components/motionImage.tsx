"use client"
import {motion} from "motion/react";
export default function MotionImage({children,layoutId}:{layoutId?: string,children:React.ReactNode}){
    
    return (
        <motion.div layoutId={layoutId}>
            {children}
        </motion.div>
    )
}