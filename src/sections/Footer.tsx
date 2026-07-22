import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDiscord,
} from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      icon: <FaGithub />,
      href: "https://github.com/Angadveer185",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/angadveer-singh",
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: <FaDiscord />,
      href: "https://discord.com",
      label: "Discord",
    },
  ];

  return (
    <footer className="px-5 pb-8 pt-16">
      <div className="mx-auto max-w-8xl">
        {/* Hand-drawn divider */}
        <div className="mb-8 h-[3px] w-full rounded-full bg-[#D4BAA3]/50" />

        <div className="rounded-3xl border-[3px] border-[#3E3124] bg-[#E9D3BB] px-8 py-6 text-[#3E3124] shadow-[6px_6px_0_#3E3124]">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            {/* Left */}
            <div className="text-center md:text-left">
              <h2 className="font-gochi text-3xl leading-none">
                Angadveer.
              </h2>

              <p className="mt-2 text-sm text-[#5B4A3D]">
                Building ideas, one sketch at a time.
              </p>

              <p className="mt-1 text-xs opacity-70">
                © {currentYear} All rights reserved.
              </p>
            </div>

            {/* Center */}
            <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Projects", "#projects"],
                ["Experience", "#experience"],
                ["Contact", "#contact"],
              ].map(([title, href]) => (
                <a
                  key={title}
                  href={href}
                  className="transition-transform duration-200 hover:-rotate-2 hover:scale-105"
                >
                  {title}
                </a>
              ))}
            </nav>

            {/* Right */}
            <div className="flex gap-3">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border-[2px] border-[#3E3124] bg-[#F5E1CD] text-lg transition-all duration-200 hover:-translate-y-1 hover:rotate-6 hover:bg-[#E25543] hover:text-[#F5E1CD]"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}