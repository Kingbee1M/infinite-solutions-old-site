import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
interface TeamCardProp {
  data: {
    src: string | StaticImageData;
    name: string;
    title: string;
    facebook: string;
    twitter: string;
    instagram: string;
    linken: string;
  };
}

export default function TeamCard({ data }: TeamCardProp) {
  const { src, name, title, facebook, twitter, instagram, linken } = data;

  return (
    <div className="group relative flex flex-col items-center justify-center">
      <div className="relative w-52 h-64 flex items-center justify-end rounded-xl overflow-hidden">
        <Image
          src={src}
          fill
          alt="system background"
          className="-z-10 rounded-xl transform group-hover:scale-110 transition duration-300 ease-in-out"
        />
        <div className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 translate-y-16  flex flex-row justify-center group-hover:flex group-hover:translate-y-[-10px] gap-3 bg-white p-6 w-150 h-150 rounded-full transition-transform duration-500 ease-in-out">
        {facebook && (
    <a href={facebook} target="_blank" rel="noopener noreferrer">
      <FaFacebookF className="hover:fill-primary w-2" />
    </a>
  )}
  {twitter && (
    <a href={twitter} target="_blank" rel="noopener noreferrer">
      <RiTwitterXFill className="hover:fill-primary w-3" />
    </a>
  )}
  {instagram && (
    <a href={instagram} target="_blank" rel="noopener noreferrer">
      <FaInstagram className="hover:fill-primary w-3" />
    </a>
  )}
  {linken && (
    <a href={linken} target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn className="hover:fill-primary w-3" />
    </a>
  )}
        </div>
      </div>

      <div className="absolute bottom-0 w-5/6 bg-white p-3 rounded-xl text-center transform translate-y-1/2 group-hover:bg-primary">
        <p className="font-bold text-accent text-sm group-hover:text-white">{name}</p>
        <p className="text-sm text-primary group-hover:text-white">{title}</p>
      </div>
    </div>
  );
}