import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import Reveal from "./Reveal";
import { theme } from "../theme";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvvepeb";


export default function Contact() {

  const [status, setStatus] = useState("idle");


  async function handleSubmit(e) {

    e.preventDefault();

    setStatus("sending");

    const form = e.target;


    try {

      const response = await fetch(
        FORMSPREE_ENDPOINT,
        {
          method: "POST",
          body: new FormData(form),
          headers: {
            Accept: "application/json",
          },
        }
      );


      if (response.ok) {

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

    <section
      id="contact"
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "20px 24px 80px",
      }}
    >


      <Reveal>

        <h2
          className="font-display"
          style={{
            fontSize: 32,
            fontWeight: 700,
            textAlign: "center",
            marginBottom: 12,
          }}
        >
          Let's Connect
        </h2>


        <p
          style={{
            textAlign: "center",
            color: theme.mist,
            fontSize: 15,
            maxWidth: 560,
            margin: "0 auto 45px",
            lineHeight: 1.7,
          }}
        >
          Open to opportunities in IT Support, Systems Administration,
          Cloud, Software Development, and Digital Transformation.
        </p>

      </Reveal>



      <div
        className="contact-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: 40,
          alignItems: "start",
        }}
      >



        {/* CONTACT INFORMATION */}

        <Reveal delay={100}>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >


            <div
              className="card"
              style={{
                padding: 20,
                display: "flex",
                alignItems: "center",
                gap: 15,
              }}
            >

              <Mail
                size={22}
                color={theme.signal}
              />


              <div>

                <span
                  className="font-mono"
                  style={{
                    fontSize: 11,
                    color: theme.slate,
                  }}
                >
                  EMAIL
                </span>


                <br />


                <a
                  href="mailto:sabeloshazi073@gmail.com"
                  style={{
                    color: theme.paper,
                    textDecoration: "none",
                    fontSize: 15,
                  }}
                >
                  sabeloshazi073@gmail.com
                </a>

              </div>

            </div>




            <div
              className="card"
              style={{
                padding: 20,
                display: "flex",
                alignItems: "center",
                gap: 15,
              }}
            >

              <MapPin
                size={22}
                color={theme.signalSoft}
              />


              <div>

                <span
                  className="font-mono"
                  style={{
                    fontSize: 11,
                    color: theme.slate,
                  }}
                >
                  LOCATION
                </span>


                <br />


                <span>
                  Durban, South Africa
                </span>


              </div>


            </div>





            <div
              style={{
                display: "flex",
                gap: 12,
                marginTop: 10,
              }}
            >


              <a
                href="https://github.com/Sabelo-code"
                target="_blank"
                rel="noreferrer"
                className="social"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>




              <a
                href="https://www.linkedin.com/in/sabelo-tshazi-a424a9312"
                target="_blank"
                rel="noreferrer"
                className="social"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>




              <a
                href="mailto:sabeloshazi073@gmail.com"
                className="social"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>



            </div>


          </div>


        </Reveal>







        {/* CONTACT FORM */}


        <Reveal delay={160}>


          <form
            className="card"
            onSubmit={handleSubmit}
            style={{
              padding: 28,
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >


            <div
              style={{
                display: "flex",
                gap: 14,
              }}
            >

              <input
                className="field"
                name="name"
                placeholder="Your name"
                required
              />


              <input
                className="field"
                name="email"
                type="email"
                placeholder="Your email"
                required
              />


            </div>




            <input
              className="field"
              name="subject"
              placeholder="Subject"
            />





            <textarea
              className="field"
              name="message"
              placeholder="Message"
              rows={5}
              required
            />






            <button
              type="submit"
              className="btn-primary"
              disabled={status === "sending"}
              style={{
                border: "none",
                justifyContent: "center",
              }}
            >

              {
                status === "sending"
                  ? "Sending..."
                  : status === "sent"
                    ? "Message Sent ✓"
                    : "Send Message"
              }


              <Send size={15} />


            </button>





            {
              status === "error" && (

                <p
                  style={{
                    color: "#dc2626",
                    fontSize: 13,
                  }}
                >
                  Something went wrong. Please email me directly.
                </p>

              )
            }



          </form>


        </Reveal>


      </div>


    </section>

  );

}