"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

interface Props {
    title: string;
    value: number;
    suffix?: string;
    rotate?: string;
}

export default function StatSticky({
    title,
    value,
    suffix,
    rotate = "",
}: Props) {
    return (
        <motion.div
            whileHover={{
                scale: 1.04,
                rotate: 0,
                y: -6,
            }}
            className={rotate}
        >
            <div
                className="
                relative
                rounded-2xl
                border-[3px]
                border-[#3E3124]
                bg-[#FFF7C7]
                px-6
                py-3
                shadow-lg
            "
            >
                {/* Push pin */}

                <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E25543] shadow" />

                <p
                    className="
                    text-center
                    text-sm
                    font-semibold
                    uppercase
                    tracking-wider
                    text-[#6F5847]
                "
                >
                    {title}
                </p>

                <div
                    className="
                    mt-4
                    text-center
                    text-5xl
                    font-black
                    text-[#3E3124]
                "
                >
                    <AnimatedCounter
                        value={value}
                        suffix={suffix}
                    />
                </div>
            </div>
        </motion.div>
    );
}