import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { projects } from "../data/projects";
import { theme } from "../theme";

export default function Projects() {
  return (
    <section id="projects" style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 24px 60px" }}>
      <Reveal>
        <span className="font-mono" style={{ fontSize: 11, color: theme.slate }}>03 · SELECTED WORK</span>
        <h2 className="font-display" style={{ fontSize: 30, margin: "10px 0 36px" }}>Projects worth a closer look.</h2>
      </Reveal>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <div className="card project-card" style={{ display: "grid", gridTemplateColumns: "340px 1fr", overflow: "hidden" }}>
              <div style={{ position: "relative" }}>
                <img src={p.img} alt={p.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: 200 }} />
                <span
                  className="font-mono"
                  style={{ position: "absolute", top: 12, left: 12, fontSize: 10, background: theme.void, color: p.color, padding: "4px 8px", borderRadius: 2, border: `1px solid ${p.color}` }}
                >
                  {p.tag}
                </span>
              </div>
              <div style={{ padding: "24px 26px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <h3 className="font-display" style={{ fontSize: 20, marginBottom: 10 }}>{p.title}</h3>
                <p style={{ color: theme.mist, fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
                  {p.tech.map((t) => (
                    <span key={t} className="font-mono" style={{ fontSize: 10, color: theme.mist, border: `1px solid ${theme.line}`, padding: "4px 8px", borderRadius: 2 }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 18 }}>
                  {p.links.map((l) => (
                    <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="font-mono" style={{ fontSize: 12, color: p.color, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4 }}>
                      {l.label} <ArrowUpRight size={12} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
