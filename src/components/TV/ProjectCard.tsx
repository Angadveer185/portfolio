import { Project } from "@/types/types";
import Tag from "../ui/Tag";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  return (
    <div className="grid h-full w-full grid-rows-[auto_auto] gap-4 overflow-y-auto rounded-3xl p-4 shadow-2xl backdrop-blur-sm sm:gap-5 md:p-6 lg:grid-rows-[1fr_auto] lg:gap-10 lg:overflow-hidden">
      <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[1.2fr_.8fr] lg:gap-10">
        <div className="flex h-full flex-col justify-start gap-4">
          <div>
            <h2 className="font-bree text-text-primary text-2xl tracking-wide sm:text-3xl md:text-5xl">
              {project.title}
            </h2>

            <p className="text-text-secondary mt-3 text-sm leading-6 sm:text-base sm:leading-7 md:text-lg md:leading-8">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Tag key={tech} text={tech} />
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-4 self-start">
            <div className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-[#54463a] bg-black shadow-inner">
            <img
              src={project.image}
              alt={project.title}
              className="pointer-events-none h-full w-full object-cover transition-transform duration-400 ease-out select-none group-hover:scale-104"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          <div className="relative z-30 flex w-full flex-col gap-3 sm:flex-row">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-gochi group/btn inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-bg-tertiary px-4 py-3 text-base text-white shadow-lg shadow-[#E25543]/20 transition-all duration-150 hover:bg-[#ef6654] active:scale-95 active:bg-[#c94534] md:text-xl"
            >
              <span>Live Demo</span>
              <span className="text-sm transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
                ↗
              </span>
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-gochi group/btn inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-[#6b594b] bg-transparent px-4 py-3 text-base text-[#D4BAA3] transition-all duration-150 hover:bg-neutral-800/20 active:scale-95 active:bg-neutral-800/40 md:text-xl"
            >
              <span>GitHub</span>
              <span className="text-sm opacity-60 transition-opacity group-hover/btn:opacity-100 md:text-base">
                &lt;/&gt;
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex w-full flex-col gap-3 self-end border-t border-[#54463a]/30 pt-4 lg:pt-6">
        <h4 className="font-bree text-xs tracking-widest text-[#E9D3BB]/70 uppercase">
          Key Achievements
        </h4>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {project.achievements?.map((achievement, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-xl border border-[#54463a]/10 bg-[#54463a]/5 p-3 transition-all duration-200 hover:translate-x-1 hover:bg-[#54463a]/15"
            >
              <span className="mt-0.5 shrink-0 bg-bg-tertiary w-2 h-2 rounded-full select-none shadow-[0_0_4px_rgba(226,85,67,0.6)]" />
              <p className="text-xs leading-relaxed text-[#c8b8aa] md:text-sm">
                {achievement}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
