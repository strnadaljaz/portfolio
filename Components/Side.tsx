"use client";

import { useProgress } from "@/Contexts/ProgressContext";
import Avatar from "./Avatar";
import Navbar from "./Navbar";

const Side = () => {
    const { progress } = useProgress();

    return (
        <div>
            {/* LEFT SIDE */}
            <aside className="flex h-auto flex-col justify-center py-16 md:sticky md:top-0 md:h-screen md:py-12" >
                {/* avatar */}
                < div className="reveal mb-8" >
                    <Avatar src="/me.webp" initials="AS" />
                </div >
                <h1 className="reveal text-4xl font-bold leading-tight tracking-tight">
                    Aljaž Strnad
                </h1>
                <p
                    className="reveal mt-3 font-mono text-sm tracking-wide text-emerald-300"
                    style={{ transitionDelay: "60ms" }}
                >
                    {"// programmer · cs student"}
                </p>
                <p
                    className="reveal mt-6 max-w-[280px] text-zinc-400"
                    style={{ transitionDelay: "120ms" }}
                >
                    Computer science student at FERI with experience in full-stack web
                    development and automation. Most interested in backend systems,
                    process automation, and applications that leverage AI.
                </p>

                <Navbar />
                <div
                    className="reveal mt-12 hidden h-px w-full max-w-[200px] bg-zinc-800 md:block"
                    style={{ transitionDelay: "240ms" }}
                >
                    <span
                        className="block h-full bg-emerald-300 transition-[width] duration-100"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </aside >
        </div>
    );
}

export default Side;
