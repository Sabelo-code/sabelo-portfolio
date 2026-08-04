import { Award, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import { certificates } from "../data/certificates";
import { theme } from "../theme";

export default function Certificates() {
  return (
    <section
      id="certificates"
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "20px 24px 60px",
      }}
    >
      <Reveal>
        <h2
          className="font-display"
          style={{
            fontSize: 30,
            fontWeight: 700,
            textAlign: "center",
            marginBottom: 40,
            color: theme.paper,
          }}
        >
          Certifications
        </h2>
      </Reveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 22,
        }}
      >
        {certificates.map((cert, index) => {
          const isPdf =
            cert.link &&
            cert.link.toLowerCase().endsWith(".pdf");

          return (
            <Reveal key={cert.title} delay={index * 70}>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-card"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "block",
                  height: "100%",
                }}
              >
                <div
                  className="card"
                  style={{
                    padding: 24,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderRadius: 14,
                    transition: "all .3s ease",
                    cursor: "pointer",
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: 12,
                      background:
                        "linear-gradient(135deg,#03A9F4,#9C27B0)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 18,
                    }}
                  >
                    <Award size={26} color="#fff" />
                  </div>

                  {/* Certificate Title */}
                  <h3
                    className="font-display"
                    style={{
                      fontSize: 19,
                      margin: 0,
                      color: theme.paper,
                    }}
                  >
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p
                    style={{
                      color: theme.mist,
                      margin: "12px 0 8px",
                      lineHeight: 1.6,
                      fontSize: 14,
                    }}
                  >
                    {cert.issuer}
                  </p>

                  {/* Category */}
                  <span
                    className="font-mono"
                    style={{
                      display: "inline-block",
                      width: "fit-content",
                      padding: "5px 10px",
                      borderRadius: 30,
                      background: "rgba(3,169,244,.08)",
                      color: theme.signalSoft,
                      fontSize: 11,
                      marginBottom: 22,
                    }}
                  >
                    {cert.category}
                  </span>

                  {/* Button */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "auto",
                      paddingTop: 14,
                      borderTop: `1px solid ${theme.line}`,
                    }}
                  >
                    <span
                      style={{
                        color: theme.signal,
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                    >
                      {isPdf ? "View Certificate" : "Verify Certificate"}
                    </span>

                    <ExternalLink
                      size={16}
                      color={theme.signal}
                    />
                  </div>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}