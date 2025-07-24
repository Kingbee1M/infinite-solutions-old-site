import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Hamburger from "./Hamburger"
import ModalButton from './UseModal'
import logo from "@/public/assets/Infinite soln brand logo 001_20250111_180148_0000 (1).svg"


export default function NavBar() {
  return (
<div className='flex items-center justify-between bg-black px-5 lg:px-10 py-2 text-white w-full'>
      <div className='flex  lg:w-1/2 items-center justify-between'>
      <Link href="/">
        <div className='relative h-10 w-12 sm:w-16'>
          <Image src={logo} fill alt='IGS Logo' className='object-cover'/>
          </div>
      </Link>
      <nav className='hidden lg:flex items-center space-x-5 lg:space-x-10 xl:space-x-14'>
        <Link href="/" className='hover:text-primary hover:border-b-2 border-primary hover:scale-110 transition-all duration-200'>
            Home
        </Link>
        <Link href="/about" className='hover:text-primary hover:border-b-2 border-primary hover:scale-110 transition-all duration-200'>
            About Us
        </Link>
        <Link href="/career" className='hover:text-primary hover:border-b-2 border-primary hover:scale-110 transition-all duration-200'>
            Careers
        </Link>
        <Link href="/contact" className='hover:text-primary hover:border-b-2 border-primary hover:scale-110 transition-all duration-200'>
            Contact
        </Link>
      </nav>
      </div>
    <div className="flex items-center justify-center space-x-3">
    {/* Search bar removed */}
    {/* <div className="relative">
    <span className="absolute inset-y-0 right-0 flex items-center pr-3">
    <div>
        <Image src="/assets/circum_search.png" alt='search icon' height={25} width={25}/>
    </div>
    </span>
    <input
    type="text"
    placeholder="Search"
    className="w-32 md:focus:w-40 lg:focus:w-56 transition-all duration-300 pl-4 pr-10 py-2 border rounded-full bg-transparent focus:outline-none"
    />
    </div> */}
    <div className='hidden lg:block'>
    <ModalButton type='login'>Login</ModalButton>
    </div>
    </div>
      <div className='lg:hidden'>
        <Hamburger/>
      </div>
</div>
  )
}
