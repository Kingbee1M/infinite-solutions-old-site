"use client"

import Image from "next/image";
import image from "@/public/assets/vision-img.png"
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"

export default function VisionImage() {
    useEffect(()=>{
        Aos.init({duration:2000})
        Aos.refresh()
    },[])

  return (
    <div data-aos="fade-down-left" className="w-full lg:w-55p mx-auto flex flex-col items-center lg:items-start justify-center">
        <div className='relative w-full mx-auto h-60'>
       <Image src={image} alt='office picture' fill className='object-fill' />
        </div>
    </div>
  )
}
