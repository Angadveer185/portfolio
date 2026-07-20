import ProjectShowcase from "@/components/TV/ProjectShowcase";
import React, { useState } from "react";

export default function Projects() {

  return (
    <div className="flex flex-col pb-20">
      {/* Header Section */}
      <div className="flex w-full items-center justify-center px-8 py-16 lg:px-20">
        <div className="text-text-primary font-splash text-center text-5xl md:text-8xl">
          Projects - Endeavor
        </div>
      </div>

      <div className="flex w-full items-center justify-center px-8 lg:px-10">
        <ProjectShowcase />
      </div>
    </div>
  );
}