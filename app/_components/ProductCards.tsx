import Image from "next/image";
import Button from "../_ui/Button";
import { ProductsProp } from "../_types/type";

const products = [
  {
    img: "/assets/web.png",
    img2: "/assets/web 1.png",
    title: "Web Development",
    desc: "Unlock the power of innovative web development! Create seamless, engaging websites tailored to your business."
  },
  {
    img: "/assets/seo.png",
    img2: "/assets/seo 1.png",
    title: "SEO Optimization",
    desc: "Boost your online presence with expert SEO optimization! Improve rankings, drive traffic, and grow your business."
  },
  {
    img: "/assets/app.png",
    img2: "/assets/app 1.png",
    title: "App Development",
    desc: "Transform your ideas into powerful mobile apps! We create user-friendly, high-performance apps tailored to your needs."
  },
]

export default function ProductCards() {
  return (
    <div className="w-full flex">
    <div
     className="flex flex-wrap flex-1 items-center justify-center lg:flex-row xl:justify-between max-w-6xl mx-auto md:-mt-20 mb-20 gap-5 lg:gap-8">
      {products.map((product, index) => <Card product={product} key={index} index={index}/>)}
    </div>
    </div>
  )
}

function Card({product, index}:ProductsProp) {
    const {img, img2, title, desc} = product
    //Formatting the Index
    const productIndex = index > 10 ? index+ 1 : `0${index + 1}`

  return (
    <div className=" group  relative overflow-hidden p-5 rounded-xl bg-white text-accent hover:text-white h-[310px] w-60 lg:w-64 xl:w-72 shadow-xl hover:scale-110 transition-all duration-3000 hover:bg-card-pattern bg-cover  bg-[bottom_right] group-hover:bg-[top_right]">
        <div className="flex items-center justify-between">
            <Image src={img} width={60} height={60} alt="dev icon" className="group-hover:hidden"/>
            <Image src={img2} width={60} height={60} alt="dev icon" className=" hidden group-hover:flex"/>
            <p className="text-textColor font-bold text-[5rem] opacity-40 leading-none">{productIndex}</p>
        </div>
        <p className="font-semibold text-xl mb-2">{title}</p>
        <p className="text-sm opacity-75 group-hover:text-white">{desc}</p>
        <button className="my-3 "><Button>Learn More</Button></button>
    {/* Placing the butterfly image absolutely at the bottom right corner */}
      <Image src="/assets/butterfly.png" width={70} height={70} alt="clip art" className="absolute bottom-0 right-0 group-hover:hidden"/>
      </div>
  )
}