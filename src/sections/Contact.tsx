import IPhone from "@/components/Social_Contact/IPhone";
import Macbook from "@/components/Social_Contact/Macbook";
import SectionHeader from "@/components/ui/SectionHeading";
import React, { useState } from "react";

export default function Contact() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      {/* Header Section */}
      <SectionHeader id="contact" title="Contact" subtitle="Get in Touch" />

      <div className="hidden lg:flex w-full h-full overflow-hidden flex-1 items-center justify-center px-8 lg:px-20">
          <Macbook />
      </div>
      <div className="flex lg:hidden w-full h-full overflow-hidden flex-1 items-center justify-center px-8 lg:px-20">
          <IPhone />
      </div>
    </div>
  );
}
