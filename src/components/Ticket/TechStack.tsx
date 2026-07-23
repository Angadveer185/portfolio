import { Technology } from "@/types/types";

interface Props {
  technologies: Technology[];
}

export default function TechStack({ technologies }: Props) {
  return (
    <div className="grid grid-cols-3 gap-y-6 gap-x-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
      {technologies.map((tech) => {
        const Icon = tech.icon;

        return (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center p-2 text-center transition-transform hover:scale-105"
          >
            {/* Wrapper ensures SVGs without internal viewBox scale fluidly */}
            <div className="relative flex h-8 w-8 items-center justify-center sm:h-10 sm:w-10 lg:h-12 lg:w-12">
              <Icon
                className="h-full w-full object-contain"
                style={{ color: tech.color }}
              />
            </div>

            <span className="mt-1.5 w-full truncate text-[11px] font-medium sm:text-xs leading-tight">
              {tech.name}
            </span>
          </div>
        );
      })}
    </div>
  );
}