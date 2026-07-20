import { Experience } from "@/types/types";
import TechStack from "./TechStack";

export default function TicketRight({
  experience: { description, technologies },
}: {
  experience: Experience;
}) {
  return (
    <div className="flex h-full flex-col justify-between gap-6 md:gap-0 md:p-[3%] p-[2%]">
      {/* Responsibilities Core Layout */}
      <div className="w-full">
        <h3 className="font-bree text-text-primary text-lg font-bold tracking-wide sm:text-xl md:text-[clamp(1.1rem,2cqw,1.8rem)]">
          While There:
        </h3>
        <ul className="font-bree mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[#F5F5F5] opacity-95 sm:text-base md:mt-[2%] md:space-y-[1.5%] md:text-[clamp(.85rem,1.1cqw,1.15rem)]">
          {description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Arsenal Stack Layout */}
      <div className="w-full md:mt-auto md:pt-[4%]">
        <h3 className="font-bree text-text-primary mb-3 text-lg font-bold tracking-wide sm:text-xl md:mb-[2%] md:text-[clamp(1.1rem,2cqw,1.8rem)]">
          Arsenal Used:
        </h3>

        <TechStack technologies={technologies} />
      </div>
    </div>
  );
}
