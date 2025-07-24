"use client"

import Image from "next/image";
import image from "@/public/assets/community.png"
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"

export default function GettingStartImage() {
    useEffect(()=>{
        Aos.init({duration:2000})
        Aos.refresh()
    },[])

    return (
    <div data-aos="fade-down" className="w-full lg:w-1/2 mx-auto flex flex-col items-center lg:items-start justify-center">
        <div className='relative w-full md:w-3/4 mx-auto h-60 lg:h-72'>
       <Image src={image} alt='office picture' fill className='object-fill' />
        </div>
    </div>
    )
}