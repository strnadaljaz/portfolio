import Label from "@/Helpers/Label";
import { skills } from "@/Data/main";

const Skills = () => {
    return (
        <div>
            {/* skills */}
            <section
                id="skills"
                className="mt-20 scroll-mt-24 border-t border-zinc-800 pt-16"
            >
                <div className="reveal">
                    <Label>04 — skills</Label>
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


        </div>
    );
}

export default Skills;
