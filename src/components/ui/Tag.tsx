import { TagProps } from "@/types/types";

function Tag({ text }: TagProps) {
  return (
    <div className="relative inline-flex items-center justify-center px-6 py-3 cursor-pointer transition-transform duration-300 ease-out delay-300 hover:scale-105 hover:rotate-3">
      <img
        src="/ui/Border.svg"
        alt=""
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      <span className="relative whitespace-nowrap text-text-secondary font-gochi">
        {text}
      </span>
    </div>
  );
}

export default Tag;