import React from 'react'
import Image from 'next/image'
import Socials from './Socials'
import mail from '@/public/assets/gmail.png'
import ContactForm from './ContactForm'
import { IoCallOutline } from 'react-icons/io5'
import { FaMapLocationDot } from 'react-icons/fa6'

export default function ContactHero() {
  return (
    <div className='w-full p-5 lg:p-7 xl:p-16'>
    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 xl:gap-16">
    <div className="w-full lg:w-1/2 mx-auto flex flex-col items-center lg:items-start justify-center">
        <div className="flex space-x-3">
        <Image src="/assets/deployment-pattern.png" height={5} width={25} alt="pattern icon"/>
        <p className="text-primary font-bold text-base uppercase">Contact Us</p>
        </div>
        <p className="capitalize font-bold text-xl md:text-2xl my-3">Reach Out to us for any Inquiry</p>
        <ContactForm/>
    </div>

    <div className='relative w-full lg:w-1/2 mx-auto flex flex-col space-y-3'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d203835.40117213034!2d3.2940823281250355!3d6.472971559697801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sng!4v1736528270864!5m2!1sen!2sng" width="100%" height="100%" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className=''>
    </iframe>
    <div className="absolute top-1 right-1">
        <Socials styles='text-white  border-white hover:text-primary hover:border-primary'/>
    </div>
    <div className="flex flex-col md:flex-row lg:flex-col xl:flex-row space-x-1 items-start justify-between">
        <div className="flex space-x-1 items-center">
            <IoCallOutline className='text-4xl text-primary' />
            <div className='flex flex-col'>
                <p className="text-sm font-bold">Phone</p>
                <p className="text-xs lg:text-sm">+234 807 254 3373</p>
            </div>
        </div>
        <div className="flex space-x-1 items-center">
            <div className="relative h-10 w-10">
            <Image src={mail} alt="mail icon" fill className='object-cover'/>
            </div>
            <div className='flex flex-col'>
                <p className="text-sm font-bold">Email</p>
                <p className="text-xs lg:text-sm">infinitesolution11@gmail.com</p>
            </div>
        </div>
        
    </div>
    <div className="flex space-x-2 items-center justify-center">
        <FaMapLocationDot className='text-4xl text-primary' />
            <div className='flex flex-col'>
                <p className="text-sm font-bold">Address</p>
                <p className="text-xs">Opposite Novare Lekki, White Dove Street, Lagos Nigeria</p>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

