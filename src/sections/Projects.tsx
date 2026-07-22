import ProjectShowcase from "@/components/TV/ProjectShowcase";
import SectionHeader from "@/components/ui/SectionHeading";
import React, { useState } from "react";

export default function Projects() {

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <SectionHeader id="projects" title="Projects" subtitle="My Creative Work" />

      <div className="flex w-full  items-center justify-center px-8 lg:px-10 pb-20 lg:pb-40">
        <ProjectShowcase />
      </div>
    </div>
  );
}