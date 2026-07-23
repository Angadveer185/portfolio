import IPad from "@/components/IPad/IPad";
import SectionHeader from "@/components/ui/SectionHeading";
import React, { useState } from "react";
import Doodle from "@/components/ui/Doodle";

export default function Resume() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Header Section */}
      <SectionHeader id="resume" title="Resume" subtitle="My Dossier" />
      <Doodle src="/doodles/Map.png" width={250} x={80} y={20} rotation={-20} />
      <Doodle src="/doodles/Ramen.png" width={120} x={10} y={20} rotation={16} />
      <Doodle src="/doodles/Flower.png" width={80} x={20} y={70} rotation={-27} />

      <div className="flex w-full h-full overflow-hidden flex-1 items-center justify-center px-8 lg:px-20">
        <IPad />
      </div>
    </div>
  );
}
