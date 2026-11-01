"use client";

import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

const Main = () => {
    return (
        <main className="pb-20 pt-8 md:pb-40 md:pt-28">
            <About />
            <Projects />
            <Experience />
            <Skills />
            <Education />
            <Contact />
        </main >
    );
}

export default Main;
