import { Project } from "@/types/types";
import Tag from "../ui/Tag";
import { memo, useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Props {
  project: Project;
}

const ProjectCard = memo(function ProjectCard({ project }: Props) {
  const achievementsRef = useRef<HTMLDivElement>(null);
  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    const element = achievementsRef.current;
    if (!element) return;

    const checkOverflow = () => {
      setHasOverflow(element.scrollHeight > element.clientHeight);
    };

    checkOverflow();

    const resizeObserver = new ResizeObserver(() => {
      checkOverflow();
    });
    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, [project.achievements]);

  return (
    <div className={`grid h-full w-full grid-rows-[1fr_auto] gap-4 overflow-hidden rounded-3xl p-4 shadow-2xl backdrop-blur-sm sm:gap-5 md:p-6 transition-all duration-200 ${hasOverflow ? 'lg:gap-3' : 'lg:gap-8'}`}>
      {/* Scrollable upper content area */}
      <div className="grid grid-cols-1 items-start gap-4 overflow-y-auto lg:grid-cols-[1.2fr_.8fr] lg:gap-10">
        <div className="flex flex-col justify-start gap-4">
          <div>
            <h2 className="font-bree text-text-primary text-2xl tracking-wide sm:text-3xl md:text-4xl">
              {project.title}
            </h2>

            <p className="text-text-secondary mt-3 text-sm leading-6 sm:text-base sm:leading-7">
              {project.description}
            </p>

            <div className="mt-5">
              <div className="grid grid-cols-4 gap-x-2 gap-y-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-4 xl:grid-cols-5">
                {project.technologies.map((tech) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={tech.name}
                      className="group flex flex-col items-center justify-center gap-2"
                    >
                      <div className="flex aspect-square w-10 items-center justify-center rounded-xl border border-[#54463a]/30 bg-[#2A2A2A]/40 transition-all duration-200 group-hover:-translate-y-1 group-hover:border-[#E25543]/60 group-hover:bg-[#3A2C24]/40 sm:w-12 lg:w-14">
                        <Icon
                          className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8"
                          style={{ color: tech.color }}
                        />
                      </div>
                      <span className="max-w-full text-center text-[10px] leading-tight text-[#D4BAA3] sm:text-[11px] lg:text-xs">
                        {tech.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Image & Link Buttons */}
        <div className="flex w-full flex-col gap-4 self-start">
          <div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-[#54463a] bg-black shadow-inner">
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="pointer-events-none h-full w-full object-cover transition-transform duration-400 ease-out select-none group-hover:scale-104"
            />
          </div>

          <div className="relative z-30 flex w-full flex-col gap-3 overflow-hidden p-1 sm:flex-row">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-gochi group bg-bg-tertiary inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-base text-white shadow-lg shadow-[#E25543]/20 transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:bg-[#ef6654] hover:shadow-xl hover:shadow-[#E25543]/35 active:translate-y-0 active:scale-[0.98]"
            >
              <span>Live Site</span>

              <span className="transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-gochi group inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-[#6b594b] bg-transparent px-4 py-3 text-base text-[#D4BAA3] transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#E25543]/60 hover:bg-[#2d2621] hover:text-white hover:shadow-lg hover:shadow-black/30 active:translate-y-0 active:scale-[0.98]"
              >
                <span>GitHub</span>

                <span className="font-mono text-sm opacity-60 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100">
                  &lt;/&gt;
                </span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Fixed bottom row for achievements */}
      <div className="hidden w-full flex-col gap-2 border-t border-[#54463a]/30 pt-3 lg:flex">
        <h4 className="font-bree tracking-widest text-[#E9D3BB]/70 uppercase">
          Key Achievements
        </h4>
        <div
          ref={achievementsRef}
          className="grid grid-cols-1 gap-1 md:grid-cols-2 min-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-[#54463a]/30"
        >
          {project.achievements?.map((achievement, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-xl border border-[#54463a]/10 bg-[#54463a]/5 p-2"
            >
              <span className="bg-bg-tertiary mt-0.5 h-2 w-2 shrink-0 rounded-full" />
              <p className="text-[#c8b8aa]">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default ProjectCard;
