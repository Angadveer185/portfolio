import Doodle from "@/components/ui/Doodle";
import SectionHeader from "@/components/ui/SectionHeading";
import Whiteboard from "@/components/Whiteboard/Whiteboard";
import React from "react";

function About() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-8 py-12 lg:px-16">
      <SectionHeader id="about" title="About Me" subtitle="My Story" />
      <Whiteboard />
      <Doodle src="/doodles/Bell.png" width={120} x={10} y={20} rotation={-25} />
      <Doodle src="/doodles/Dice.png" width={120} x={95} y={70} rotation={14} />
      <Doodle src="/doodles/Bird_1.png" width={120} x={5} y={90} rotation={8} />
    </div>
  );
}

export default About;
