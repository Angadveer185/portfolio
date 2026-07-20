import IPad from "@/components/IPad/IPad";
import React, { useState } from "react";

export default function Resume() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/* Header Section */}
      <div className="flex w-full items-center justify-center px-8 py-12 lg:px-20">
        <div className="text-text-primary font-splash text-center text-5xl md:text-8xl">
          Resume - Dossier
        </div>
      </div>

      <div className="flex w-full h-full overflow-hidden flex-1 items-center justify-center px-8 lg:px-20">
        <IPad />
      </div>
    </div>
  );
}
