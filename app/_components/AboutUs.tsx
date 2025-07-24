import Image from 'next/image'
import mail from '@/public/assets/gmail.png'
import { TbCertificate } from 'react-icons/tb'
import { RiTeamLine } from 'react-icons/ri'
import AboutImage from './AboutImage'
import { IoCallOutline } from 'react-icons/io5'


export default function AboutUs() {
  return (
    <div className='w-full flex overflow-x-hidden p-5 lg:p-7 xl:p-16'>
    <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 xl:gap-16">
    <AboutImage/>

    <div className='w-full lg:w-55p mx-auto flex flex-col space-y-3'>
    <div className="flex space-x-3">
        <Image src="/assets/deployment-pattern.png" height={5} width={25} alt="pattern icon"/>
        <p className="text-primary font-bold text-base uppercase">About Us</p>
        </div>
        <p className="capitalize font-bold text-xl md:text-2xl xl:text-3xl my-3">We Enhance Business Success through Innovative <span className='text-primary'> IT Solutions </span></p>
        <p className='text-sm text-justify'>we help businesses thrive with tailored IT solutions. From streamlining operations to improving efficiency, our expert team leverages cutting-edge technologies to drive growth and success. Whether through cloud services, automation, or custom software, we provide scalable, results-driven solutions to meet your unique needs and future-proof your business.</p>

        <div className="flex items-center justify-between">
            <div className="flex space-x-2">
            <TbCertificate className='text-primary text-6xl'/>
            <div className="flex flex-col justify-between">
                <p className='font-bold text-base md:text-xl'>Certified Company</p>
                <p className='text-stone-400 text-sm md:text-base'>Certified Skill Services</p>
            </div>
            </div>
            <div className="flex space-x-2">
            <RiTeamLine className='text-primary text-6xl'/>
            <div className="flex flex-col justify-between">
                <p className='font-bold text-base md:text-xl'>Expert Team</p>
                <p className='text-stone-400 text-sm md:text-base'>100% Expert Team</p>
            </div>
            </div>
        </div>

    <div className="flex flex-col md:flex-row space-x-1 items-center justify-between">
    {/* <div className="flex space-x-1 items-center">
    <Button>Discover More</Button>    
    </div> */}
        <div className="flex space-x-1 items-center">
        <IoCallOutline className='text-4xl text-primary' />
            <div className='flex flex-col'>
                <p className="text-sm font-bold">Contact Us On</p>
                <p className="text-xs lg:text-[8px] xl:text-xs">+234 807 254 3373</p>
            </div>
        </div>
        <div className="flex space-x-1 items-center">
            <div className="relative h-5 xl:h-10 w-5 xl:w-10">
            <Image src={mail} alt="mail icon" fill className='object-cover'/>
            </div>
            <div className='flex flex-col'>
                <p className="text-sm font-bold">Email</p>
                <p className="text-xs lg:text-[8px] xl:text-xs">infinitesolution11@gmail.com</p>
            </div>
        </div>
        
    </div>
    </div>
    </div>

    </div>
  )
}
