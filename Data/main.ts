/* ---------- data ---------- */

export const navItems = [
    { href: "#about", label: "about" },
    { href: "#projects", label: "projects" },
    { href: "#experience", label: "experience" },
    { href: "#skills", label: "skills" },
    { href: "#education", label: "education" },
    { href: "#contact", label: "contact" },
];

export const projects = [
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
    // {
    //     title: "TaskFall",
    //     type: "web app",
    //     description:
    //         "An online to-do app made for my graduation thesis, built in PHP.",
    //     tech: "PHP · MySQL",
    //     links: [],
    // },
];

export const skills: Record<string, string[]> = {
    Languages: ["Python", "C", "C++", "JavaScript", "TypeScript", "SQL", "PHP"],
    Frontend: ["React", "Next.js", "HTML", "CSS", "TailwindCSS"],
    Backend: ["Node.js", "FastAPI", "REST APIs", "MySQL"],
    DevOps: ["Docker", "Linux", "Git"],
    Hardware: ["ESP32", "Arduino"],
    "Photo / Video": ["Adobe Software", "GIMP"],
};

export const experience = [
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
];

export const education = [
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
];

export const achievements = [
    "Three times among the best in the country in mathematics — 1st place, 3rd place, silver award.",
    "Silver award for research work.",
    "Awarded as one of the best students of my generation by Elektro Maribor.",
];

export const currentYear = new Date().getFullYear();
