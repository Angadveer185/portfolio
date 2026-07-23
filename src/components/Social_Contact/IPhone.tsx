"use client";

import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa6";
import { Socials } from "@/lib/data";
import { toast } from "sonner";
import { motion } from "framer-motion";
import {
  Mail,
  RotateCcw,
  Search,
  Loader2,
  Lock,
  Share,
  BookOpen,
} from "lucide-react";

interface IPhoneProps {
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
        className={`flex aspect-square w-12 items-center justify-center rounded-2xl text-xl text-white shadow-lg transition-all active:scale-90 ${bgColor}`}
        onClick={onClick}
      >
        {children}
      </div>
      <span className="text-[10px] font-medium tracking-tight text-neutral-300">
        {label}
      </span>
    </div>
  );
}

export default function IPhone({ children }: IPhoneProps) {
  // Form state
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleReset = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setEmail("");
    setSubject("");
    setMessage("");
    toast.info("Form reset.");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          subject,
          message,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      toast.success("Email sent successfully!");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent,
    fieldType: "input" | "textarea",
  ) => {
    if (e.key === "Enter" && !e.shiftKey && fieldType === "input") {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <motion.div
      className="mx-auto flex w-full max-w-[380px] justify-center p-2 select-none sm:p-4"
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        ease: [0.21, 1.11, 0.81, 0.99], // Subtle spring effect on entrance
      }}
    >
      {/* IPHONE OUTER BODY */}
      <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[48px] border-[10px] border-[#222325] bg-[#0c0c0e] shadow-2xl ring-1 ring-white/10">
        {/* Dynamic Island Notch */}
        <div className="absolute top-3 left-1/2 z-50 flex h-5 w-24 -translate-x-1/2 items-center justify-between rounded-full bg-black px-2 shadow-sm">
          <div className="h-2.5 w-2.5 rounded-full bg-[#08081a] ring-1 ring-white/10" />
          <div className="h-2 w-2 rounded-full bg-[#111122]" />
        </div>

        {/* Screen Display Viewport */}
        <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#020205] pt-10 text-white">
          {children ? (
            children
          ) : (
            <div className="relative flex h-full w-full flex-col justify-between overflow-hidden bg-[#020205] p-3 font-sans">
              {/* Dynamic Background Glows */}
              <div className="pointer-events-none absolute -top-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-900/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 left-0 h-48 w-48 rounded-full bg-indigo-900/30 blur-3xl" />

              {/* SOCIAL SHORTCUTS GRID */}
              <div className="z-10 flex items-center justify-around px-2 pt-2">
                <AppIcon
                  label="GitHub"
                  bgColor="bg-[#24292F]"
                  onClick={() => openLink(Socials.GitHub)}
                >
                  <FaGithub size={22} />
                </AppIcon>

                <AppIcon
                  label="LinkedIn"
                  bgColor="bg-[#0077B5]"
                  onClick={() => openLink(Socials.LinkedIn)}
                >
                  <FaLinkedin size={22} />
                </AppIcon>

                <AppIcon
                  label="Instagram"
                  bgColor="bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]"
                  onClick={() => openLink(Socials.Instagram)}
                >
                  <FaInstagram size={22} />
                </AppIcon>

                <AppIcon
                  label="Discord"
                  bgColor="bg-[#5865F2]"
                  onClick={() => openLink(Socials.Discord)}
                >
                  <FaDiscord size={22} />
                </AppIcon>
              </div>

              {/* MOBILE SAFARI MOCKUP */}
              <div className="z-10 my-auto flex max-h-[72%] flex-1 flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/90 text-neutral-200 shadow-xl backdrop-blur-md">
                {/* Contact Form Content Container */}
                <div className="flex-1 overflow-y-auto p-3.5 select-text">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="bg-bg-tertiary rounded-lg p-1.5 text-white">
                        <Mail size={14} />
                      </div>
                      <h2 className="text-xs font-bold tracking-wide text-white">
                        Get in Touch
                      </h2>
                    </div>
                    <button
                      type="button"
                      onClick={handleReset}
                      title="Reset form"
                      className="text-neutral-400 hover:text-white"
                    >
                      <RotateCcw size={13} />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-2.5">
                    {/* Email Input */}
                    <div>
                      <label className="mb-1 block text-[9px] font-semibold tracking-wider text-neutral-400 uppercase">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        tabIndex={1}
                        disabled={isSending}
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, "input")}
                        className="focus:border-bg-tertiary w-full rounded-lg border border-neutral-700 bg-neutral-950 p-2 text-xs text-white placeholder-neutral-600 shadow-inner transition-colors outline-none disabled:opacity-50"
                      />
                    </div>

                    {/* Subject Input */}
                    <div>
                      <label className="mb-1 block text-[9px] font-semibold tracking-wider text-neutral-400 uppercase">
                        Subject
                      </label>
                      <input
                        type="text"
                        required
                        tabIndex={2}
                        disabled={isSending}
                        placeholder="Project Inquiry"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, "input")}
                        className="focus:border-bg-tertiary w-full rounded-lg border border-neutral-700 bg-neutral-950 p-2 text-xs text-white placeholder-neutral-600 shadow-inner transition-colors outline-none disabled:opacity-50"
                      />
                    </div>

                    {/* Message Textarea */}
                    <div>
                      <label className="mb-1 block text-[9px] font-semibold tracking-wider text-neutral-400 uppercase">
                        Message
                      </label>
                      <textarea
                        rows={3}
                        required
                        tabIndex={3}
                        disabled={isSending}
                        placeholder="Write your note here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, "textarea")}
                        className="focus:border-bg-tertiary w-full resize-none rounded-lg border border-neutral-700 bg-neutral-950 p-2 text-xs text-white placeholder-neutral-600 shadow-inner transition-colors outline-none disabled:opacity-50"
                      />
                    </div>

                    {/* Form Buttons */}
                    <div className="flex justify-end gap-2 pt-1">
                      <button
                        type="button"
                        disabled={isSending}
                        onClick={handleReset}
                        className="rounded-lg border border-neutral-700 bg-neutral-800 px-3 py-1.5 text-[10px] font-semibold text-neutral-300 transition-all hover:bg-neutral-700 active:scale-95 disabled:opacity-50"
                      >
                        Reset
                      </button>
                      <button
                        type="submit"
                        disabled={isSending}
                        className="bg-bg-tertiary hover:bg-bg-tertiary/90 flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-[10px] font-bold text-white shadow-md transition-all active:scale-95 disabled:opacity-50"
                      >
                        {isSending && (
                          <Loader2 size={11} className="animate-spin" />
                        )}
                        {isSending ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </form>
                </div>

                {/* SAFARI BOTTOM URL & NAV BAR */}
                <div className="flex items-center justify-between border-t border-neutral-800 bg-neutral-950/90 px-3 py-2 text-neutral-400">
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <Lock size={10} className="text-emerald-500" />
                    <span className="max-w-[150px] truncate text-neutral-300">
                      portfolio.angadchh.me
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Share
                      size={12}
                      className="cursor-pointer hover:text-white"
                    />
                    <BookOpen
                      size={12}
                      className="cursor-pointer hover:text-white"
                    />
                  </div>
                </div>
              </div>

              {/* iOS Home Indicator Bar */}
              <div className="mt-1 flex w-full justify-center pb-1">
                <div className="h-1 w-28 rounded-full bg-white/40" />
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
