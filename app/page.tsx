import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import About from "@/components/sections/About";
import PartnershipModel from "@/components/sections/PartnershipModel";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";
import Leadership from "@/components/sections/Leadership";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero/>
      <TrustStrip/>
      <About/>
      <PartnershipModel/>
      <Services/>
      <WhyChoose/>
      <Leadership/>
      <Contact/>
      <Footer/>

    </>
  );
}