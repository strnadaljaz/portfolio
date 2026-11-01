import Label from "@/Helpers/Label";

const About = () => {
    return (
        <div>
            {/* about */}
            < section id="about" className="scroll-mt-24" >
                <div className="reveal">
                    <Label>01 — about</Label>
                </div>
                <h2
                    className="reveal text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.1] tracking-tight"
                    style={{ transitionDelay: "80ms" }}
                >
                    I solve{" "}
                    <span className="text-emerald-300">complex problems</span>.
                    <br />
                    I build{" "}
                    <span className="text-emerald-300">useful software</span>.
                </h2>
                <p
                    className="reveal mt-6 max-w-[520px] text-[1.05rem] text-zinc-400"
                    style={{ transitionDelay: "160ms" }}
                >
                    Computer science student at FERI with hands-on experience in
                    full-stack web development and automation, gained both through
                    professional practice and by building solutions for companies. I
                    enjoy clean code, scalable architecture, and intuitive design —
                    always learning, always growing.
                </p>
            </section >
        </div>
    );
}

export default About;
