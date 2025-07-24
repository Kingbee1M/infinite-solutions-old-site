"use client"

import { useState, useEffect } from 'react';
import Image from "next/image";
import bg from "@/public/assets/home-bg.png";
import bg2 from "@/public/assets/home-bg2.png";
import bg3 from "@/public/assets/home-bg3.png";
import bg4 from "@/public/assets/home-bg4.png";

export default function Background() {
        // Array of background image URLs
        const images = [
          bg,
          bg2,
          bg3,
          bg4,
        ];
      
        // State to track the current image index
        const [currentImage, setCurrentImage] = useState(0);
      
        useEffect(() => {
          // Set up the interval to change the background image every 5 seconds
          const interval = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
          }, 4000); // Change every 4 seconds
      
          return () => clearInterval(interval);
        }, [images.length]);
        
  return (
    <Image src={images[currentImage]} placeholder="blur" fill quality={100} className="brightness-50 object-cover lg:object-fill -z-10" alt="programming background" />
  )
}
