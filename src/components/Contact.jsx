import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import Reveal from "./Reveal";
import { theme } from "../theme";

// Same Formspree endpoint used in the original site — replace with your own
// form ID at https://formspree.io if you want submissions sent elsewhere.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvvepeb";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 24px 80px" }}>
      <Reveal>
        <span className="font-mono" style={{ fontSize: 11, color: theme.slate }}>05 · CONTACT</span>
        <h2 className="font-display" style={{ fontSize: 30, margin: "10px 0 8px" }}>Let's build something reliable.</h2>
        <p style={{ color: theme.mist, fontSize: 15, maxWidth: 480, marginBottom: 40 }}>
          Open to full-stack, AI/ML, and IT support roles. I typically reply within 24 hours.
        </p>
      </Reveal>
      <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 40 }}>
        <Reveal delay={80}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div className="card" style={{ padding: 18, display: "flex", alignItems: "center", gap: 14 }}>
              <Mail size={16} color={theme.signalSoft} />
              <div>
                <div className="font-mono" style={{ fontSize: 10, color: theme.mist }}>EMAIL</div>
                <a href="mailto:sabeloshazi073@gmail.com" style={{ color: theme.paper, fontSize: 14, textDecoration: "none" }}>
                  sabeloshazi073@gmail.com
                </a>
              </div>
            </div>
            <div className="card" style={{ padding: 18, display: "flex", alignItems: "center", gap: 14 }}>
              <MapPin size={16} color={theme.pulse} />
              <div>
                <div className="font-mono" style={{ fontSize: 10, color: theme.mist }}>LOCATION</div>
                <span style={{ fontSize: 14 }}>Durban, South Africa</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
              <a className="social" href="https://github.com/Sabelo-code" aria-label="GitHub" target="_blank" rel="noreferrer"><GithubIcon size={16} /></a>
              <a className="social" href="https://www.linkedin.com/in/sabelo-tshazi-a424a9312" aria-label="LinkedIn" target="_blank" rel="noreferrer"><LinkedinIcon size={16} /></a>
              <a className="social" href="mailto:sabeloshazi073@gmail.com" aria-label="Email"><Mail size={16} /></a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={140}>
          <form className="card" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 14 }} onSubmit={handleSubmit}>
            <div style={{ display: "flex", gap: 14 }}>
              <input className="field" name="name" placeholder="Your name" required />
              <input className="field" name="email" type="email" placeholder="Your email" required />
            </div>
            <input className="field" name="subject" placeholder="Subject" />
            <textarea className="field" name="message" placeholder="Message" rows={5} required />
            <button type="submit" className="btn-primary" style={{ border: "none", justifyContent: "center" }} disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : status === "sent" ? "Message sent" : "Send message"} <Send size={14} />
            </button>
            {status === "error" && (
              <p className="font-mono" style={{ fontSize: 11, color: "#F09595" }}>
                Something went wrong. Try again, or email me directly.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
