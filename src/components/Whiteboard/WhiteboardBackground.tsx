"use client";

export default function WhiteboardBackground() {
  return (
    <>
      {/* Marker stains */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-12 left-10 w-28 h-28 rounded-full bg-black blur-3xl opacity-10" />
        <div className="absolute bottom-10 right-16 w-40 h-40 rounded-full bg-black blur-3xl opacity-10" />
      </div>

      {/* Coffee stain */}
      <div className="absolute top-10 right-12 w-24 h-24 rounded-full border-[5px] border-[#7b5d3c]/20 rotate-12 pointer-events-none" />

      {/* Marker scribbles */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <path
          d="M80 70 C150 40 220 110 290 70"
          stroke="black"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />

        <path
          d="M930 600 C980 640 1080 560 1130 610"
          stroke="black"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />

        <path
          d="M500 200 C530 170 590 230 640 190"
          stroke="black"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />

        <text
          x="970"
          y="150"
          fontSize="28"
          fill="black"
          fontFamily="monospace"
        >
          TODO
        </text>

        <text
          x="980"
          y="185"
          fontSize="22"
          fill="black"
          fontFamily="monospace"
        >
          build cool stuff
        </text>

        <text
          x="90"
          y="720"
          fontSize="22"
          fill="black"
          fontFamily="monospace"
        >
          git push
        </text>

        <text
          x="450"
          y="740"
          fontSize="22"
          fill="black"
          fontFamily="monospace"
        >
          while(true)
        </text>
      </svg>

      {/* Masking tape */}
      <div className="absolute top-8 left-16 w-28 h-8 rotate-[-12deg] rounded-sm bg-[#ead9c7] opacity-90 shadow-md pointer-events-none" />

      <div className="absolute bottom-10 right-24 w-32 h-8 rotate-[10deg] rounded-sm bg-[#ead9c7] opacity-90 shadow-md pointer-events-none" />
    </>
  );
}