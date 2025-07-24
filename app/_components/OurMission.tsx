import Image from 'next/image'
import MissionImage from './MissionImage'

export default function OurMission() {
  return (
    <div className='w-full p-5 lg:p-7 xl:px-16'>
    <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10">
    <div className="w-full lg:w-45p lg:px-7 mx-auto flex flex-col items-center lg:items-start justify-center">
       <MissionImage/>
    </div>

    <div className='w-full lg:w-55p mx-auto flex flex-col space-y-3'>
    <p className='text-sm text-justify mb-2'><strong>Infinite Solution</strong> was founded with a passion for technology and a desire to make a difference. We have grown into a reputable web development agency, serving diverse clients across various industries. We have successfully delivered countless projects, each a testament to our dedication and innovative approach. Thank you for considering us as your web development partner. We look forward to helping you achieve your digital goals.</p>
    <div className="flex space-x-3">
        <Image src="/assets/deployment-pattern.png" height={2} width={15} alt="pattern icon"/>
        <p className="text-primary font-bold text-sm uppercase">Our Mission</p>
        </div>
        <p className="capitalize font-bold text-xl md:text-2xl my-3">Empowering your<span className='text-primary'> Digital Success </span>through  Innovative Solution</p>
        <p className='text-sm text-justify'>Our Mission is to design and develop innovative technological solutions that simplify human interactions with technology, enabling seamless and efficient experiences. We aim to empower businesses and individuals globally by creating tools and platforms that foster growth, productivity, and connectivity, transforming the way the world interacts with the digital landscape.</p>

    </div>
    </div>
    </div>
  )
}
