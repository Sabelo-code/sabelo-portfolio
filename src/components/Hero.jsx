import { ArrowUpRight, Download } from "lucide-react";
import Reveal from "./Reveal";
import { SignalPanel } from "./SignalReadout";
import { theme } from "../theme";

export default function Hero() {
  return (
    <section id="hero" style={{ maxWidth: 1100, margin: "0 auto", padding: "88px 24px 40px" }}>
      <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 56, alignItems: "center" }}>
        <div>
          <Reveal>
            <span className="font-mono" style={{ fontSize: 12, color: theme.signalSoft, display: "inline-flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: theme.pulse, animation: "blink 1.6s infinite" }} />
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </Reveal>
          <Reveal delay={80}>
          <h1 
  className="font-display"
  style={{
    fontSize: "clamp(42px, 6vw, 72px)",
    lineHeight: 1.05,
    fontWeight: 700,
    margin: "20px 0"
  }}
>
  <span className="gradient-text">
    Sabelo Tshazi
  </span>
  <br />

  builds systems that
  <br />

  think, ship, and support.
</h1>
          </Reveal>
          <Reveal delay={160}>
            <p style={{ color: theme.mist, fontSize: 16, lineHeight: 1.7, maxWidth: 480, margin: "0 0 32px" }}>
              A computer science graduate working across AI &amp; machine learning, full-stack
              web development, and IT support — turning real-world problems into reliable,
              intelligent software.
            </p>
          </Reveal>
          <Reveal delay={240} style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#contact" className="btn-primary">
              Get in touch <ArrowUpRight size={15} />
            </a>
            <a href="/CV.pdf" download className="btn-outline">
              <Download size={15} /> Download CV
            </a>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <SignalPanel />
        </Reveal>
      </div>
    </section>
  );
}
