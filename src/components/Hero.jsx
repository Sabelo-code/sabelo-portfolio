import { ArrowUpRight, Download } from "lucide-react";
import Reveal from "./Reveal";
import { SignalPanel } from "./SignalReadout";
import { theme } from "../theme";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "88px 24px 60px",
      }}
    >
      <div
        className="hero-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.25fr 1fr",
          gap: 60,
          alignItems: "center",
        }}
      >

        <div>

          <Reveal>
            <span
              className="font-mono"
              style={{
                fontSize: 12,
                color: theme.signalSoft,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: theme.pulse,
                  animation: "blink 1.6s infinite",
                }}
              />

              COMPUTER SCIENCE • SYSTEMS • TECHNOLOGY
            </span>
          </Reveal>


          <Reveal delay={80}>
            <h1
              className="font-display"
              style={{
                fontSize: "clamp(42px,6vw,70px)",
                lineHeight: 1.05,
                fontWeight: 700,
                margin: "22px 0",
              }}
            >

              <span className="gradient-text">
                Sabelo Tshazi
              </span>

              <br />

              engineers systems
              <br />

              where code,
              <br />

              data & networks connect.

            </h1>
          </Reveal>



          <Reveal delay={160}>
            <p
              style={{
                color: theme.mist,
                fontSize: 16,
                lineHeight: 1.8,
                maxWidth: 520,
                marginBottom: 32,
              }}
            >
              BSc Computer Science and Mathematics graduate specialising in
              software development, AI systems, cloud technologies, and IT
              support. I combine programming, mathematical reasoning, and
              systems thinking to build reliable technology solutions.
            </p>
          </Reveal>



          <Reveal delay={220}>

            <div
              style={{
                display:"flex",
                gap:14,
                flexWrap:"wrap",
              }}
            >

              <a
                href="#contact"
                className="btn-primary"
              >
                Let's connect
                <ArrowUpRight size={15}/>
              </a>


              <a
                href="/Sabelo_Tshazi_CV.pdf"
                download
                className="btn-outline"
              >
                <Download size={15}/>
                Download CV
              </a>


            </div>

          </Reveal>



          <Reveal delay={300}>

            <div
              style={{
                display:"flex",
                gap:20,
                marginTop:40,
                flexWrap:"wrap",
              }}
            >

              {[
                "Graph Theory",
                "Algorithms",
                "AI Systems",
                "Cloud Architecture",
                "IT Operations",
              ].map(item => (

                <span
                  key={item}
                  className="font-mono"
                  style={{
                    fontSize:11,
                    color:theme.slate,
                    borderBottom:`1px solid ${theme.line}`,
                    paddingBottom:6,
                  }}
                >
                  {item}
                </span>

              ))}

            </div>

          </Reveal>

        </div>



        <Reveal delay={200}>
          <SignalPanel />
        </Reveal>


      </div>

    </section>
  );
}