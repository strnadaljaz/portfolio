"use client";

import { useEffect, useRef, useState } from "react";

/* ---------- data ---------- */

const projects = [
    {
        title: "World Cup Match Winner Predictor",
        type: "machine learning",
        description:
            "Worked on machine learning to predict the winner of a match between two nations.",
        tech: "Python · ML",
    },
    {
        title: "International Space Station Tracker",
        type: "hardware",
        description: "Built a tracker for the ISS using actual hardware.",
        tech: "C++ · hardware",
    },
    {
        title: "Kokovit Webpage",
        type: "web",
        description: "Built a webpage for a local business, Kokovit.",
        tech: "Next.JS",
    },
    {
        title: "Raylib 3D Solar System",
        type: "side project",
        description: "A 3D solar system built with Raylib. Written in my free time.",
        tech: "C++ · Raylib · 3D",
    },
    {
        title: "TaskFall",
        type: "web app",
        description:
            "An online to-do app made for my graduation thesis, built in PHP.",
        tech: "PHP · MySQL",
    },
];

const skills: Record<string, string[]> = {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwind CSS"],
    Backend: ["Python", "Node.js", "PHP", "MySQL", "Firebase"],
    "Game Development": ["C++", "C", "Raylib"],
    Tools: ["Git", "Docker", "Linux"],
};

const education = [
    {
        title: "Bachelors in Computer Science",
        period: "2025 — Present",
        org: "Faculty of Electrical Engineering, Computer Science and Informatics",
        note: "Currently going into my second year. Focusing on automatization, AI/ML engineering, web development, server management, and personal projects.",
    },
    {
        title: "Computer Technician",
        period: "2021 — 2025",
        org: "Secondary Electrical and Computer School Maribor",
        note: "Got fundamentals in C++ programming and web programming with HTML, CSS and PHP.",
    },
];

const currentYear = new Date().getFullYear();

/* ---------- scroll-reveal hook ---------- */

function useRevealOnScroll() {
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const root = containerRef.current;
        if (!root) return;

        const targets = root.querySelectorAll<HTMLElement>(
            ".reveal, .reveal-stagger"
        );

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

        targets.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return containerRef;
}

/* ---------- component ---------- */

