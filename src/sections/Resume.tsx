import IPad from "@/components/IPad/IPad";
import SectionHeader from "@/components/ui/SectionHeading";
import React, { useState } from "react";

export default function Resume() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/* Header Section */}
      <SectionHeader id="resume" title="Resume" subtitle="My Dossier" />

      <div className="flex w-full h-full overflow-hidden flex-1 items-center justify-center px-8 lg:px-20">
        <IPad />
      </div>
    </div>
  );
}
