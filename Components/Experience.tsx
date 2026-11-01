import Label from "@/Helpers/Label";
import { experience } from "@/Data/main";

const Experience = () => {
    return (
        <div>
            {/* experience */}
            <section
                id="experience"
                className="mt-20 scroll-mt-24 border-t border-zinc-800 pt-16"
            >
                <div className="reveal">
                    <Label>03 — experience</Label>
                </div>
                {experience.map((e, i) => (
                    <div
                        key={e.role}
                        className={`reveal-stagger grid grid-cols-1 gap-1 py-6 md:grid-cols-[140px_1fr] md:gap-6 ${i !== 0 ? "border-t border-zinc-800" : ""
                            }`}
                        style={{ ["--delay" as string]: `${i * 120}ms` }}
                    >
                        <div className="pt-0.5 font-mono text-[0.78rem] text-zinc-400">
                            {e.period}
                        </div>
                        <div>
                            <h3 className="text-[1.05rem] font-semibold">{e.role}</h3>
                            <div className="mt-0.5 text-sm text-emerald-300">
                                {e.company}
                            </div>
                            <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-400 marker:text-zinc-600">
                                {e.bullets.map((b) => (
                                    <li key={b}>{b}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </section>

        </div>
    );
}

export default Experience;
