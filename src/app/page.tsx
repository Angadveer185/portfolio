"use client";

import ProjectShowcase from "@/components/TV/ProjectShowcase";
import Doodle from "@/components/ui/Doodle";
import Navbar from "@/components/ui/NavBar";
import Experience from "@/sections/Experience";
import Landing from "@/sections/Landing";
import Projects from "@/sections/Projects";
import Resume from "@/sections/Resume";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <main className="font-bree">
      <Navbar />
      <Landing />
      <Doodle src="/doodles/Cat.png" width={10} x={50} y={75} rotation={25} />
      <Doodle src="/doodles/Star.png" width={1} x={5} y={12} rotation={-15} />
      <Skills />
      <Projects />
      <Experience />
      <Resume />
    </main>
  );
}
