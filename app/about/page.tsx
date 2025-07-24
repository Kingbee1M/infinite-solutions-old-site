import AboutUs from "../_components/AboutUs";
import BriefHistory from "../_components/BriefHistory";
import OurMission from "../_components/OurMission";
import OurTeam from "../_components/OurTeam";
import OurVision from "../_components/OurVision";
import StayAhead from "../_components/StayAhead";
import PageHero from "../_ui/PageHero";
import bg from "@/public/assets/about-bg.png"

export const metadata = {
  title: 'About Us',
  description: 'We Enhance Business Success through Innovative IT solutions.',
}

export default function About() {
  return (
    <>
    <PageHero bg={bg}>about us</PageHero>
    <AboutUs />
    <BriefHistory />
    <OurMission />
    <OurVision />
    <OurTeam />
    <StayAhead />
    </>
  )
}
