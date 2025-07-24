import Image from "next/image";
import HiringImage from "./HiringImage";

export default function Hiring() {
  return (
    <div className='w-full p-5 lg:p-7 xl:px-16'>
    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between gap-10 xl:gap-16">
    <HiringImage/>

    <div className='w-full lg:w-2/3 mx-auto flex flex-col space-y-3 px-2 md:px-8 xl:px-10'>
    <div className="flex space-x-3">
        <Image src="/assets/deployment-pattern.png" height={2} width={15} alt="pattern icon"/>
        <p className="text-primary font-bold text-sm uppercase">We&apos;re Hiring</p>
        </div>
        <p className="capitalize font-bold text-xl md:text-2xl my-3">Be Part of Our<span className='text-primary'> Mission</span></p>
        <p className='text-sm text-justify'>We&apos;re looking for passionate individuals to join us on our mission to drive innovation and success. Be a part of a dynamic team committed to creating impactful solutions and shaping the future.</p>

    </div>
    </div>
    </div>
  )
}
