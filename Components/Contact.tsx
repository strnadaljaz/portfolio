import Label from "@/Helpers/Label";
import { currentYear } from "@/Data/main";

const Contact = () => {
    return (
        <div>
            {/* contact */}
            <section
                id="contact"
                className="mt-20 scroll-mt-24 border-t border-zinc-800 pt-16"
            >
                <div className="reveal">
                    <Label>06 — contact</Label>
                </div>
                <p
                    className="reveal max-w-[480px] text-[1.4rem] font-semibold tracking-tight text-zinc-100"
                    style={{ transitionDelay: "80ms" }}
                >
                    Have a question or want to work together?
                </p>

                <ul
                    className="reveal mt-4 space-y-2 font-mono text-sm"
                    style={{ transitionDelay: "140ms" }}
                >
                    <li>
                        <span className="text-zinc-500">email · </span>
                        <a
                            href="mailto:aljaz.strnad@student.um.si"
                            className="link-underline text-zinc-100 transition-colors hover:text-emerald-300"
                        >
                            aljaz.strnad@student.um.si
                        </a>
                    </li>
                    <li>
                        <span className="text-zinc-500">phone · </span>
                        <a
                            href="tel:+38651769401"
                            className="link-underline text-zinc-100 transition-colors hover:text-emerald-300"
                        >
                            +386 (0)51 769 401
                        </a>
                    </li>
                    <li>
                        <span className="text-zinc-500">linkedin · </span>
                        <a
                            href="https://linkedin.com/in/aljaz-strnad"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline text-zinc-100 transition-colors hover:text-emerald-300"
                        >
                            /in/aljaz-strnad
                        </a>
                    </li>
                    <li>
                        <span className="text-zinc-500">github · </span>
                        <a
                            href="https://github.com/strnadaljaz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline text-zinc-100 transition-colors hover:text-emerald-300"
                        >
                            /strnadaljaz
                        </a>
                    </li>
                    <li>
                        <span className="text-zinc-500">location · </span>
                        <span className="text-zinc-300">Maribor, Slovenia</span>
                    </li>
                </ul>

                <p
                    className="reveal mt-4 max-w-[480px] text-zinc-400"
                    style={{ transitionDelay: "200ms" }}
                >
                    I usually reply within one business day.
                </p>

                <footer
                    className="reveal mt-20 border-t border-zinc-800 pt-6 font-mono text-[0.72rem] text-zinc-400"
                    style={{ transitionDelay: "260ms" }}
                >
                    © {currentYear} Aljaž Strnad · Built with Next.JS
                </footer>
            </section>
        </div>
    );
}

export default Contact;
