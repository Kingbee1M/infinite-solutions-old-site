import Image from 'next/image'
import VisionImage from './VisionImage'

export default function OurVision() {
  return (
    <div className='w-full p-5 lg:p-7 xl:px-16'>
    <div className="max-w-4xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between gap-10">
    <VisionImage/>

    <div className='w-full lg:w-45p mx-auto flex flex-col space-y-3 px-2 md:px-5'>
    <div className="flex space-x-3">
        <Image src="/assets/deployment-pattern.png" height={2} width={15} alt="pattern icon"/>
        <p className="text-primary font-bold text-sm uppercase">Our Vision</p>
        </div>
        <p className="capitalize font-bold text-xl md:text-2xl my-3">Empowering your<span className='text-primary'> Digital Success </span>through  Innovative Solution</p>
        <p className='text-sm text-justify'>Our Vision is to revolutionize how people connect and engage with technology by creating seamless, intuitive experiences that empower businesses and individuals worldwide, driving innovation, growth, and meaningful digital transformation.</p>

    </div>
    </div>
    </div>
  )
}
