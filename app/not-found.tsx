import Link from "next/link";

export const metadata = {
    title: "404 — Page not found",
};

export default function NotFound() {
    return (
        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1080px] flex-col justify-center px-6 md:px-8">
            <div className="reveal is-visible">
                <div className="mb-6 font-mono text-[0.75rem] uppercase tracking-widest text-emerald-300">
                    404 — not found
                </div>

                <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-tight">
                    This page doesn&apos;t exist.
                </h1>

                <p className="mt-6 max-w-[520px] text-[1.05rem] text-zinc-400">
                    The link may be broken, or the page may have been moved. Let&apos;s
                    get you back to something useful.
                </p>

                <div className="mt-10 flex flex-wrap items-center gap-6 font-mono text-sm">
                    <Link
                        href="/"
                        className="link-underline text-zinc-100 transition-colors hover:text-emerald-300"
                    >
                        ← back to home
                    </Link>
                    <a
                        href="https://github.com/strnadaljaz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline text-zinc-400 transition-colors hover:text-emerald-300"
                    >
                        github ↗
                    </a>
                </div>

                <div className="mt-16 h-px w-full max-w-[200px] bg-zinc-800" />
            </div>
        </div>
    );
}
