import PageHero from "../_ui/PageHero";
import ContactSection from "../_components/ContactSection";
import ContactMap from "../_components/ContactMap";
import StayAhead from "../_components/StayAhead";
import bg from "@/public/assets/contact-bg.png"

export const metadata = {
  title: 'Contact Us',
  description: 'Have a question or ready to start your transformation? Call, email, or fill out the form today and we will get back to you',
}
export default function Contact() {
  return (
    <>
    <PageHero bg={bg}>contact us</PageHero>
    <ContactSection />
    <ContactMap/>
    <StayAhead/>
    </>
  )
}
