import IPhone from "@/components/Social_Contact/IPhone";
import Macbook from "@/components/Social_Contact/Macbook";
import SectionHeader from "@/components/ui/SectionHeading";
import React, { useState } from "react";
import Doodle from "@/components/ui/Doodle";

export default function Contact() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Header Section */}
      <SectionHeader id="contact" title="Contact" subtitle="Get in Touch" />
      <Doodle src="/doodles/Red_Plant.png" width={170} x={15} y={10} rotation={11} />
      <Doodle src="/doodles/Juice.png" width={170} x={85} y={15} rotation={-19} />
      <Doodle src="/doodles/Computer.png" width={170} x={60} y={50} rotation={24} />
      <Doodle src="/doodles/Mech.png" width={170} x={75} y={65} rotation={-15} />
      <Doodle src="/doodles/CofeeStain.png" width={370} x={5} y={85} rotation={7} />
      <Doodle src="/doodles/Red_Frog.png" width={300} x={50} y={95} rotation={0} />

      <div className="hidden lg:flex w-full h-full overflow-hidden flex-1 items-center justify-center px-8 lg:px-20">
        <Macbook />
      </div>
      <div className="flex lg:hidden w-full h-full overflow-hidden flex-1 items-center justify-center px-8 lg:px-20">
        <IPhone />
      </div>
    </div>
  );
}
