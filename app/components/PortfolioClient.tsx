"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useActive } from "@/Contexts/ActiveContext";
import { useProgress } from "@/Contexts/ProgressContext";

export type PortfolioData = {
    navItems: { href: string; label: string }[];
    projects: {
        title: string;
        type: string;
        description: string;
        tech: string;
        links: { label: string; href: string }[];
    }[];
    skills: Record<string, string[]>;
    experience: {
        role: string;
        company: string;
        period: string;
        bullets: string[];
    }[];
    education: {
        title: string;
        period: string;
        org: string;
        note: string;
    }[];
    achievements: string[];
};

export default function PortfolioClient({
    children,
    data,
}: {
    children: ReactNode;
    data: PortfolioData;
}) {
    const revealRef = useRef<HTMLDivElement | null>(null);
    const { setProgress } = useProgress();
    const { setActive } = useActive();

    useEffect(() => {
        const root = revealRef.current;
        if (!root) return;

        const targets = root.querySelectorAll<HTMLElement>(".reveal, .reveal-stagger");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
        );

        targets.forEach((element) => observer.observe(element));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        function onScroll() {
            const html = document.documentElement;
            const denominator = html.scrollHeight - html.clientHeight;
            setProgress(denominator > 0 ? (html.scrollTop / denominator) * 100 : 0);
            const progress = document.querySelector<HTMLElement>("[data-scroll-progress]");
            if (progress) progress.style.width = `${denominator > 0 ? (html.scrollTop / denominator) * 100 : 0}%`;
        }

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, [setProgress]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(`#${entry.target.id}`);
                });
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );

        data.navItems.forEach(({ href }) => {
            const section = document.getElementById(href.slice(1));
            if (section) observer.observe(section);
        });
        return () => observer.disconnect();
    }, [data.navItems, setActive]);

    return (
        <div ref={revealRef} className="contents">
            {children}
        </div>
    );
}
