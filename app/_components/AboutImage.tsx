"use client"

import Image from 'next/image'
import image from '@/public/assets/slashdisplay.png'
import { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css"

export default function AboutImage() {
    useEffect(()=>{
        Aos.init({duration:2000})
        Aos.refresh()
    },[])
  return (
    <div data-aos="fade-left" className="w-full lg:w-45p mx-auto flex flex-col items-center lg:items-start justify-center">
        <div className='relative w-full h-96'>
       <Image src={image} alt='office picture' fill className='object-cover' />
        </div>
    </div>
  )
}
