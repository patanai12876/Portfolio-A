import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import  Projects  from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import { FaWhatsapp } from "react-icons/fa6";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
       <About />
      <Services />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <a
        href="https://wa.me/923277222004?text=Hi%20Muhammad%2C%20I%27d%20like%20to%20discuss%20a%20project."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Muhammad on WhatsApp"
        title="Chat on WhatsApp"
        className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#060B14]"
        style={{
          background: "#25D366",
          color: "#FFFFFF",
          boxShadow: "0 8px 24px rgba(37, 211, 102, 0.35)",
        }}
      >
        <FaWhatsapp className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
      
     
    </>
  );
}