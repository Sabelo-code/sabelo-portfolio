import { Award, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import { certificates } from "./../data/certificates";
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
            cert.link?.toLowerCase().endsWith(".pdf");

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
                    borderRadius: 14,
                    transition: "all .3s ease",
                    cursor: "pointer",
                  }}
                >

                  {/* Certificate Logo */}
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 14,
                      background: "#ffffff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 18,
                      padding: 10,
                      overflow: "hidden",
                    }}
                  >
                    {cert.icon ? (
                      <img
                        src={cert.icon}
                        alt={cert.issuer}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                        }}
                      />
                    ) : (
                      <Award
                        size={28}
                        color="#03A9F4"
                      />
                    )}
                  </div>


                  {/* Title */}
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
                      margin: "12px 0 10px",
                      fontSize: 14,
                      lineHeight: 1.6,
                    }}
                  >
                    {cert.issuer}
                  </p>


                  {/* Category */}
                  <span
                    className="font-mono"
                    style={{
                      width: "fit-content",
                      padding: "5px 12px",
                      borderRadius: 30,
                      background:
                        "rgba(3,169,244,0.08)",
                      color: theme.signalSoft,
                      fontSize: 11,
                      marginBottom: 22,
                    }}
                  >
                    {cert.category}
                  </span>


                  {/* Link */}
                  <div
                    style={{
                      marginTop: "auto",
                      paddingTop: 14,
                      borderTop:
                        `1px solid ${theme.line}`,
                      display: "flex",
                      justifyContent:
                        "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        color: theme.signal,
                        fontSize: 14,
                        fontWeight: 600,
                      }}
                    >
                      {isPdf
                        ? "View Certificate"
                        : "Verify Certificate"}
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