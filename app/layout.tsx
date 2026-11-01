import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ProgressProvider } from "@/Contexts/ProgressContext";
import { ActiveProvider } from "@/Contexts/ActiveContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
    metadataBase: new URL("https://strnadaljaz.si"),
    title: {
        default: "Aljaž Strnad — Programmer & CS Student",
        template: "%s · Aljaž Strnad",
    },
    description:
        "Full-stack developer and computer science student focused on automation, AI/ML, Next.js, Python, and FastAPI.",
    keywords: ["Aljaž Strnad", "full-stack developer", "automation", "Next.js", "Python", "FastAPI", "FERI", "Maribor", "Slovenia"],
    authors: [{ name: "Aljaž Strnad", url: "https://strnadaljaz.si" }],
    creator: "Aljaž Strnad",
    alternates: { canonical: "/" },
    openGraph: {
        type: "profile",
        locale: "en_US",
        url: "/",
        siteName: "Aljaž Strnad — Portfolio",
        title: "Aljaž Strnad — Programmer & CS Student",
        description: "Full-stack developer and computer science student focused on automation, AI/ML, Next.js, Python, and FastAPI.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Aljaž Strnad — Programmer & CS Student",
        description: "Full-stack developer and computer science student focused on automation, AI/ML, Next.js, Python, and FastAPI.",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
};

export const viewport = { themeColor: "#0e0e10" };

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${inter.variable} ${mono.variable}`}>
            <body className="font-sans">
                <ProgressProvider>
                    <ActiveProvider>
                        {children}
                    </ActiveProvider>
                </ProgressProvider>

            </body>
        </html>
    );
}
