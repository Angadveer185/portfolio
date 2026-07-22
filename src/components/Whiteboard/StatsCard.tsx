"use client";

import { motion } from "framer-motion";
import MarkerHeading from "./MarkerHeading";
import SketchCard from "./SketchCard";
import StatSticky from "./StatSticky";
import { aboutData } from "@/lib/data";

export default function StatsCard() {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 30,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
            }}
            className=""
        >
            <SketchCard
                rotate="left"
                className="flex flex-col justify-between"
            >
                <div>
                    <MarkerHeading>
                        What I've Done
                    </MarkerHeading>

                    <div className="mt-6 grid grid-cols-2 gap-4">

                        <StatSticky
                            title="Projects"
                            value={aboutData.stats.projects}
                            suffix="+"
                            rotate="-rotate-2"
                        />

                        <StatSticky
                            title="Git Pushes"
                            value={aboutData.stats.githubPushes}
                            suffix="+"
                            rotate="rotate-2"
                        />

                    </div>
                </div>
            </SketchCard>
        </motion.div>
    );
}