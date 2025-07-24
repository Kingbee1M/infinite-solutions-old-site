import Image from "next/image";
import bg from "@/public/assets/frame-bg.jpg"
import Button from "../_ui/Button";
import Socials from "./Socials";

export default function CareerSubscribe() {
  return (
    <div className="relative flex flex-col items-center justify-center h-64 lg:h-60 w-full p-5 lg:p-10">
      <Image src={bg} fill alt="bg" className="object-center -z-10" />
      <div className="max-w-3xl space-y-3 mx-auto flex flex-col items-center justify-center">
      <p className="text-base md:text-xl lg:text-2xl text-white text-center font-semibold ">Be the first to know about new jobs</p>
      <p className="text-xs md:text-sm text-white text-center">we&apos;re growing fast and always looking for smart people. Be the first to know</p>
            <div className="flex flex-col w-full lg:flex-row items-center jusstify-between space-y-2 lg:space-y-0 lg:space-x-2">
            <input type="text" placeholder='Enter your email' className='flex-1 px-2 py-1 rounded-md focus:outline-none bg-transparent border border-hover bg-white'/>
                <Button>Subscribe</Button>
            </div>
      </div>
      <div className="mt-5  place-self-center lg:place-self-end">
      <Socials styles='text-2xl text-white border-white hover:text-primary hover:border-primary'/>
      </div>
    </div>
  )
}
