import { Technology } from "@/types/types";
import Image from "next/image";

interface Props {
  technologies: Technology[];
}

export default function TechStack({ technologies }: Props) {
  return (
    <div className="grid grid-cols-3 gap-x-2 gap-y-6 sm:grid-cols-4 md:grid-cols-5 md:gap-x-2 md:gap-y-8 lg:grid-cols-6">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="flex flex-col items-center justify-center"
        >
          <div className="relative h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-14 lg:w-14">
            <Image
              src={tech.icon || "/icons/NextJs.svg"}
              alt={tech.name}
              fill
              className="object-contain"
            />
          </div>

          <span className="font-bree mt-2 text-center text-xs leading-tight text-[#F3F3F3] lg:text-xs">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
}
