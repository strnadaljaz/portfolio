import Label from "@/Helpers/Label";
import { education, achievements } from "@/Data/main";

const Education = () => {
    return (
        <div>
            {/* education */}
            <section
                id="education"
                className="mt-20 scroll-mt-24 border-t border-zinc-800 pt-16"
            >
                <div className="reveal">
                    <Label>05 — education</Label>
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

                {/* achievements as sub-block */}
                <div className="mt-8 reveal-stagger">
                    <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-emerald-300">
                        Achievements
                    </h3>
                    <ul className="space-y-1 text-sm text-zinc-400 marker:text-zinc-600">
                        {achievements.map((a) => (
                            <li key={a} className="flex gap-2">
                                <span className="text-emerald-300/70">—</span>
                                <span>{a}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

        </div>
    );
}

export default Education;
