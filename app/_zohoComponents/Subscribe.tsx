import Image from "next/image";
import bg from "@/public/assets/frame-bg.jpg"
//import Socials from "../_components/Socials";
import ZohoCampaignForm from "./ZohoCampaignForm";

export default function Subscribe() {
  
  return (
    <div>
     
      <div className="relative flex flex-col items-center justify-center h-72 lg:h-64 w-full p-5">
      <Image src={bg} fill alt="bg" className="object-center -z-10" />
      <div className="w-full hide-scrollbar custom-scrollbar">
      <ZohoCampaignForm/>
      </div>
    {/* <div className="items-baseline place-self-center lg:place-self-end">
      <Socials styles='text-2xl text-white border-white hover:text-primary hover:border-primary'/>
      </div> */}
    </div>
    </div>
  );
}

