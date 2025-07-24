import { Suspense } from "react"
import ContactHero from "./_components/ContactHero"
import HomeHero from "./_components/HomeHero"
import ProductCards from "./_components/ProductCards"
import Products from "./_components/Products"
//import Testimonial from "./_components/Testimonial"
import ZohoCampaignForm from "./_zohoComponents/ZohoCampaignForm"
import Loading from "./loading"


export default function Home() {
  return (
    <>
    <Suspense fallback={<Loading/>}>
    <HomeHero/>
    <ProductCards/>
    <Products/>
    {/* <Testimonial/> */}
    <ContactHero/>
    <ZohoCampaignForm/>
    {/* <OldSubscribe/> */}
    </Suspense>
    </>
  )
}
