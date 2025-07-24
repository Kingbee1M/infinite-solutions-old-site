import Image from "next/image";
import bg from "@/public/assets/frame-bg.jpg"
import Button from "../_ui/Button";

export default function StayAhead() {
  return (
    <div className="relative flex flex-col items-center justify-center h-56 w-full p-5 lg:p-10">
      <Image src={bg} fill alt="bg" className="object-center -z-10" />
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
      <p className="text-base md:text-xl lg:text-2xl text-white text-center font-semibold my-3 lg:my-5">Ready to innovate and stay ahead? Let&apos;s leverage data and modernize your technology for impactful growth.</p>
      <Button link="/contact">Contact Us Today</Button>
      </div>
    </div>
  )
}
