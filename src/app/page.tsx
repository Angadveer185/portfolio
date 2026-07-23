"use client";

import Navbar from "@/components/ui/NavBar";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";
import Footer from "@/sections/Footer";
import Landing from "@/sections/Landing";
import Projects from "@/sections/Projects";
import Resume from "@/sections/Resume";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    // relative + overflow-x-hidden stops horizontal scrollbars caused by floating doodles
    <main className="font-bree overflow-x-hidden w-full">
      <Navbar />
      <div className="flex flex-col gap-20">
        <Landing />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}