export default function Home() {
    const [active, setActive] = useState("#about");
    const [progress, setProgress] = useState(0);
    const revealRef = useRevealOnScroll();

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
        const ids = ["about", "projects", "skills", "education", "contact"];
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

    const navItems = [
        { href: "#about", label: "about" },
        { href: "#projects", label: "projects" },
        { href: "#skills", label: "skills" },
        { href: "#education", label: "education" },
        { href: "#contact", label: "contact" },
    ];

    return (
        <div
            ref={revealRef}
            className="relative z-10 mx-auto grid max-w-[1080px] grid-cols-1 gap-16 px-6 md:grid-cols-[1fr_2fr] md:px-8"
        >
            {/* LEFT SIDE */}
            <aside className="flex h-auto flex-col justify-center py-16 md:sticky md:top-0 md:h-screen md:py-12">
                <h1 className="reveal text-4xl font-bold leading-tight tracking-tight">
                    Aljaž Strnad
                </h1>
                <p className="reveal mt-3 font-mono text-sm tracking-wide text-emerald-300" style={{ transitionDelay: "60ms" }}>
                    {"// software engineer"}
                </p>
                <p className="reveal mt-6 max-w-[280px] text-zinc-400" style={{ transitionDelay: "120ms" }}>
                    Building modern, efficient, and user-friendly software. I enjoy solving
                    complex problems and turning ideas into reality with clean code,
                    scalable architecture, and intuitive design.
                </p>

                <nav className="reveal mt-12 flex flex-row flex-wrap gap-4 md:flex-col md:gap-1" style={{ transitionDelay: "180ms" }}>
                    {navItems.map((item) => {
                        const isActive = active === item.href;
                        return (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`group flex items-center gap-3 py-1.5 font-mono text-xs transition-colors md:text-[0.8rem] ${isActive ? "text-zinc-100" : "text-zinc-400 hover:text-zinc-100"
                                    }`}
                            >
                                <span
                                    className={`hidden h-px bg-zinc-400 transition-all duration-300 md:block ${isActive
                                            ? "w-10 bg-emerald-300 nav-active-pulse"
                                            : "w-6 group-hover:w-10 group-hover:bg-emerald-300"
                                        }`}
                                />
                                {item.label}
                            </a>
                        );
                    })}
                </nav>

                <div className="reveal mt-12 hidden h-px w-full max-w-[200px] bg-zinc-800 md:block" style={{ transitionDelay: "240ms" }}>
                    <span
                        className="block h-full bg-emerald-300 transition-[width] duration-100"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </aside>

            {/* RIGHT SIDE */}
            <main className="pb-20 pt-8 md:pb-40 md:pt-28">
                {/* about */}
                <section id="about" className="scroll-mt-24">
                    <div className="reveal">
                        <Label>01 — about</Label>
                    </div>
                    <h2 className="reveal text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.1] tracking-tight" style={{ transitionDelay: "80ms" }}>
                        I solve{" "}
                        <span className="text-emerald-300">complex problems</span>.
                        <br />
                        I build{" "}
                        <span className="text-emerald-300">useful software</span>.
                    </h2>
                    <p className="reveal mt-6 max-w-[520px] text-[1.05rem] text-zinc-400" style={{ transitionDelay: "160ms" }}>
                        I&apos;m a full-stack developer with a passion for clean code,
                        scalable architecture, and intuitive design. I work on web
                        development, machine learning, and occasionally 2D/3D graphics.
                        Always learning, always growing.
                    </p>
                </section>

                {/* projects */}
                <section
                    id="projects"
                    className="mt-20 scroll-mt-24 border-t border-zinc-800 pt-16"
                >
                    <div className="reveal">
                        <Label>02 — projects</Label>
                    </div>
                    <div>
                        {projects.map((p, i) => (
                            <article
                                key={p.title}
                                className={`reveal-stagger py-7 transition-opacity hover:opacity-85 ${i !== 0 ? "border-t border-zinc-800" : ""
                                    }`}
                                style={{ ["--delay" as string]: `${i * 80}ms` }}
                            >
                                <div className="flex items-baseline justify-between gap-4">
                                    <h3 className="text-xl font-semibold tracking-tight">
                                        {p.title}
                                    </h3>
                                    <span className="whitespace-nowrap rounded-sm border border-zinc-800 px-2 py-0.5 font-mono text-[0.7rem] text-zinc-400">
                                        {p.type}
                                    </span>
                                </div>
                                <p className="mt-1 max-w-[560px] text-[0.95rem] text-zinc-400">
                                    {p.description}
                                </p>
                                <p className="mt-1 font-mono text-[0.72rem] text-emerald-300 opacity-80">
                                    {p.tech}
                                </p>
                            </article>
                        ))}
                    </div>
                    <p className="reveal mt-4 font-mono text-xs text-zinc-400">
                        Discover more on{" "}
                        <a
                            href="https://github.com/strnadaljaz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline text-zinc-100 decoration-emerald-300 transition-colors hover:text-emerald-300"
                        >
                            GitHub
                        </a>
                        .
                    </p>
                </section>

                {/* skills */}
                <section
                    id="skills"
                    className="mt-20 scroll-mt-24 border-t border-zinc-800 pt-16"
                >
                    <div className="reveal">
                        <Label>03 — skills</Label>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        {Object.entries(skills).map(([group, items], gi) => (
                            <div
                                key={group}
                                className="reveal-stagger"
                                style={{ ["--delay" as string]: `${gi * 100}ms` }}
                            >
                                <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-emerald-300">
                                    {group}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {items.map((s, si) => (
                                        <span
                                            key={s}
                                            className="reveal-stagger rounded-sm border border-zinc-800 px-2.5 py-1 font-mono text-[0.75rem] text-zinc-400"
                                            style={{ ["--delay" as string]: `${gi * 100 + si * 40}ms` }}
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* education */}
                <section
                    id="education"
                    className="mt-20 scroll-mt-24 border-t border-zinc-800 pt-16"
                >
                    <div className="reveal">
                        <Label>04 — education</Label>
                    </div>
                    {education.map((e, i) => (
                        <div
                            key={e.title}
                            className={`reveal-stagger grid grid-cols-1 gap-1 py-6 md:grid-cols-[120px_1fr] md:gap-6 ${i !== 0 ? "border-t border-zinc-800" : ""
                                }`}
                            style={{ ["--delay" as string]: `${i * 120}ms` }}
                        >
                            <div className="pt-0.5 font-mono text-[0.78rem] text-zinc-400">
                                {e.period}
                            </div>
                            <div>
                                <h3 className="text-[1.05rem] font-semibold">{e.title}</h3>
                                <div className="mt-0.5 text-sm text-emerald-300">{e.org}</div>
                                <p className="mt-2 text-sm text-zinc-400">{e.note}</p>
                            </div>
                        </div>
                    ))}
                </section>

                {/* contact */}
                <section
                    id="contact"
                    className="mt-20 scroll-mt-24 border-t border-zinc-800 pt-16"
                >
                    <div className="reveal">
                        <Label>05 — contact</Label>
                    </div>
                    <p className="reveal max-w-[480px] text-[1.4rem] font-semibold tracking-tight text-zinc-100" style={{ transitionDelay: "80ms" }}>
                        Have a question or want to work together?
                    </p>
                    <p className="reveal mt-4" style={{ transitionDelay: "140ms" }}>
                        {/* replace with your email */}
                        <a
                            href="mailto:strnadaljaz23@gmail.com"
                            className="link-underline border-b border-emerald-300 text-[1.1rem] text-zinc-100 transition-colors hover:text-emerald-300"
                        >
                            strnadaljaz23@gmail.com
                        </a>
                    </p>
                    <p className="reveal mt-4 max-w-[480px] text-zinc-400" style={{ transitionDelay: "200ms" }}>
                        Location: Slovenia. I usually reply within one business day.
                    </p>

                    <footer className="reveal mt-20 border-t border-zinc-800 pt-6 font-mono text-[0.72rem] text-zinc-400" style={{ transitionDelay: "260ms" }}>
                        © {currentYear} Aljaž Strnad · Built with Next.JS
                    </footer>
                </section>
            </main>
        </div>
    );
}

/* ---------- helper ---------- */

function Label({ children }: { children: React.ReactNode }) {
    return (
        <div className="mb-6 font-mono text-[0.75rem] uppercase tracking-widest text-emerald-300">
            {children}
        </div>
    );
}
