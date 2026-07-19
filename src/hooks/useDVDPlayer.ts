"use client";

import { useRef, useState } from "react";
import { projects } from "@/lib/data";

export type PlayerState =
    | "playing"
    | "paused"
    | "stopped"
    | "loading"
    | "ejected";

export function useDVDPlayer() {

    const [currentProject, setCurrentProject] = useState(0);

    const [playerState, setPlayerState] =
        useState<PlayerState>("playing");

    const [direction, setDirection] =
        useState<"next" | "prev">("next");

    const [volume, setVolume] = useState(70);

    const [trayOpen, setTrayOpen] = useState(false);
    const transitionQueue = useRef<(() => void)[]>([]);
const isTransitioning = useRef(false);

function enqueue(action: () => void) {

    transitionQueue.current.push(action);

    processQueue();

}

function processQueue() {

    if (isTransitioning.current) return;

    const nextAction = transitionQueue.current.shift();

    if (!nextAction) return;

    isTransitioning.current = true;

    nextAction();

}

function finishTransition() {

    isTransitioning.current = false;

    processQueue();

}

function next() {

    enqueue(() => {

        setDirection("next");

        setPlayerState("loading");

        setTimeout(() => {

            setCurrentProject(prev =>
                (prev + 1) % projects.length
            );

            setPlayerState("playing");

            finishTransition();

        }, 450);

    });

}

function previous() {

    enqueue(() => {

        setDirection("prev");

        setPlayerState("loading");

        setTimeout(() => {

            setCurrentProject(prev =>
                prev === 0
                    ? projects.length - 1
                    : prev - 1
            );

            setPlayerState("playing");

            finishTransition();

        }, 450);

    });

}

    function togglePlay() {

        setPlayerState(state =>
            state === "playing"
                ? "paused"
                : "playing"
        );

    }

    function stop() {

        setPlayerState("stopped");

    }

    function eject() {

        setTrayOpen(prev => !prev);

        setPlayerState("ejected");

    }

const selectProject = (index: number) => {

    enqueue(() => {

        setPlayerState("loading");

        setTimeout(() => {

            setCurrentProject(index);

            setTrayOpen(false);

            setPlayerState("playing");

            finishTransition();

        }, 450);

    });

};

    return {

        project: projects[currentProject],

        playerState,

        direction,

        volume,

        trayOpen,

        setVolume,

        next,

        previous,

        togglePlay,

        stop,

        eject,

        selectProject

    };

}