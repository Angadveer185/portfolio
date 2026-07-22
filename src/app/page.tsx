"use client";

import ProjectShowcase from "@/components/TV/ProjectShowcase";
import Doodle from "@/components/ui/Doodle";
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
    <main className="font-bree">
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


      <Doodle src="/doodles/Star.png" width={1} x={5} y={12} rotation={-15} />
      <Doodle src="/doodles/Cat.png" width={150} x={50} y={75} rotation={25} className=" hidden lg:block" />
      <Doodle src="/doodles/Bell.png" width={120} x={20} y={150} rotation={25} className=" hidden lg:block" />
    </main>
  );
}
