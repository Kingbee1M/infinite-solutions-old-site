import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6'
import { SocialsProp } from "../_types/type";

export default function Socials({styles}:SocialsProp) {
  return (
    <div className="flex space-x-3">
    <Link href="https://www.instagram.com/infinitesolution10/">
    <FaInstagram className={`text-4xl font-bold hover:cursor-pointer border p-2 rounded-full ${styles ? styles : 'text-white  border-white'}`}/>
    </Link>
    <Link href="https://x.com/Infiniteso4776">
        <FaXTwitter className={`text-4xl font-bold hover:cursor-pointer border p-2 rounded-full ${styles ? styles : 'text-white  border-white'}`}/>
    </Link>
    <Link href="https://web.facebook.com/profile.php?id=61571397825650">
    <FaFacebookF className={`text-4xl font-bold hover:cursor-pointer border p-2 rounded-full ${styles ? styles : 'text-white  border-white'}`}/>
    </Link>
    <Link href=" linkedin.com/company/infinite-solution-tech">
    <FaLinkedinIn className={`text-4xl font-bold hover:cursor-pointer border p-2 rounded-full ${styles ? styles : 'text-white  border-white'}`}/>
    </Link>
    </div>
  )
}
