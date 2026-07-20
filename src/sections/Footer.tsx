import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-neutral-800/60 bg-neutral-950 px-4 py-8 font-sans text-neutral-400 select-none">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        {/* Left Side: Brand & Copyright */}
        <div className="text-center md:text-left">
          <h2 className="text-base font-bold tracking-wide text-white">
            Angadveer
          </h2>
          <p className="mt-1 text-xs text-neutral-500">
            &copy; {currentYear} All rights reserved.
          </p>
        </div>

        {/* Center: Simple Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium">
          <a
            href="#about"
            className="transition-colors duration-200 hover:text-white"
          >
            About
          </a>
          <a
            href="#projects"
            className="transition-colors duration-200 hover:text-white"
          >
            Projects
          </a>
          <a
            href="#experience"
            className="transition-colors duration-200 hover:text-white"
          >
            Experience
          </a>
          <a
            href="#contact"
            className="transition-colors duration-200 hover:text-white"
          >
            Contact
          </a>
        </nav>

        {/* Right Side: Social Media Icons */}
        <div className="flex items-center gap-4 text-lg">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-200 hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-200 hover:text-white"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-200 hover:text-white"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://discord.com"
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-200 hover:text-white"
            aria-label="Discord"
          >
            <FaDiscord />
          </a>
        </div>
      </div>
    </footer>
  );
}
