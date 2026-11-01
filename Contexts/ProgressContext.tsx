"use client";
import { createContext, useContext, useState, type ReactNode } from "react";

type ProgressContextType = {
    progress: number;
    setProgress: React.Dispatch<React.SetStateAction<number>>;
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: ReactNode }) {
    const [progress, setProgress] = useState(0);

    return (
        <ProgressContext.Provider value={{ progress, setProgress }}>
            {children}
        </ProgressContext.Provider>
    );
}

export function useProgress() {
    const ctx = useContext(ProgressContext);
    if (!ctx) {
        throw new Error("useProgress must be used within a ProgressProvider");
    }
    return ctx;
}
