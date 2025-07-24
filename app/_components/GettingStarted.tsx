import Button from "../_ui/Button";
import GettingStartImage from "./GettingStartImage";

export default function GettingStarted() {
  return (
    <div className='w-full mt-1 p-5 lg:p-7 xl:px-16 bg-slate-100'>
    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between gap-10 xl:gap-16">
    <GettingStartImage/>

    <div className='w-full lg:w-1/2 mx-auto flex flex-col space-y-3 px-2 md:px-8 xl:px-10'>
    <div className="flex space-x-3">
        </div>
        <p className="capitalize font-bold text-xl md:text-2xl my-3">We are just getting started</p>
        <p className='text-sm text-justify'><strong>Infinite Solutions</strong> is growing fast and we are always looking for passionate, dynamic and talented individuals to join our  distributed team around the word 
        <br/> <br/>
        Our philosophy is simple - hire a team of diverse, passionate people and fosters a culture that empowers you to do your best work</p>
        <Button link="/about">About Us</Button>

    </div>
    </div>
    </div>
  )
}
