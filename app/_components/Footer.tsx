import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoCallOutline } from 'react-icons/io5'
import { FaMapLocationDot } from 'react-icons/fa6'
import bg from '@/public/assets/footer-bg.jpg'
import mail from '@/public/assets/gmail.png'
import Button from '../_ui/Button'
import Socials from './Socials'


export default function Footer() {
  return (
    <footer>
    <div className="relative w-full p-10 md:px-16">
    {/* Background */}
    <Image src={bg} fill alt="background testimonial image"  className="-z-10 object-center md:object-fit brightness-75"/>
      {/* Footer Infomations */}
      <div className="flex flex-wrap items-start justify-center xl:justify-between gap-5 md:gap-10 text-white">
        {/* Box One 1 */}
        <div className='flex flex-col space-y-3 w-72'>
        <div className='flex space-x-2'>
        <div><Image src="/assets/Infinite soln brand logo 001_20250111_180148_0000 (1).svg" width={55} height={40} alt='IGS Logo'/></div>

            <p className='font-bold text-xl lg:text-2xl text-primary'>Infinite <span className='text-white'>Solutions</span></p>
        </div>
        <p className=''>Infinite Solutions is driven by innovation and advanced technology, delivering comprehensive solutions that power business growth, enhance efficiency, and keep your company ahead in a competitive landscape.</p>

        {/* Social media links */}
        <Socials styles='text-white  border-white hover:text-primary hover:border-primary'/>
        </div>

        {/* Box One 2 */}
        <div className='flex flex-col space-y-3 w-40'>
            <p className='font-bold text-xl text-primary'>Quick Links</p>
            <div className='flex flex-col space-y-2'>
                <Link href="/career" className='hover:underline hover:cursor-pointer hover:text-primary'>Careers</Link>
                <Link href="/about" className='hover:underline hover:cursor-pointer hover:text-primary'>About Us</Link>
                <Link href="/contact" className='hover:underline hover:cursor-pointer hover:text-primary'>Contact</Link>
                <Link href="/blog" className='hover:underline hover:cursor-pointer hover:text-primary'>Blog</Link>
                <Link href="#" className='hover:underline hover:cursor-pointer hover:text-primary'>Terms of Service</Link>
            </div>
        </div>

        {/* Box One 3 */}
        <div className='flex flex-col space-y-3 w-60'>
            <p className='font-bold text-xl text-primary'>Contact Us</p>
            <div className='flex flex-col space-y-3'>
                <div className="flex space-x-2">
                <IoCallOutline className='text-2xl text-primary' />
                <p className='text-justify'>+234 807 254 3373</p>
                </div>
                <div className="flex space-x-2">
                <IoCallOutline className='text-2xl text-primary' />
                <p className='text-justify'>+234 807 254 3373</p>
                </div>
                <div className="flex space-x-2">
                <FaMapLocationDot className='text-4xl text-primary' />
                <p className='text-[0.9rem]'>Opposite Novare Lekki, White Dove Street, Lagos Nigeria</p>
                </div>
                <div className="flex space-x-2">
                <div className="relative h-5 w-5">
                <Image src={mail} alt="mail icon" fill className='object-cover'/>
                </div>
                <p className='text-[0.9rem]'>infinitesolution11@gmail.com</p>
                </div>
                
            </div>
        </div>

         {/* Box One 4 */}
         <div className='flex flex-col space-y-3 w-72 lg:w-80'>
            <p className='font-bold text-xl text-primary'>Newsletter</p>
            <div className='flex flex-col space-y-2'>
                <p className='text-justify'>Join our newsletter to stay up to date on features and releases.</p>
                <div className="flex flex-col lg:flex-row items-center jusstify-between space-y-2 lg:space-y-0 lg:space-x-2">
                <input type="text" placeholder='Enter your email' className='px-2 py-1 rounded-md focus:outline-none bg-transparent border border-hover'/>
                <Button>Subscribe</Button>
                </div>
                <p className='text-justify text-sm'>By subscribing you agree with our privacy policy and provide consent to receive updates from our company.</p>
            </div>
        </div>
      </div>
    </div>

    <div className="text-center text-xs md:text-sm p-3 bg-accent text-white">&copy; 2025 Infinte Solutions | All Rights Reserved.</div>
    </footer>
  )
}
