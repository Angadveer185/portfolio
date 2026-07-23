"use client";

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


        {/* <Doodle src="/doodles/Star.png" width={1} x={7} y={12} rotation={-12} />
      <Doodle src="/doodles/Cat.png" width={150} x={50} y={75} rotation={18} className="hidden lg:block" />
      <Doodle src="/doodles/Bell.png" width={120} x={10} y={150} rotation={-25} />
      <Doodle src="/doodles/Dice.png" width={120} x={90} y={170} rotation={14} className="hidden lg:block"/>
      <Doodle src="/doodles/Bird_1.png" width={120} x={10} y={220} rotation={-8} />

      <Doodle src="/doodles/Camera.png" width={140} x={70} y={250} rotation={22} className="hidden lg:block" />
      <Doodle src="/doodles/Red_Gift.png" width={120} x={90} y={310} rotation={-18} className="hidden lg:block"/>
      <Doodle src="/doodles/Godzilla.png" width={200} x={10} y={340} rotation={15} />
      <Doodle src="/doodles/Red_Ramen.png" width={120} x={80} y={390} rotation={-22} />

      <Doodle src="/doodles/Rabbit.png" width={120} x={5} y={430} rotation={28} />
      <Doodle src="/doodles/Bird_2.png" width={120} x={85} y={470} rotation={-14} />
      <Doodle src="/doodles/Red_Cat.png" width={120} x={50} y={480} rotation={9} />
      <Doodle src="/doodles/Map.png" width={250} x={80} y={520} rotation={-20} className="hidden lg:block" />
      <Doodle src="/doodles/Ramen.png" width={120} x={10} y={520} rotation={16} className="hidden lg:block" />
      <Doodle src="/doodles/Flower.png" width={80} x={20} y={570} rotation={-27} className="hidden lg:block" />
      <Doodle src="/doodles/Red_Plant.png" width={170} x={15} y={620} rotation={11} className="hidden lg:block" />
      <Doodle src="/doodles/Juice.png" width={170} x={85} y={630} rotation={-19} className="hidden lg:block" />
      <Doodle src="/doodles/Computer.png" width={170} x={60} y={700} rotation={24} />
      <Doodle src="/doodles/Mech.png" width={170} x={75} y={730} rotation={-15} />
      <Doodle src="/doodles/CofeeStain.png" width={370} x={5} y={770} rotation={7} />
      <Doodle src="/doodles/Red_Frog.png" width={300} x={50} y={810} rotation={0} /> */}
    </main>
  );
}