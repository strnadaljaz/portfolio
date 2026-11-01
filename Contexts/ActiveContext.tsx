"use client";
import { createContext, useContext, useState, type ReactNode } from "react";

type ActiveContextType = {
    active: string;
    setActive: React.Dispatch<React.SetStateAction<string>>;
};

const ActiveContext = createContext<ActiveContextType | undefined>(undefined);

export function ActiveProvider({ children }: { children: ReactNode }) {
    const [active, setActive] = useState("#about");

    return (
        <ActiveContext.Provider value={{ active, setActive }}>
            {children}
        </ActiveContext.Provider>
    );
}

export function useActive() {
    const ctx = useContext(ActiveContext);
    if (!ctx) {
        throw new Error("useActive must be used within an ActiveProvider");
    }
    return ctx;
}
