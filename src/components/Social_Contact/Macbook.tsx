import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa6";
import { Socials } from "@/lib/data";
import {
  Mail,
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Search,
  Plus,
  SlidersHorizontal,
} from "lucide-react";

interface MacbookProps {
  children?: React.ReactNode;
}

function openLink(url: string) {
  window.open(url, "_blank");
}

function AppIcon({
  label,
  children,
  bgColor,
  onClick,
}: {
  label: string;
  children: React.ReactNode;
  bgColor: string;
  onClick: () => void;
}) {
  return (
    <div className="group flex cursor-pointer flex-col items-center justify-center gap-1">
      <div
        className={`flex aspect-square w-10 items-center justify-center rounded-xl text-lg text-white shadow-md transition-all group-hover:brightness-110 active:scale-95 sm:w-12 md:w-14 md:rounded-2xl md:text-xl ${bgColor}`}
        onClick={onClick}
      >
        {children}
      </div>
      <span className="hidden text-[9px] font-medium tracking-wide text-white transition-opacity group-hover:opacity-100 min-[400px]:block md:text-[11px]">
        {label}
      </span>
    </div>
  );
}

export default function Macbook({ children }: MacbookProps) {
  // Form state
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
    setSubject("");
    setMessage("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Sending Message!\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
    );
  };

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center p-2 select-none sm:p-4">
      {/* LAPTOP SCREEN (LID) */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-[1.2rem] border-[2px] border-b-0 border-[#38393a] bg-[#0c0c0e] shadow-2xl ring-1 ring-black/40 sm:rounded-t-[1.8rem] sm:border-[4px]">
        {/* Inner Shiny Gloss Bezel Edge */}
        <div className="pointer-events-none absolute inset-0 z-30 rounded-t-[1rem] border border-[#1a1b1c] sm:rounded-t-[1.5rem]" />

        {/* Camera Notch Area */}
        <div className="absolute top-0 left-1/2 z-40 flex h-[3.5%] w-[14%] -translate-x-1/2 items-center justify-center gap-1 rounded-b-sm bg-black sm:w-[11%] sm:gap-1.5 sm:rounded-b-md">
          {/* Camera Lens */}
          <div className="h-0.5 w-0.5 rounded-full border border-blue-900/30 bg-[#040814] sm:h-1 sm:w-1" />
          {/* Ambient Sensor */}
          <div className="invisible h-0.5 w-0.5 rounded-full bg-[#111]" />
        </div>

        {/* Screen Display Viewport */}
        <div className="relative h-full w-full p-[0.6%] pt-[0.6%]">
          <div className="relative h-full w-full overflow-hidden rounded-t-[0.6rem] bg-[#050507] sm:rounded-t-[1rem]">
            {children ? (
              children
            ) : (
              <div className="relative flex h-full w-full flex-col gap-2 overflow-hidden bg-[#020205] p-2 font-sans text-white sm:p-4 md:grid md:grid-cols-12 md:gap-4">
                {/* Dynamic Wallpaper Glows */}
                <div className="absolute top-[-20%] left-[-10%] h-[70%] w-[90%] rotate-12 rounded-full bg-gradient-to-r from-purple-900/40 via-violet-800/20 to-transparent blur-[40px] sm:blur-[80px]" />
                <div className="absolute right-[-15%] bottom-[-10%] h-[80%] w-[80%] rounded-full bg-gradient-to-l from-indigo-900/30 via-purple-900/10 to-transparent blur-[40px] sm:blur-[90px]" />
                <div className="absolute bottom-[10%] left-[20%] h-[40%] w-[60%] -rotate-12 rounded-full bg-blue-950/40 blur-[40px] sm:blur-[70px]" />

                {/* SIDE/TOP DOCK: App Shortcuts on Desktop */}
                <div className="z-10 flex shrink-0 flex-row justify-center gap-4 border-b border-white/5 pt-1 pb-2 md:col-span-3 md:flex-col md:justify-start md:items-start md:gap-5 md:border-b-0 md:pt-4 md:pb-0">
                  <AppIcon
                    label="GitHub"
                    bgColor="bg-[#24292F]"
                    onClick={() => openLink(Socials.GitHub)}
                  >
                    <FaGithub size={30} />
                  </AppIcon>

                  <AppIcon
                    label="LinkedIn"
                    bgColor="bg-[#0077B5]"
                    onClick={() => openLink(Socials.LinkedIn)}
                  >
                    <FaLinkedin size={30} />
                  </AppIcon>

                  <AppIcon
                    label="Instagram"
                    bgColor="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"
                    onClick={() => openLink(Socials.Instagram)}
                  >
                    <FaInstagram size={30} />
                  </AppIcon>

                  <AppIcon
                    label="Discord"
                    bgColor="bg-[#5865F2]"
                    onClick={() => openLink(Socials.Discord)}
                  >
                    <FaDiscord size={30} />
                  </AppIcon>
                </div>

                {/* BROWSER MOCKUP WINDOW */}
                <div className="z-10 flex flex-1 flex-col overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/90 text-neutral-200 shadow-2xl backdrop-blur-md md:col-span-9 md:my-auto md:h-[96%]">
                  {/* Browser Window Header */}
                  <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-950 px-2 py-1.5 sm:px-4 sm:py-2.5">
                    {/* Window Controls (Mac Traffic Lights) */}
                    <div className="flex items-center gap-1 sm:gap-1.5">
                      <div className="h-2 w-2 rounded-full bg-[#FF5F56] sm:h-3 sm:w-3" />
                      <div className="h-2 w-2 rounded-full bg-[#FFBD2E] sm:h-3 sm:w-3" />
                      <div className="h-2 w-2 rounded-full bg-[#27C93F] sm:h-3 sm:w-3" />
                    </div>

                    {/* Navigation Controls & Search Bar */}
                    <div className="flex w-2/3 items-center gap-2 sm:w-3/4 sm:gap-3">
                      <div className="hidden gap-2 text-neutral-500 sm:flex">
                        <ArrowLeft size={14} />
                        <ArrowRight size={14} />
                        <RotateCcw
                          size={14}
                          className="cursor-pointer hover:text-white"
                          onClick={() => {
                            setEmail("");
                            setSubject("");
                            setMessage("");
                          }}
                        />
                      </div>
                      <div className="flex flex-1 items-center gap-1.5 rounded-lg border border-neutral-700/50 bg-neutral-800 px-2 py-0.5 text-[9px] text-neutral-400 sm:px-2.5 sm:text-[11px]">
                        <Search size={10} className="shrink-0" />
                        <span className="truncate select-text">
                          https://portfolio.angadchh.me/contact
                        </span>
                      </div>
                    </div>

                    {/* Secondary Utilities */}
                    <div className="flex items-center gap-1.5 text-neutral-400 sm:gap-2">
                      <Plus size={13} />
                      <SlidersHorizontal size={11} />
                    </div>
                  </div>

                  {/* Browser Display Area containing Form */}
                  <div className="flex-1 overflow-y-auto bg-neutral-900 p-3 select-text sm:p-5">
                    <div className="mx-auto max-w-md">
                      <div className="mb-2 flex items-center gap-2 sm:mb-4">
                        <div className="bg-bg-tertiary rounded-lg p-1 text-white sm:p-1.5">
                          <Mail size={14} className="sm:size-4" />
                        </div>
                        <h2 className="text-xs font-bold tracking-wide text-white sm:text-sm">
                          Get in Touch
                        </h2>
                      </div>

                      <form
                        onSubmit={handleSubmit}
                        className="space-y-2 sm:space-y-3"
                      >
                        {/* Email Input */}
                        <div>
                          <label className="mb-0.5 block text-[9px] font-semibold tracking-wider text-neutral-400 uppercase sm:mb-1 sm:text-[10px]">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="focus:border-bg-tertiary w-full rounded-md border border-neutral-700 bg-neutral-950 p-1.5 text-[11px] text-white placeholder-neutral-600 shadow-inner transition-colors outline-none sm:p-2 sm:text-xs"
                          />
                        </div>

                        {/* Subject Input */}
                        <div>
                          <label className="mb-0.5 block text-[9px] font-semibold tracking-wider text-neutral-400 uppercase sm:mb-1 sm:text-[10px]">
                            Subject
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="What project are we collaborating on?"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="focus:border-bg-tertiary w-full rounded-md border border-neutral-700 bg-neutral-950 p-1.5 text-[11px] text-white placeholder-neutral-600 shadow-inner transition-colors outline-none sm:p-2 sm:text-xs"
                          />
                        </div>

                        {/* Message Textarea */}
                        <div>
                          <label className="mb-0.5 block text-[9px] font-semibold tracking-wider text-neutral-400 uppercase sm:mb-1 sm:text-[10px]">
                            Message
                          </label>
                          <textarea
                            rows={2}
                            required
                            placeholder="Write your note details here..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="focus:border-bg-tertiary sm:rows-3 w-full resize-none rounded-md border border-neutral-700 bg-neutral-950 p-1.5 text-[11px] text-white placeholder-neutral-600 shadow-inner transition-colors outline-none sm:p-2 sm:text-xs"
                          />
                        </div>

                        {/* Form Buttons */}
                        <div className="flex justify-end gap-2 pt-1 select-none sm:pt-2">
                          <button
                            type="button"
                            onClick={handleReset}
                            className="cursor-pointer rounded-md border border-neutral-700 bg-neutral-800 px-2.5 py-1 text-[10px] font-semibold text-neutral-300 transition-all hover:bg-neutral-700 hover:text-white active:scale-95 sm:px-3 sm:py-1.5 sm:text-[11px]"
                          >
                            Reset
                          </button>
                          <button
                            type="submit"
                            className="bg-bg-tertiary hover:bg-bg-tertiary/90 cursor-pointer rounded-md px-3 py-1 text-[10px] font-bold text-white shadow-md transition-all active:scale-95 sm:px-4 sm:py-1.5 sm:text-[11px]"
                          >
                            Send Message
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* DISPLAY HINGE INNER BASE */}
      <div className="relative z-10 h-1 w-full border-t border-black bg-[#1b1c1e] sm:h-2" />

      {/* LAPTOP CHASSIS BASE */}
      <div className="relative flex h-4 w-[108%] flex-col justify-between rounded-b-[0.6rem] bg-gradient-to-b from-[#a1a2a4] via-[#949597] to-[#7b7c7e] shadow-[0_15px_30px_rgba(0,0,0,0.6)] sm:h-7 sm:rounded-b-[1rem]">
        {/* Top Edge Lip Flaring & Front Lid Notch Groove */}
        <div className="relative h-[2px] w-full rounded-t-sm bg-[#b8b9bb] sm:h-[3px]">
          {/* Center Thumb Display Opening Notch */}
          <div className="absolute top-0 left-1/2 h-[3px] w-[16%] -translate-x-1/2 rounded-b-sm bg-[#67686a] shadow-inner sm:h-[5px] sm:rounded-b-md" />
        </div>

        {/* Bottom Baseline Shadow Layer */}
        <div className="h-[2px] w-full rounded-b-[0.6rem] bg-[#535456] sm:h-[4px] sm:rounded-b-[1rem]" />

        {/* Left Plastic Support Foot */}
        <div className="absolute bottom-[-2px] left-[8%] h-[2px] w-[5%] rounded-b-full bg-black/70 blur-[0.5px] sm:bottom-[-3px] sm:h-[4px] sm:blur-[1px]" />

        {/* Right Plastic Support Foot */}
        <div className="absolute right-[8%] bottom-[-2px] h-[2px] w-[5%] rounded-b-full bg-black/70 blur-[0.5px] sm:bottom-[-3px] sm:h-[4px] sm:blur-[1px]" />
      </div>
    </div>
  );
}
