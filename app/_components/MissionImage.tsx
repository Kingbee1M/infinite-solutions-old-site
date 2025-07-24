"use client"

import Image from "next/image"
import image from "@/public/assets/mission-img.png"
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"

export default function MissionImage() {
    useEffect(()=>{
        Aos.init({duration:2000})
        Aos.refresh()
    },[])
  return (
    <div data-aos="fade-down-right" className='relative w-full h-96'>
    <Image src={image} alt='office picture' fill className='object-fill' />
     </div>
  )
}
