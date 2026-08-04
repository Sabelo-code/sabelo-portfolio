import { ArrowUpRight, Download, Network, BrainCircuit } from "lucide-react";
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
        padding: "90px 24px 50px",
      }}
    >

      <div
        className="hero-grid"
        style={{
          display:"grid",
          gridTemplateColumns:"1.3fr 1fr",
          gap:60,
          alignItems:"center",
        }}
      >


        <div>


          <Reveal>

            <span
              className="font-mono"
              style={{
                fontSize:12,
                color:theme.signalSoft,
                display:"inline-flex",
                alignItems:"center",
                gap:8
              }}
            >

              <span
                style={{
                  width:7,
                  height:7,
                  borderRadius:"50%",
                  background:theme.pulse,
                  animation:"blink 1.6s infinite"
                }}
              />

              OPEN TO IT SUPPORT & SOFTWARE OPPORTUNITIES

            </span>


          </Reveal>



          <Reveal delay={80}>

            <h1

              className="font-display"

              style={{

                fontSize:"clamp(42px,6vw,72px)",

                lineHeight:1.05,

                fontWeight:700,

                margin:"22px 0"

              }}

            >

              <span className="gradient-text">
                Sabelo Tshazi
              </span>

              <br/>


              builds technology
              <br/>

              through logic,
              <br/>

              systems & innovation.


            </h1>


          </Reveal>



          <Reveal delay={150}>


            <p

              style={{

                color:theme.mist,

                fontSize:17,

                lineHeight:1.8,

                maxWidth:520,

                marginBottom:28

              }}

            >

              Computer Science and Mathematics graduate combining{" "}
              
              <strong>
                algorithmic thinking, graph theory, software engineering,
                and IT systems knowledge
              </strong>

              {" "}to design, build, and support reliable technology solutions.


            </p>


          </Reveal>



          <Reveal delay={200}>


            <div

              style={{

                display:"flex",

                gap:12,

                flexWrap:"wrap",

                marginBottom:30

              }}

            >


              <div
                className="card"
                style={{
                  padding:"12px 16px",
                  display:"flex",
                  alignItems:"center",
                  gap:10
                }}
              >

                <Network
                  size={18}
                  color={theme.signal}
                />

                <span
                  style={{
                    fontSize:13
                  }}
                >
                  Graph Theory & Algorithms
                </span>

              </div>




              <div
                className="card"
                style={{
                  padding:"12px 16px",
                  display:"flex",
                  alignItems:"center",
                  gap:10
                }}
              >

                <BrainCircuit
                  size={18}
                  color={theme.signalSoft}
                />

                <span
                  style={{
                    fontSize:13
                  }}
                >
                  AI & Intelligent Systems
                </span>

              </div>


            </div>


          </Reveal>




          <Reveal delay={260}>


            <div

              style={{

                display:"flex",

                gap:14,

                flexWrap:"wrap"

              }}

            >


              <a
                href="#contact"
                className="btn-primary"
              >

                Get in touch

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


        </div>




        <Reveal delay={220}>

          <SignalPanel/>

        </Reveal>



      </div>


    </section>
  );
}