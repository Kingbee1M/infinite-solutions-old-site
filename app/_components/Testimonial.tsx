import Image from "next/image";
import bg from "@/public/assets/img.png";
import TestimonialImage from "./TestimonialImage";

export default function Testimonial() {
  return (
    <div className="relative w-full p-10 md:px-12">
        {/* Background */}
    <Image src={bg} fill alt="background testimonial image"  className="-z-10 object-cover md:object-fit"/>

    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* First Frame */}
        <div className="w-full lg:w-1/2">
            <TestimonialImage/>
        </div>

        {/* Second frame */}
        <div className="w-full lg:w-1/2 text-white">
            {/* <div className="max-w-lg mx-auto flex flex-col items-start justify-center">
            <div className="flex space-x-3">
            <Image src="/assets/deployment-pattern.png" height={20} width={25} alt="pattern icon"/>
            <p className="text-primary font-bold text-base uppercase">Testimonials</p>
            </div>
            <p className="capitalize font-bold text-2xl md:text-4xl my-3">What Our Clients Are Saying</p>
            <Testimony/>
       
          </div> */}
        
        </div>
      
    </div>
    </div>
  )
}

// function Testimony() {
//   return (
//     <>
//     <div className="flex">
//             <Image src="/assets/star.png" height={20} width={20} alt="star icon"/>
//             <Image src="/assets/star.png" height={20} width={20} alt="star icon"/>
//             <Image src="/assets/star.png" height={20} width={20} alt="star icon"/>
//             <Image src="/assets/star.png" height={20} width={20} alt="star icon"/>
//             <Image src="/assets/star.png" height={20} width={20} alt="star icon"/>
//             </div>
//             <p className="text-justify mt-2 pr-5">&ldquo;Partnering with Nova Core was a game-changer for our business. Their expertise, responsiveness, and innovative solutions exceeded our expectations, streamlining our processes and significantly improving our results. We highly recommend them for any development needs.&rdquo;</p>
        
//     <div className="flex items-center justify-start space-x-3 my-2">
//     <Image src="/assets/Ellipse 8.png" height={60} width={60} alt="profile picture"/>
//     <div className="flex flex-col space-y-2">
//         <p className="text-xl font-semibold">Drey Gabby</p>
//         <p className="">Tech Consultant</p>
//     </div>
//     </div>
//     <div className="place-items-baseline flex space-x-2 my-6">
//             <div className="h-2 w-2 rounded-full bg-primary"></div>
//             <div className="h-2 w-2 rounded-full bg-white"></div>
//             <div className="h-2 w-2 rounded-full bg-white"></div>
//         </div>
//     </>
//   )
// }