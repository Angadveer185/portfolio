import { TagProps } from "@/types/types";
import Image from "next/image";

function Tag({ text }: TagProps) {
  return (
    <div className="relative inline-flex items-center justify-center px-6 py-3 cursor-pointer transition-transform duration-300 ease-out delay-300 hover:scale-105 hover:rotate-3">
      <Image
        src="/ui/Border.svg"
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 150px"
        className="absolute inset-0 w-full h-full pointer-events-none"
        priority
      />

      <span className="relative whitespace-nowrap text-text-secondary font-gochi">
        {text}
      </span>
    </div>
  );
}

export default Tag;