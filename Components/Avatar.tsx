const Avatar = ({ src, initials }: { src?: string; initials: string }) => {
    return (
        <div className="relative h-30 w-30 overflow-hidden rounded-full border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm md:h-34 md:w-34">
            {src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    src={src}
                    alt="Portrait"
                    className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                />
            ) : (
                <div className="flex h-full w-full items-center justify-center font-mono text-xl tracking-widest text-emerald-300/80">
                    {initials}
                </div>
            )}
            {/* subtle ring accent */}
            <span className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-emerald-300/10" />
        </div>
    );
}

export default Avatar;
