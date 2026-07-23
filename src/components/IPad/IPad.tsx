"use client";

import React, { useState } from "react";
import { resumeData } from "./ResumeData";
import { Mail, Phone, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";

function IPad() {
  const { personal, education, experience, projects, skills, honors } = resumeData;
  const [isOn, setIsOn] = useState(true);

  // Resume PDF download handler
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = `${personal.name.replace(/\s+/g, "_")}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      className="relative mx-auto w-full max-w-sm select-none transition-all duration-300 sm:max-w-xl md:max-w-4xl"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom smooth cubic-bezier curve
      }}
    >
      {/* REALISTIC HARDWARE BUTTONS */}
      {/* Top Power Edge Button */}
      <button 
        onClick={() => setIsOn(!isOn)}
        className="absolute -top-[5px] right-14 z-40 h-[5px] w-12 rounded-t-md bg-gradient-to-r from-neutral-700 via-neutral-600 to-neutral-700 border-x border-t border-neutral-500/50 shadow-sm cursor-pointer active:translate-y-[1px]"
        title="Power Button (Toggle Screen)"
        aria-label="Toggle Screen"
      />

      {/* Side Volume Buttons */}
      <div className="absolute -left-[5px] top-20 z-40 flex flex-col gap-3">
        <div className="h-10 w-[5px] rounded-l-md bg-gradient-to-b from-neutral-700 via-neutral-600 to-neutral-700 border-y border-l border-neutral-500/50" />
        <div className="h-10 w-[5px] rounded-l-md bg-gradient-to-b from-neutral-700 via-neutral-600 to-neutral-700 border-y border-l border-neutral-500/50" />
      </div>

      {/* CHASSIS CONTAINER (Multi-layered metallic bevels + depth shadow) */}
      <div className="relative aspect-[10/16] md:aspect-[16/10] w-full rounded-[2.8rem] border-[10px] border-[#262626] bg-[#171717] p-3.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.2)] ring-1 ring-neutral-800">
        
        {/* Front-Facing Camera Dot */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-[#0d0d0d] ring-1 ring-neutral-800 flex items-center justify-center">
            <div className="h-0.5 w-0.5 rounded-full bg-blue-900/60" />
          </div>
        </div>

        {/* SCREEN VIEWPORT */}
        <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] bg-[#F5F5F5] text-[#222222] font-sans p-4 md:p-[3.5%] shadow-inner">
          
          {/* Subtle Glass Surface Reflection Glow */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-2xl z-40" />

          {/* DISGUISED ACTION BAR (iPad OS Top Status Bar) */}
          <div className="absolute top-2 right-4 z-30 flex items-center gap-2 text-neutral-600 text-xs font-semibold">
            <button 
              onClick={handleDownload}
              className="flex items-center gap-1.5 rounded-full bg-black/5 px-2.5 py-1 text-[11px] font-medium text-neutral-700 transition-all hover:bg-black/10 active:scale-95 cursor-pointer backdrop-blur-sm"
              title="Export Resume PDF"
            >
              <Download size={12} className="text-neutral-800" />
              <span className="hidden sm:inline">Export PDF</span>
            </button>
          </div>

          {/* Animated Black Screen Overlay for Power On/Off */}
          <div 
            className={`absolute inset-0 bg-black z-50 transition-all duration-500 ease-in-out pointer-events-none ${
              isOn ? "opacity-0 scale-105 blur-none" : "opacity-100 scale-100"
            }`} 
          />

          {/* Resume Sheet Content */}
          <div className="w-full h-full flex flex-col justify-between gap-4">
            
            {/* HEADER SECTION */}
            <div className="flex flex-col gap-2 border-b-2 border-black pb-2 md:flex-row md:items-baseline md:justify-between">
              <h1 className="text-xl font-extrabold tracking-tight sm:text-2xl md:text-3xl">{personal.name}</h1>
              <div className="flex flex-wrap gap-2 text-[9px] text-gray-700 font-medium sm:text-[10px] md:gap-4">
                <span className="flex items-center gap-1"><Phone size={11} /> {personal.phone}</span>
                <span className="flex items-center gap-1"><Mail size={11} /> {personal.email}</span>
                <span className="flex items-center gap-1"><FaGithub /> {personal.github}</span>
                <span className="flex items-center gap-1"><FaLinkedin /> {personal.linkedin}</span>
              </div>
            </div>

            {/* MAIN CONTAINER: 1 Column on Mobile, 2 Columns on Tablet/Desktop */}
            <div className="flex flex-col gap-6 md:grid md:grid-cols-12 md:h-full md:mt-3 overflow-y-auto md:overflow-hidden">
              
              {/* LEFT COLUMN (Education, Experience, Honors) */}
              <div className="flex flex-col justify-between gap-4 md:col-span-7 md:h-full md:pr-2">
                
                {/* EDUCATION */}
                <div>
                  <h2 className="text-xs font-black tracking-widest text-black uppercase mb-1">EDUCATION</h2>
                  <hr className="border-gray-400 mb-2" />
                  {education.map((edu, idx) => (
                    <div key={idx} className="text-[11px] mb-2">
                      <div className="flex justify-between font-bold">
                        <span>{edu.degree} • <span className="font-normal text-gray-600">{edu.university}</span></span>
                        <span className="font-extrabold whitespace-nowrap">CGPA {edu.cgpa}</span>
                      </div>
                      <div className="text-[10px] text-gray-500">{edu.duration}</div>
                    </div>
                  ))}
                </div>

                {/* EXPERIENCE */}
                <div>
                  <h2 className="text-xs font-black tracking-widest text-black uppercase mb-1">EXPERIENCE</h2>
                  <hr className="border-gray-400 mb-2" />
                  {experience.map((exp, idx) => (
                    <div key={idx} className="text-[11px]">
                      <div className="flex justify-between font-bold">
                        <span>{exp.role}</span>
                        <span className="font-semibold text-gray-600 text-[10px] whitespace-nowrap">{exp.duration}</span>
                      </div>
                      <div className="text-gray-600 font-medium text-[10px] mb-1">{exp.company}</div>
                      <ul className="list-disc pl-4 space-y-0.5 text-gray-700 text-[10px]">
                        {exp.points.map((pt, pIdx) => <li key={pIdx}>{pt}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* HONORS */}
                <div className="pt-2">
                  <h2 className="text-xs font-black tracking-widest text-black uppercase mb-1">HONORS</h2>
                  <hr className="border-gray-400 mb-2" />
                  <ul className="list-disc pl-4 space-y-0.5 text-gray-700 text-[10px]">
                    {honors.map((honor, idx) => (
                      <li key={idx} className="marker:text-amber-600">{honor}</li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* RIGHT COLUMN (Projects, Tech Stack) */}
              <div className="flex flex-col justify-between gap-4 md:col-span-5 md:h-full md:pl-4 md:border-l md:border-gray-300">
                
                {/* PROJECTS */}
                <div>
                  <h2 className="text-xs font-black tracking-widest text-black uppercase mb-1">PROJECTS</h2>
                  <hr className="border-gray-400 mb-2" />
                  <div className="space-y-3">
                    {projects.map((proj, idx) => (
                      <div key={idx} className="text-[11px]">
                        <div className="flex justify-between font-bold">
                          <span>{proj.name}</span>
                          <span className="text-[9px] font-normal text-gray-500">{proj.type}</span>
                        </div>
                        <div className="text-[10px] italic text-gray-600 font-medium mb-1">
                          {proj.stack.join(" • ")}
                        </div>
                        <ul className="list-disc pl-4 space-y-0.5 text-gray-700 text-[10px]">
                          {proj.points.map((pt, pIdx) => <li key={pIdx}>{pt}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TECH STACK */}
                <div className="pt-2">
                  <h2 className="text-xs font-black tracking-widest text-black uppercase mb-1">TECH STACK</h2>
                  <hr className="border-gray-400 mb-2" />
                  <div className="space-y-1 text-[11px]">
                    {skills.map((skillGroup, idx) => (
                      <div key={idx} className="font-medium text-gray-800">
                        <span className="font-bold text-black">{skillGroup.title}:</span>{" "}
                        {skillGroup.skills.join(", ")}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* DISGUISED ACTION DOCK (Floating iPadOS Home Bar) */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
            <div
              className="group flex items-center gap-2 rounded-full bg-neutral-900/80 px-2 py-1 backdrop-blur-md shadow-lg"
            >
              <div className="h-1.5 w-16 rounded-full bg-white/40 transition-colors group-hover:bg-white/80" />
            </div>
          </div>

        </div>
      </div>
    </motion.div>
  );
}

export default IPad;