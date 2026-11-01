import type { CSSProperties } from "react";
import PortfolioClient, { type PortfolioData } from "@/app/components/PortfolioClient";
import Avatar from "@/Components/Avatar";
import Contact from "@/Components/Contact";
import Navbar from "@/Components/Navbar";

const data = {
    navItems: [
        { href: "#about", label: "about" },
        { href: "#projects", label: "projects" },
        { href: "#experience", label: "experience" },
        { href: "#skills", label: "skills" },
        { href: "#education", label: "education" },
        { href: "#contact", label: "contact" },
    ],
    projects: [
        {
            title: "World Championship Match Preview",
            type: "machine learning",
            description:
                "AI web app for predicting international football match outcomes. XGBoost model trained on 5,000+ historical matches, ~60% accuracy. FastAPI backend serves predictions; Next.js frontend with animated graphs.",
            tech: "Python · FastAPI · XGBoost · Next.js · ML",
            links: [
                { label: "Live Demo", href: "https://international-match-predictor.vercel.app/" },
                { label: "GitHub", href: "https://github.com/strnadaljaz/world_cup_match_predictor" },
            ],
        },
        {
            title: "ISS Tracker",
            type: "hardware",
            description:
                "Automated system that predicts when the ISS is visible from a given location, sends a Telegram notification, and points servo motors via ESP32 at the station.",
            tech: "Python · ESP32 · FastAPI · Skyfield",
            links: [{ label: "GitHub", href: "https://github.com/strnadaljaz/iss_tracker" }],
        },
        {
            title: "Kokovit Webpage",
            type: "web",
            description: "Built a webpage and web store for a local business, Kokovit.",
            tech: "Next.JS",
            links: [],
        },
        {
            title: "Raylib 3D Solar System",
            type: "side project",
            description: "A 3D solar system built with Raylib. Written in my free time.",
            tech: "C++ · Raylib · 3D",
            links: [],
        },
    ],
    skills: {
        Languages: ["Python", "C", "C++", "JavaScript", "TypeScript", "SQL", "PHP"],
        Frontend: ["React", "Next.js", "HTML", "CSS", "TailwindCSS"],
        Backend: ["Node.js", "FastAPI", "REST APIs", "MySQL"],
        DevOps: ["Docker", "Linux", "Git"],
        Hardware: ["ESP32", "Arduino"],
        "Photo / Video": ["Adobe Software", "GIMP"],
    },
    experience: [
        {
            role: "Freelance IT Solutions Developer",
            company: "Independent",
            period: "Oct 2025 — Present",
            bullets: [
                "Worked with various companies and developed web solutions tailored to their needs.",
                "Automated business processes, including quote generation and customer communication.",
                "Optimized website performance — results above 90 points on Google PageSpeed.",
                "Automation reduced repetitive administrative work by ~20 hours per month.",
            ],
        },
        {
            role: "Web Developer",
            company: "InteractIdeas.pt — Internship",
            period: "Oct 2023 — Nov 2023",
            bullets: [
                "Practical training abroad.",
                "Participated in the development of an AI platform that prepares learning units for teachers.",
                "Worked with React, Django, PHP, and MySQL.",
            ],
        },
    ],
    education: [
        {
            title: "Bachelors in Computer Science and Information Technologies",
            period: "2025 — 2028",
            org: "FERI — Faculty of Electrical Engineering, Computer Science and Informatics",
            note: "Currently in my first year. Focusing on automation, AI/ML engineering, web development, server management, and personal projects.",
        },
        {
            title: "Computer Technician",
            period: "2021 — 2025",
            org: "Secondary Electrical and Computer School Maribor",
            note: "Got fundamentals in C++ programming and web programming with HTML, CSS and PHP.",
        },
    ],
    achievements: [
        "Three times among the best in the country in mathematics — 1st place, 3rd place, silver award.",
        "Silver award for research work.",
        "Awarded as one of the best students of my generation by Elektro Maribor.",
    ],
} satisfies PortfolioData;

const revealDelay = (milliseconds: number): CSSProperties =>
    ({ transitionDelay: `${milliseconds}ms` });

