"use client";

import { useEffect } from "react";
import { toast } from "sonner";

const messages = [
  "Those pencil marks are classified.",
  "Please don't erase my doodles.",
  "I knew you'd right-click.",
  "Careful, the ink is still drying.",
  "Curiosity unlocked!",
  "Grab a coffee instead of my source code.",
  "Quack. That's not how you steal my sketches.",
  "Inspecting? Try my GitHub repository instead!",
  "Measuring my margins? They're all hand-drawn!",
  "Snip snip! No right-clicking on this paper.",
];

// Helper to pick a random message from the array
const getRandomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};

// Reusable styled sketchbook toast component
const showSketchbookToast = (title: string, message: string) => {
  toast.custom(() => (
    <div className="relative rotate-[-2deg] rounded-lg border-2 border-[#6B5A4E] bg-[#F5E1CD] px-5 py-4 shadow-[4px_5px_0_#5A5147]">
      {/* Tape Detail */}
      <div className="absolute left-1/2 top-0 h-3 w-8 -translate-x-1/2 -translate-y-1/2 rotate-[-6deg] rounded-sm border border-[#D6C090] bg-[#F8E8B8]/80" />

      <h3 className="font-gochi text-lg font-bold text-[#E25543]">
        {title}
      </h3>

      <p className="mt-1 font-bree text-sm text-[#2B2B2B]">
        {message}
      </p>
    </div>
  ));
};

export default function AntiInspect() {
  useEffect(() => {
    // 1. Context Menu Prevent Handler
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      showSketchbookToast("📓 Sketchbook Protected!", getRandomMessage());
    };

    // 2. DevTools Shortcuts Prevent Handler
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();

      if (
        key === "f12" ||
        (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(key)) ||
        (e.metaKey && e.altKey && key === "i")
      ) {
        e.preventDefault();
        showSketchbookToast("Curiosity Unlocked!", getRandomMessage());
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Console Easter Egg Message
  useEffect(() => {
    console.clear();

    console.log(
      "%cWelcome to my sketchbook!",
      "font-size:24px;color:#E25543;font-weight:bold;"
    );

    console.log(
      "%cIf you're here because you're curious, that's awesome.\nFeel free to explore the code on GitHub instead! :)",
      "font-size:15px;color:#F4E0CC;"
    );

    console.log(
      "%chttps://github.com/Angadveer185",
      "font-size:16px;color:#67b7ff;"
    );
  }, []);

  return null;
}