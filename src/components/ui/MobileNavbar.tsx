"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  House,
  User,
  PencilRuler,
  BriefcaseBusiness,
  FileText,
  Mail,
} from "lucide-react";

const items = [
  {
    id: "landing",
    href: "#landing",
    label: "Home",
    icon: House,
    color: "#F5E1CD",
    rotation: -4,
  },
  {
    id: "about",
    href: "#about",
    label: "About",
    icon: User,
    color: "#E9D3BB",
    rotation: 3,
  },
  {
    id: "projects",
    href: "#projects",
    label: "Projects",
    icon: PencilRuler,
    color: "#F4E0CC",
    rotation: -2,
  },
  {
    id: "experience",
    href: "#experience",
    label: "Experience",
    icon: BriefcaseBusiness,
    color: "#ECD8C1",
    rotation: 2,
  },
  {
    id: "resume",
    href: "#resume",
    label: "Resume",
    icon: FileText,
    color: "#F5E1CD",
    rotation: -3,
  },
  {
    id: "contact",
    href: "#contact",
    label: "Contact",
    icon: Mail,
    color: "#F5E1CD",
    rotation: -3,
  },
];

export default function MobileNavbar() {
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState("landing");

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const current = window.scrollY;

      if (current < 20) {
        setVisible(true);
      } else {
        setVisible(current < lastScroll);
      }

      lastScroll = current;

      const sections = items.map((i) => document.getElementById(i.id));

      for (const section of sections) {
        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: 120 }}
          animate={{ y: 0 }}
          exit={{ y: 120 }}
          transition={{
            duration: 0.35,
            ease: "easeInOut",
          }}
          className="fixed bottom-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 md:hidden"
        >
          <div className="relative flex items-center justify-between overflow-visible rounded-[24px] border-2 border-[#5b5248] bg-[#262626] px-4 py-2.5 shadow-[0_10px_25px_rgba(0,0,0,0.45)]">
            {/* Background Texture Effect */}
            <div
              className="pointer-events-none absolute inset-0 rounded-[24px] opacity-[0.06]"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 30%, white 1px, transparent 1px),
                  radial-gradient(circle at 70% 80%, white 1px, transparent 1px),
                  radial-gradient(circle at 50% 50%, white 1px, transparent 1px)
                `,
                backgroundSize: "18px 18px",
              }}
            />

            {items.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.id;

              return (
                <Link key={item.id} href={item.href} aria-label={item.label}>
                  <motion.div
                    whileTap={{ scale: 0.92 }}
                    whileHover={{ scale: 1.05 }}
                    animate={{
                      y: isActive ? -4 : 2,
                      rotate: isActive
                        ? 0
                        : item.rotation + Math.sin(item.rotation) * 2,
                      scale: isActive ? 1.08 : 1,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 420,
                      damping: 17,
                      mass: 0.6,
                    }}
                    className="relative flex flex-col items-center justify-center"
                  >
                    <div
                      style={{
                        background: item.color,
                      }}
                      className={`flex h-12 w-11 items-center justify-center rounded-t-[12px] rounded-br-[6px] rounded-bl-[10px] border-[2.5px] border-[#6D6358] shadow-[1px_2px_0px_#5A5147] transition-all sm:h-14 sm:w-12 ${
                        isActive ? "shadow-xl opacity-100" : "opacity-75"
                      }`}
                    >
                      {isActive && (
                        <div className="absolute -top-1 left-1/2 h-2 w-5 -translate-x-1/2 rotate-[-8deg] rounded-sm border border-[#e0c78d] bg-[#F8E8B8]/70" />
                      )}
                      <Icon
                        size={20}
                        strokeWidth={2.4}
                        className="text-[#2C2C2C] sm:size-[22px]"
                      />
                    </div>

                    {/* Active Underline Effect */}
                    {isActive && (
                      <motion.svg
                        width="30"
                        height="8"
                        viewBox="0 0 34 12"
                        className="absolute -bottom-2"
                      >
                        <motion.path
                          d="M2 8 C8 3, 16 11, 32 5"
                          stroke="#E25543"
                          strokeWidth="3"
                          fill="transparent"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.35 }}
                        />
                      </motion.svg>
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}