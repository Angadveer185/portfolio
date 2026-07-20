import React, { useState } from "react";
import { resumeData } from "./ResumeData";
import { Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

function IPad() {
  const { personal, education, experience, projects, skills, honors } = resumeData;
  const [isOn, setIsOn] = useState(true);

  return (
    <div className="relative mx-auto flex w-full max-w-sm flex-col items-center gap-4 rounded-[2.5rem] border-4 border-[#AAABAC] bg-black p-4 select-none transition-all duration-300 sm:max-w-xl md:max-w-4xl md:flex-row md:p-6 md:pr-3">
      
      {/* Outer Screen Bounding Container */}
      <div className="relative flex min-h-[500px] w-full items-center justify-center overflow-hidden rounded-[1.8rem] bg-[#F5F5F5] text-[#222222] font-sans p-4 md:h-full md:p-[3%]">
        
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

      </div>

      {/* Hardware Home/Power Button */}
      <button 
        onClick={() => setIsOn(!isOn)}
        className="aspect-square w-8 cursor-pointer rounded-full border border-[#AAABAC] bg-neutral-900 transition-transform active:scale-90"
        aria-label="Toggle Screen"
      />
    </div>
  );
}

export default IPad;