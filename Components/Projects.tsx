import Label from "@/Helpers/Label";
import { projects } from "@/Data/main";

const Projects = () => {
    return (
        <div>
            {/* projects */}
            <section
                id="projects"
                className="mt-20 scroll-mt-24 border-t border-zinc-800 pt-16"
            >
                <div className="reveal">
                    <Label>02 — selected projects</Label>
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
                            {p.links.length > 0 && (
                                <div className="mt-2 flex flex-wrap gap-4 font-mono text-[0.72rem]">
                                    {p.links.map((l) => (
                                        <a
                                            key={l.href}
                                            href={l.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="link-underline text-zinc-300 transition-colors hover:text-emerald-300"
                                        >
                                            {l.label} ↗
                                        </a>
                                    ))}
                                </div>
                            )}
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
            </section >
        </div>
    );
}

export default Projects;
