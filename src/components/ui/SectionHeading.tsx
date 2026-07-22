"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface SectionHeaderProps {
  /** The main title text (e.g. "Skills - Palette") */
  title: string;
  /** Optional HTML element ID for anchor linking */
  id?: string;
  /** Optional subtitle or category label displayed above the title */
  subtitle?: string;
  /** Custom alignment: default is 'center' */
  align?: "left" | "center" | "right";
  /** Optional additional CSS class overrides */
  className?: string;

  inverted?: boolean;
}

const headerContainerVariants: Variants = {
  hidden: { opacity: 0, y: -24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
    },
  },
};

const titleChildVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function SectionHeader({
  title,
  id,
  subtitle,
  align = "center",
  className = "",
  inverted = false,
}: SectionHeaderProps) {
  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  return (
    <motion.div
      id={id}
      className={`flex w-full flex-col justify-center px-4 py-8 md:px-8 md:py-14 lg:px-20 ${alignmentClasses[align]} ${className}`}
      variants={headerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {subtitle && (
        <motion.span
          variants={titleChildVariants}
          className={`font-bree mb-2 text-xs font-semibold tracking-widest uppercase md:text-sm ${inverted ? "text-text-tertiary" : "text-text-primary"}`}
        >
          {subtitle}
        </motion.span>
      )}

      <motion.h2
        variants={titleChildVariants}
        className={`font-splash text-7xl sm:text-8xl md:text-9xl select-none ${inverted ? "text-text-tertiary" : "text-text-primary"}`}
        whileHover={{ scale: 1.02, rotate: -1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
      >
        {title}
      </motion.h2>
    </motion.div>
  );
}