const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            name: "Aljaž Strnad",
            url: "https://strnadaljaz.si",
            image: "https://strnadaljaz.si/me.webp",
            jobTitle: "Programmer & Computer Science Student",
            alumniOf: [
                { "@type": "CollegeOrUniversity", name: "FERI" },
                { "@type": "EducationalOrganization", name: "Secondary Electrical and Computer School Maribor" },
            ],
            knowsAbout: Object.values(data.skills).flat(),
            sameAs: ["https://github.com/strnadaljaz", "https://linkedin.com/in/aljaz-strnad"],
            address: { "@type": "PostalAddress", addressLocality: "Maribor", addressCountry: "Slovenia" },
        },
        { "@type": "WebSite", name: "Aljaž Strnad — Portfolio", url: "https://strnadaljaz.si", inLanguage: "en" },
        {
            "@type": "ItemList",
            itemListElement: data.projects.map((project, index) => ({
                "@type": "ListItem",
                position: index + 1,
                name: project.title,
                description: project.description,
                url: project.links[0]?.href,
            })),
        },
    ],
};

export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <PortfolioClient data={data}>
                <div className="relative z-10 mx-auto grid max-w-[1080px] grid-cols-1 gap-16 px-6 md:grid-cols-[1fr_2fr] md:px-8">
                    <aside className="flex h-auto flex-col justify-center py-16 md:sticky md:top-0 md:h-screen md:py-12">
                        <div className="reveal mb-8"><Avatar src="/me.webp" initials="AS" /></div>
                        <h1 className="reveal text-4xl font-bold leading-tight tracking-tight">Aljaž Strnad</h1>
                        <p className="reveal mt-3 font-mono text-sm tracking-wide text-emerald-300" style={revealDelay(60)}>
                            {"// programmer · cs student"}
                        </p>
                        <p className="reveal mt-6 max-w-[280px] text-zinc-400" style={revealDelay(120)}>
                            Computer science student at FERI with experience in full-stack web development and automation. Most interested in backend systems, process automation, and applications that leverage AI.
                        </p>
                        <Navbar />
                        <div className="reveal mt-12 hidden h-px w-full max-w-[200px] bg-zinc-800 md:block" style={revealDelay(240)}>
                            <span data-scroll-progress className="block h-full bg-emerald-300 transition-[width] duration-100" style={{ width: "0%" }} />
                        </div>
                    </aside>
                    <main className="pb-20 pt-8 md:pb-40 md:pt-28">
                        <section id="about" className="scroll-mt-24">
                            <div className="reveal mb-6 font-mono text-[0.75rem] uppercase tracking-widest text-emerald-300">01 — about</div>
                            <h2 className="reveal text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.1] tracking-tight" style={revealDelay(80)}>
                                I solve <span className="text-emerald-300">complex problems</span>.<br />
                                I build <span className="text-emerald-300">useful software</span>.
                            </h2>
                            <p className="reveal mt-6 max-w-[520px] text-[1.05rem] text-zinc-400" style={revealDelay(160)}>
                                Computer science student at FERI with hands-on experience in full-stack web development and automation, gained both through professional practice and by building solutions for companies. I enjoy clean code, scalable architecture, and intuitive design — always learning, always growing.
                            </p>
                        </section>
                        <section id="projects" className="mt-20 scroll-mt-24 border-t border-zinc-800 pt-16">
                            <div className="reveal mb-6 font-mono text-[0.75rem] uppercase tracking-widest text-emerald-300">02 — selected projects</div>
                            {data.projects.map((project, index) => (
                                <article key={project.title} className={`reveal-stagger py-7 transition-opacity hover:opacity-85 ${index !== 0 ? "border-t border-zinc-800" : ""}`} style={{ ...revealDelay(index * 80), ["--delay" as string]: `${index * 80}ms` }}>
                                    <div className="flex items-baseline justify-between gap-4"><h3 className="text-xl font-semibold tracking-tight">{project.title}</h3><span className="whitespace-nowrap rounded-sm border border-zinc-800 px-2 py-0.5 font-mono text-[0.7rem] text-zinc-400">{project.type}</span></div>
                                    <p className="mt-1 max-w-[560px] text-[0.95rem] text-zinc-400">{project.description}</p>
                                    <p className="mt-1 font-mono text-[0.72rem] text-emerald-300 opacity-80">{project.tech}</p>
                                    {project.links.length > 0 && <div className="mt-2 flex flex-wrap gap-4 font-mono text-[0.72rem]">{project.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="link-underline text-zinc-300 transition-colors hover:text-emerald-300">{link.label} ↗</a>)}</div>}
                                </article>
                            ))}
                            <p className="reveal mt-4 font-mono text-xs text-zinc-400">Discover more on <a href="https://github.com/strnadaljaz" target="_blank" rel="noopener noreferrer" className="link-underline text-zinc-100 decoration-emerald-300 transition-colors hover:text-emerald-300">GitHub</a>.</p>
                        </section>
                        <section id="experience" className="mt-20 scroll-mt-24 border-t border-zinc-800 pt-16">
                            <div className="reveal mb-6 font-mono text-[0.75rem] uppercase tracking-widest text-emerald-300">03 — experience</div>
                            {data.experience.map((item, index) => <div key={item.role} className={`reveal-stagger grid grid-cols-1 gap-1 py-6 md:grid-cols-[140px_1fr] md:gap-6 ${index !== 0 ? "border-t border-zinc-800" : ""}`} style={{ ...revealDelay(index * 120), ["--delay" as string]: `${index * 120}ms` }}><div className="pt-0.5 font-mono text-[0.78rem] text-zinc-400">{item.period}</div><div><h3 className="text-[1.05rem] font-semibold">{item.role}</h3><div className="mt-0.5 text-sm text-emerald-300">{item.company}</div><ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-400 marker:text-zinc-600">{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul></div></div>)}
                        </section>
                        <section id="skills" className="mt-20 scroll-mt-24 border-t border-zinc-800 pt-16">
                            <div className="reveal mb-6 font-mono text-[0.75rem] uppercase tracking-widest text-emerald-300">04 — skills</div>
                            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">{Object.entries(data.skills).map(([group, items], groupIndex) => <div key={group} className="reveal-stagger" style={{ ["--delay" as string]: `${groupIndex * 100}ms` }}><h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-emerald-300">{group}</h3><ul className="flex flex-wrap gap-2">{items.map((skill, skillIndex) => <li key={skill} className="reveal-stagger rounded-sm border border-zinc-800 px-2.5 py-1 font-mono text-[0.75rem] text-zinc-400" style={{ ["--delay" as string]: `${groupIndex * 100 + skillIndex * 40}ms` }}>{skill}</li>)}</ul></div>)}</div>
                        </section>
                        <section id="education" className="mt-20 scroll-mt-24 border-t border-zinc-800 pt-16">
                            <div className="reveal mb-6 font-mono text-[0.75rem] uppercase tracking-widest text-emerald-300">05 — education</div>
                            {data.education.map((item, index) => <div key={item.title} className={`reveal-stagger grid grid-cols-1 gap-1 py-6 md:grid-cols-[120px_1fr] md:gap-6 ${index !== 0 ? "border-t border-zinc-800" : ""}`} style={{ ...revealDelay(index * 120), ["--delay" as string]: `${index * 120}ms` }}><div className="pt-0.5 font-mono text-[0.78rem] text-zinc-400">{item.period}</div><div><h3 className="text-[1.05rem] font-semibold">{item.title}</h3><div className="mt-0.5 text-sm text-emerald-300">{item.org}</div><p className="mt-2 text-sm text-zinc-400">{item.note}</p></div></div>)}
                            <div className="mt-8 reveal-stagger"><h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-emerald-300">Achievements</h3><ul className="space-y-1 text-sm text-zinc-400 marker:text-zinc-600">{data.achievements.map((achievement) => <li key={achievement} className="flex gap-2"><span className="text-emerald-300/70">—</span><span>{achievement}</span></li>)}</ul></div>
                        </section>
                        <Contact />
                    </main>
                </div>
            </PortfolioClient>
        </>
    );
}
