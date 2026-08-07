import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "../data/nav";
import { theme } from "../theme";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header
      style={{
  position: "sticky",
  top: 0,
  zIndex: 50,
  background: theme.primaryGradient,
  backdropFilter: "blur(8px)",
  borderBottom: `1px solid ${theme.line}`,
}}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#hero" className="font-mono" style={{ color: theme.void, textDecoration: "none", fontSize: 13, fontWeight: 600 }}>
          SABELO TSHAZI PORTFOLIO<span style={{ color: theme.signalSoft }}>_</span>
        </a>
        <nav className="desktop-nav" style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="navlink font-mono">{n.label}</a>
          ))}
          <a href="#contact" className="btn-outline font-mono" style={{ padding: "8px 16px", fontSize: 13 }}>
            Hire me
          </a>
        </nav>
        <button
          className="mobile-toggle"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
          style={{ display: "none", background: "none", border: `1px solid ${theme.line}`, color: theme.paper, padding: 8, borderRadius: 2 }}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div style={{ borderTop: `1px solid ${theme.line}`, padding: "12px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="navlink font-mono">{n.label}</a>
          ))}
        </div>
      )}
    </header>
  );
}
