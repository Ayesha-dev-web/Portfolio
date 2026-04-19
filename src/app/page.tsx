import Navbar from "../components/NavBar";
import HeroSection from "../components/Hero";
import About from "../components/About"
import Service from "../components/Service"

import Portfolio from "../components/Portfolio"

import ExperienceSection from "../components/Experience";
import Section from "../components/Section";
import TestimonialsSection from "../components/Testimonilas";
import ContactSection from "../components/Contact";
import Footer from "../components/Footer";
import WhatsAppButton from "@/components/WhatsApp";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <HeroSection />
      <About />
      <Service />
     
      <Section />
      <Portfolio />

      <ExperienceSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}