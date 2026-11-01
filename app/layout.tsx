import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ProgressProvider } from "@/Contexts/ProgressContext";
import { ActiveProvider } from "@/Contexts/ActiveContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
    title: "Aljaž Strnad — Software Engineer",
    description:
        "Full-stack developer building modern, efficient, and user-friendly software.",
};

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
