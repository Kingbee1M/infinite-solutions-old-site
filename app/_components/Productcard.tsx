"use client"

import { useEffect } from "react"
import Image from "next/image"
import Aos from "aos";
import "aos/dist/aos.css"
import { StaticImageData } from 'next/image';

interface ProductCardProps {
  src: StaticImageData;
  products: string;
}

export default function Productcard({ src, products }: ProductCardProps) {
    useEffect(()=>{
      Aos.init({duration:2000})
      Aos.refresh()
  },[])
    return (
      <div
        data-aos="fade-down"
        className="relative w-52 lg:w-56 h-[310px] p-5 flex flex-col items-center justify-end">
         <Image src="/assets/web.png" width={50} height={50} alt="web icon" className="my-3"/>
         <p className="text-white font-semibold text-lg">{products}</p>
         <Image src={src} fill alt="system background" className="-z-10"/>
      </div>
    )
  }