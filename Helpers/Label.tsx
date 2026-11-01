function Label({ children }: { children: React.ReactNode }) {
    return (
        <div className="mb-6 font-mono text-[0.75rem] uppercase tracking-widest text-emerald-300">
            {children}
        </div>
    );
}

export default Label;
