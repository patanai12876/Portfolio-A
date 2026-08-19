import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import  Projects  from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";


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
      
     
    </>
  );
}