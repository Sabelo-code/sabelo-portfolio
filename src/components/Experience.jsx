import Reveal from "./Reveal";
import { timeline } from "../data/timeline";
import { theme } from "../theme";

export default function Experience() {
  return (
    <section id="experience" style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 24px 60px" }}>
      <Reveal>
        <span className="font-mono" style={{ fontSize: 11, color: theme.slate }}>04 · EXPERIENCE &amp; EDUCATION</span>
        <h2 className="font-display" style={{ fontSize: 30, margin: "10px 0 40px" }}>Timeline.</h2>
      </Reveal>
      <div style={{ position: "relative", paddingLeft: 28 }}>
        <div style={{ position: "absolute", left: 5, top: 6, bottom: 6, width: 1, background: theme.line }} />
        {timeline.map((item, i) => (
          <Reveal key={item.title} delay={i * 100} style={{ position: "relative", marginBottom: i === timeline.length - 1 ? 0 : 40 }}>
            <span style={{ position: "absolute", left: -28, top: 4, width: 11, height: 11, borderRadius: "50%", background: theme.void, border: `2px solid ${item.color}` }} />
            <span className="font-mono" style={{ fontSize: 11, color: item.color }}>{item.meta}</span>
            <h3 className="font-display" style={{ fontSize: 19, margin: "6px 0 8px" }}>{item.title}</h3>
            <p style={{ color: theme.mist, fontSize: 14, lineHeight: 1.7, maxWidth: 560 }}>{item.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
