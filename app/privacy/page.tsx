import { currentYear } from "@/Data/main";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "How this website handles data: Vercel Analytics and Speed Insights, no cookies, anonymized metrics.",
    alternates: { canonical: "/privacy" },
    robots: { index: true, follow: true },
};

const LAST_UPDATED = "November 2026";

export default function PrivacyPage() {
    return (
        <div className="relative z-10 mx-auto max-w-[760px] px-6 py-20 md:px-8 md:py-28">
            {/* back link */}
            <Link
                href="/"
                className="link-underline font-mono text-xs text-zinc-400 transition-colors hover:text-emerald-300"
            >
                ← back to home
            </Link>

            {/* header */}
            <div className="mt-12 mb-6 font-mono text-[0.75rem] uppercase tracking-widest text-emerald-300">
                privacy policy
            </div>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight">
                Privacy Policy
            </h1>
            <p className="mt-3 font-mono text-xs text-zinc-500">
                Last updated: {LAST_UPDATED}
            </p>

            {/* content */}
            <div className="mt-12 space-y-10 text-[0.95rem] leading-relaxed text-zinc-400">
                <Section title="1. Who is responsible">
                    <p>
                        This website is operated by <strong className="text-zinc-200">Aljaž Strnad</strong>,
                        an individual developer based in Maribor, Slovenia. For any privacy-related
                        questions, you can reach me at{" "}
                        <a
                            href="mailto:aljaz.strnad@student.um.si"
                            className="link-underline text-zinc-100 transition-colors hover:text-emerald-300"
                        >
                            aljaz.strnad@student.um.si
                        </a>
                        .
                    </p>
                </Section>

                <Section title="2. What this site collects">
                    <p>
                        This is a static personal portfolio. It does not offer accounts, comments,
                        newsletters, or any form of user registration. The only data processing that
                        happens is <strong className="text-zinc-200">anonymous analytics</strong>,
                        described below.
                    </p>
                    <p className="mt-3">
                        I do <strong className="text-zinc-200">not</strong> collect names, email
                        addresses, IP addresses in identifiable form, or any other personal data
                        through the site itself.
                    </p>
                </Section>

                <Section title="3. Analytics — Vercel Analytics and Speed Insights">
                    <p>
                        This site uses two first-party tools provided by Vercel Inc.:
                    </p>
                    <ul className="mt-3 list-inside list-disc space-y-1 marker:text-zinc-600">
                        <li>
                            <strong className="text-zinc-200">Vercel Analytics</strong> — counts page
                            views and referrers in aggregate.
                        </li>
                        <li>
                            <strong className="text-zinc-200">Vercel Speed Insights</strong> — measures
                            real-user performance metrics (e.g. Core Web Vitals).
                        </li>
                    </ul>
                    <p className="mt-3">
                        <strong className="text-zinc-200">Neither tool uses cookies</strong> and
                        neither stores persistent identifiers on your device. Visitors are counted
                        using a hash that is derived from the request and rotated daily, so it cannot
                        be used to track you across days or across sites. The data is aggregated and
                        cannot be used to identify you.
                    </p>
                    <p className="mt-3">
                        Because no cookies or similar technologies are used, this site does not show
                        a cookie consent banner. The processing is based on my legitimate interest
                        (Art. 6(1)(f) GDPR) in understanding how the site performs and improving it.
                    </p>
                </Section>

                <Section title="4. Data processor — Vercel Inc.">
                    <p>
                        Vercel Inc. (440 N Barranca Ave #4133, Covina, CA 91723, USA) hosts this
                        website and provides the analytics tools mentioned above. Vercel acts as a
                        data processor on my behalf.
                    </p>
                    <p className="mt-3">
                        Because Vercel is based in the United States, some data may be transferred
                        outside the EEA. These transfers are protected by the Standard Contractual
                        Clauses (SCCs) included in Vercel&apos;s Data Processing Addendum (DPA), which
                        I have accepted. You can read more in{" "}
                        <a
                            href="https://vercel.com/legal/privacy-policy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline text-zinc-100 transition-colors hover:text-emerald-300"
                        >
                            Vercel&apos;s privacy policy
                        </a>
                        .
                    </p>
                </Section>

                <Section title="5. Server logs">
                    <p>
                        Like any website, the hosting provider records standard technical logs
                        (request time, path, HTTP status, user agent, truncated IP) for security and
                        abuse prevention. These logs are kept for a short period, are not used for
                        profiling, and are not shared with third parties beyond the hosting provider.
                    </p>
                </Section>

                <Section title="6. Your rights">
                    <p>
                        Under the GDPR you have the right to access, rectify, erase, restrict, or
                        object to the processing of your personal data, and the right to data
                        portability. Since this site does not collect identifiable data, in practice
                        there is usually nothing to access or erase — but you can always contact me
                        and I will respond within 30 days.
                    </p>
                    <p className="mt-3">
                        If you believe your data has been processed unlawfully, you can lodge a
                        complaint with the Slovenian supervisory authority:{" "}
                        <a
                            href="https://www.ip-rs.si/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline text-zinc-100 transition-colors hover:text-emerald-300"
                        >
                            Information Commissioner of the Republic of Slovenia (IP RS)
                        </a>
                        .
                    </p>
                </Section>

                <Section title="7. External links">
                    <p>
                        This site links to external services such as GitHub and LinkedIn. Once you
                        leave this site, the privacy policies of those services apply. I am not
                        responsible for their data practices.
                    </p>
                </Section>

                <Section title="8. Changes to this policy">
                    <p>
                        If I change the analytics setup or add any feature that processes personal
                        data, I will update this page and change the &quot;Last updated&quot; date
                        above. Material changes will be reflected here before they take effect.
                    </p>
                </Section>
            </div>

            {/* footer */}
            <div className="mt-20 border-t border-zinc-800 pt-6 font-mono text-[0.72rem] text-zinc-500">
                © {currentYear} Aljaž Strnad ·{" "}
                <Link href="/" className="link-underline hover:text-emerald-300">
                    home
                </Link>
            </div>
        </div>
    );
}

/* ---------- helper ---------- */

function Section({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    return (
        <section>
            <h2 className="mb-3 font-mono text-xs uppercase tracking-wider text-emerald-300">
                {title}
            </h2>
            <div>{children}</div>
        </section>
    );
}
