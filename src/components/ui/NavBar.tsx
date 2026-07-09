"use client";

import Image from "next/image";
import Link from "next/link";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Resume", href: "#resume" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">

      <div className="flex justify-center">

        <div className="relative w-[70%] max-w-screen-2xl">

          {/* Paper */}
          <Image
            src="/images/Paper.svg"
            alt="Sketchbook Navbar"
            priority
            draggable={false}
            width={1600}
            height={220}
            className="h-auto w-full select-none pointer-events-none"
          />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16">

            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="/images/Logo.svg"
                alt="Logo"
                width={54}
                height={54}
                className="h-auto w-7 sm:w-8 md:w-10 lg:w-12 transition duration-300 hover:rotate-6 hover:scale-105"
              />
            </Link>

            {/* Navigation */}
            <nav className="flex min-w-0 items-center justify-end gap-3 overflow-x-auto sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 sm:mb-1 md:mb-2 lg:mb-4 xl:mb-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="whitespace-nowrap text-xs text-text-tertiary tracking-wide transition duration-200 hover:-translate-y-0.5 hover:text-text-primary sm:text-sm md:text-base lg:text-lg"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

          </div>

        </div>

      </div>
    </header>
  );
}