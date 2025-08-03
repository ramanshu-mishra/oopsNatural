"use client"
import { createContext } from "react";
const SearchContext = createContext<{x:string, y: React.Dispatch<React.SetStateAction<string>>}>({x:"", y: ()=>{}})

export {SearchContext};