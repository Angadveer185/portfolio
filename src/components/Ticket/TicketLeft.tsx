import Image from "next/image";
import { Experience } from "@/types/types";
import { MapPin } from "lucide-react";

export default function TicketLeft({
  experience: { company, logo, role, from, to, location },
}: {
  experience: Experience;
}) {
  return (
    <div className="flex flex-col md:h-full p-5 sm:p-6 md:p-[10%] justify-between gap-4">
      {/* Header Container Area */}
      <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0">
        {/* Logo Element Box */}
        <div className="relative aspect-square w-16 sm:w-20 md:w-2/3 max-w-[120px] overflow-hidden rounded-md bg-bg-primary shrink-0 shadow-md">
          <Image
            src={logo}
            alt={company}
            fill
            className="object-contain"
          />
        </div>

        {/* Company Identity */}
        <h2 className="font-bree mt-0 md:mt-[8%] text-xl sm:text-2xl md:text-[clamp(1.1rem,2.2cqw,2.2rem)] font-bold text-text-primary tracking-wide leading-tight">
          {company}
        </h2>
        {/* Role Identity */}
        <h3 className="font-bree text-lg sm:text-xl mt-2 md:text-[clamp(1rem,1cqw,1rem)] text-white tracking-wide leading-tight break-words">
          {role}
        </h3>
      </div>

      {/* Metadata Panel Details */}
      <div className="font-bree space-y-1.5 md:space-y-[6%] sm:text-base md:text-[clamp(.8rem,1.15cqw,1.25rem)] font-medium text-white border-t border-dashed border-white/10 pt-3 md:border-0 md:pt-0">
        <p className="flex justify-between md:block">
          <span className="font-black text-text-primary">From: </span>
          <span>{from}</span>
        </p>
        <p className="flex justify-between md:block">
          <span className="font-black text-text-primary">To: </span>
          <span>{to}</span>
        </p>
        <p className="flex items-center gap-1.5 text-text-primary font-bold mt-1">
          <MapPin size={16} className="inline-block shrink-0 align-text-bottom text-text-primary" />
          <span className="text-white">{location}</span>
        </p>
      </div>
    </div>
  );
}