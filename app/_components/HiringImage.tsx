"use client"

import Image from "next/image"
import image from "@/public/assets/Hiring.png"
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"


export default function HiringImage() {
    useEffect(()=>{
        Aos.init({duration:2000})
        Aos.refresh()
    },[])

  return (
    <div data-aos="fade-up" className="w-full lg:w-1/3 mx-auto flex flex-col items-center lg:items-start justify-center">
        <div className='relative w-3/4 mx-auto h-40'>
       <Image src={image} alt='office picture' fill className='object-fill' />
        </div>
    </div>
  )
}
