import Image from 'next/image'

import TeamCard from './TeamCard'
//import bg from "@/public/assets/pattern bg.png"
//import image1 from "@/public/assets/img 6.png"
import joseph  from "@/public/images/joseph.png"

const team = [
    {
        name: "Gabriel Joseph",
        title: "Co-Founder/COO",
        src: joseph,
        facebook: "",
        instagram: "",
        twitter: "",
        linken: "",
    },
    {
        name: "Chisom Ozowara",
        title: "Founder/CEO",
        src: "/assets/chisom.jpeg",
        facebook: "",
        instagram: "",
        twitter: "",
        linken: "https://www.linkedin.com/in/chisom-ozowara-53512a1b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {

        name: "Kolapo Olaronke",
        title: "CFO",
        src: "/assets/Kolapo.jpeg",
        facebook: "",
        instagram: "https://www.instagram.com/o_laronke/?utm_source=ig_web_button_share_sheet",
        twitter: "",
        linken: "",
    },
    
    {
        name: "Favour Chamberlain",
        title: "CTO",
        src: "/assets/favour.jpg",
        facebook: "https://www.linkedin.com/in/favour-chamberlain",
        instagram: "https://www.instagram.com/favstar.tsx",
        twitter: "",
        linken: "https://www.linkedin.com/in/favour-chamberlain",
    },
    {
        name: "Britney Agu",
        title: "CMO",
        src: "/assets/Britney.png",
        facebook: "",
        instagram: "",
        twitter: "",
        linken: "",
    },
]
export default function OurTeam() {
  return (
    <div className="relative w-full p-10 md:px-12">
    
    <div className="max-w-xl px-2 mx-auto flex flex-col text-center items-center justify-center mt-2">
    <div className="flex space-x-3">
    <Image src="/assets/deployment-pattern.png" height={20} width={25} alt="pattern icon"/>
    <p className="text-primary font-bold text-base uppercase">Meet The Team</p>
    </div>
    <p className="capitalize font-bold text-2xl md:text-3xl my-3">Meet Our Team Of <span className="text-primary">Experts</span></p>
    </div>

    <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-10 lg:gap-20">
    {team.map((member, index) => <TeamCard data={member} key={index}/>)}
    </div>
    </div>
  )
}
