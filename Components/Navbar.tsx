"use client";
import { useActive } from "@/Contexts/ActiveContext";
import { navItems } from "@/Data/main";

const Navbar = () => {
    const { active } = useActive();

    return (
        <nav
            className="reveal mt-12 flex flex-row flex-wrap gap-4 md:flex-col md:gap-1"
            style={{ transitionDelay: "180ms" }}
        >
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
    );
}

export default Navbar;
