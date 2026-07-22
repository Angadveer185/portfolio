"use client";

interface Props {
  children: string;
}

export default function MarkerHeading({ children }: Props) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <div className="h-[4px] w-10 rounded-full bg-[#E25543]" />

      <h2
        className="
        font-gochi
        text-3xl
        font-bold
        text-[#3E3124]
        tracking-wide
      "
      >
        {children}
      </h2>

      <div className="flex-1 border-b-[3px] border-dashed border-[#3E3124]/30" />
    </div>
  );
}