"use client"

import Image from "next/image";
import image1 from "@/public/assets/newImage (1).jpg"
import image2 from "@/public/assets/newImage (2).jpg"
import image3 from "@/public/assets/newImage (3).jpg"
import Productcard from "./Productcard";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

export default function Products() {
  useEffect(()=>{
    Aos.init({duration:2000})
    Aos.refresh()
},[])
  return (
    <div data-aos="fade-down" className="max-w-6xl mx-auto p-2 mb-10">
        <div className="max-w-lg mx-auto flex flex-col items-center justify-center text-center">
            <div className="flex space-x-3">
            <Image src="/assets/deployment-pattern.png" height={20} width={25} alt="pattern icon"/>
            <p className="text-primary font-bold text-base uppercase">Our Products</p>
            </div>
            <p className="capitalize font-bold text-2xl md:text-4xl my-3">We offer exclusive <span className="text-primary">Product</span> for your business</p>
        </div>

        <div className="flex flex-col md:flex-wrap md:flex-row mx-auto items-center justify-center xl:justify-around gap-5 my-10">
            <Productcard src={image1} products="API Development & Integration"/>
            <Productcard src={image2} products="Maintenance & Support Services"/>
            <Productcard src={image3} products="UI/UX Design"/>
        </div>
      {/* <div className="place-self-center"><Button>VIEW ALL SERVICES</Button></div> */}
    </div>
  )
}

