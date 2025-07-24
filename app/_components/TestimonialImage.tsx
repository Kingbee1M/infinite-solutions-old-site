"use client"

import Image from 'next/image'
import image1 from "@/public/assets/img34.png";
import image2 from "@/public/assets/img 7.png";
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"

export default function TestimonialImage() {
    useEffect(()=>{
        Aos.init({duration:2000})
        Aos.refresh()
    },[])
  return (
    <div data-aos="fade-right"
    className="flex flex-col md:flex-row items-center md:items-start justify-center">
    <div className="relative w-52 md:w-1/2 h-[300px]">
        <Image src={image1} fill alt="testimonial" className="w-full" />
    </div>
    <div className="relative w-52 md:w-1/2 h-[300px] mt-5 md:mt-28">
        <Image src={image2} fill alt="testimonial" className="w-full" />
    </div>
</div>
  )
}
