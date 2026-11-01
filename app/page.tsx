"use client";

import { useEffect } from "react";
import Side from "@/Components/Side";
import Main from "@/Components/Main";
import useRevealOnScroll from "@/Hooks/ScrollReveal";
import { useProgress } from "@/Contexts/ProgressContext";
import { useActive } from "@/Contexts/ActiveContext";

/* ---------- component ---------- */
export default function Home() {
    const revealRef = useRevealOnScroll();
    const { setProgress } = useProgress();
    const { setActive } = useActive();

    useEffect(() => {
        function onScroll() {
            const h = document.documentElement;
            const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight);
            setProgress(scrolled * 100);
        }
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const ids = [
            "about",
            "projects",
            "skills",
            "experience",
            "education",
            "contact",
        ];
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive("#" + e.target.id);
                });
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={revealRef}
            className="relative z-10 mx-auto grid max-w-[1080px] grid-cols-1 gap-16 px-6 md:grid-cols-[1fr_2fr] md:px-8"
        >
            <Side />
            <Main />
        </div>
    );
}
