import Image from 'next/image'
import Socials from './Socials'
import { SlLocationPin } from 'react-icons/sl'
import { RiCustomerService2Line } from 'react-icons/ri'
import { TiLocationArrowOutline } from 'react-icons/ti'
import ContactForm from './ContactForm'

export default function ContactHero() {
  return (
    <div className='w-full p-5 lg:p-7 xl:p-16 flex'>
    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 xl:gap-16">
    <div className="w-full lg:w-1/2 mx-auto flex flex-col items-center lg:items-start justify-center">
        <div className="max-w-sm">
        <div className="flex space-x-3">
        <Image src="/assets/deployment-pattern.png" height={5} width={25} alt="pattern icon"/>
        <p className="text-primary font-bold text-base uppercase">Contact Us</p>
        </div>
        <p className="capitalize font-bold text-xl md:text-2xl my-3">Have Any questions?</p>
        <p className=''>Have a question or ready to start your transformation? Call, email, or fill out the form today and we will get back to you</p>
        <div className="flex space-x-2 items-center p-2 w-full border-b border-slate-200">
            <SlLocationPin className="h-8 w-8 text-primary"/>
            <div className='flex flex-col'>
                <p className="text-lg font-bold">Location</p>
                <p className="text-xs xl:text-sm">Opposite Novare Lekki, White Dove Street, Lagos Nigeria</p>
            </div>
        </div>
        <div className="flex space-x-2 items-center p-2 border-b border-slate-200">
            <RiCustomerService2Line className="h-8 w-8 text-primary"/>
            <div className='flex flex-col'>
                <p className="text-lg font-bold">Call Us Anytime</p>
                <p className="text-xs xl:text-sm">+234 807 254 3373</p>
            </div>
        </div>
        <div className="flex space-x-2 items-center p-2 border-b border-slate-200">
            <TiLocationArrowOutline className="h-8 w-8 text-primary"/>
            <div className='flex flex-col'>
                <p className="text-lg font-bold">Email Us</p>
                <p className="text-xs xl:text-sm">infinitesolution11@gmail.com</p>
            </div>
        </div>
        <Socials styles='text-black  border-black hover:text-primary hover:border-primary mt-10'/>
      
    </div>
    </div>

    <div className='w-full p-5 xl:p-10 lg:w-1/2 mx-auto flex flex-col space-y-3 bg-slate-100 rounded-lg text-stone-600'>
    <div className='font-bold'>Ready to Get Started?</div>
    <p className='text-xs'>Your Email address will not be published. Required fields are marked *</p>
    <ContactForm/>
    
    </div>
    </div>

    </div>
  )
}