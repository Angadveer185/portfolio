"use client";

import Navbar from "@/components/ui/NavBar";
import MobileNavbar from "@/components/ui/MobileNavbar";
import Landing from "@/sections/Landing";
import dynamic from "next/dynamic";

const About = dynamic(() => import("@/sections/About"), { ssr: true });
const Skills = dynamic(() => import("@/sections/Skills"), { ssr: false });
const Projects = dynamic(() => import("@/sections/Projects"), { ssr: false });
const Experience = dynamic(() => import("@/sections/Experience"), { ssr: false });
const Resume = dynamic(() => import("@/sections/Resume"), { ssr: false });
const Contact = dynamic(() => import("@/sections/Contact"), { ssr: false });
const Footer = dynamic(() => import("@/sections/Footer"), { ssr: true });

export default function Home() {
  return (
    <main className="font-bree overflow-x-hidden w-full">
      {/* Show MobileNavbar below 768px, hide on desktop */}
      <div className="block md:hidden">
        <MobileNavbar />
      </div>

      {/* Hide Navbar on mobile, show on 768px and up */}
      <div className="hidden md:block">
        <Navbar />
      </div>

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