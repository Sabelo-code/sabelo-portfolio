import { theme } from "../theme";

// A single animated "channel" of vertical bars, used in the hero panel.
export function Channel({ label, color, bars = 22, height = 34, speed = [0.7, 1.3] }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span className="font-mono" style={{ width: 34, fontSize: 10, color, flexShrink: 0 }}>
        {label}
      </span>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 3, height }}>
        {Array.from({ length: bars }).map((_, i) => {
          const dur = (speed[0] + Math.random() * (speed[1] - speed[0])).toFixed(2);
          const h = 25 + Math.random() * 75;
          return (
            <span
              key={i}
              className="skill-bar"
              style={{
                width: 3,
                height: `${h}%`,
                background: color,
                opacity: 0.85,
                animationDuration: `${dur}s`,
                animationDelay: `${(i * 0.05).toFixed(2)}s`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

// The hero's signature element: three parallel channels (AI / WEB / IT)
// standing in for the three domains Sabelo works across.
export function SignalPanel() {
  return (
    <div className="card" style={{ padding: "22px 20px", display: "flex", flexDirection: "column", gap: 16 }}>
      <div className="font-mono" style={{ fontSize: 10, color: theme.mist, display: "flex", justifyContent: "space-between" }}>
        <span>SYSTEM.STATUS</span>
        <span style={{ color: theme.pulse }}>● LIVE</span>
      </div>
      <Channel label="AI" color={theme.pulse} height={28} />
      <Channel label="WEB" color={theme.signalSoft} height={28} />
      <Channel label="IT" color={theme.slate} height={28} />
    </div>
  );
}

// A thin decorative version of the same motif, used between sections.
export function TraceDivider() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "6px 0 46px" }}>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 14, opacity: 0.5 }}>
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="skill-bar"
            style={{
              width: 2,
              height: `${20 + Math.random() * 80}%`,
              background: i % 3 === 0 ? theme.pulse : i % 3 === 1 ? theme.signalSoft : theme.slate,
              animationDuration: `${(0.8 + Math.random()).toFixed(2)}s`,
              animationDelay: `${(i * 0.03).toFixed(2)}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
