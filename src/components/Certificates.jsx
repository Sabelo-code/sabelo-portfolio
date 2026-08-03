import { Award, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import { certificates } from "../data/certificates";
import { theme } from "../theme";


export default function Certificates() {

  return (

    <section
      id="certificates"
      style={{
        maxWidth:1100,
        margin:"0 auto",
        padding:"20px 24px 60px"
      }}
    >


      <Reveal>

        <span
          className="font-mono"
          style={{
            fontSize:11,
            color:theme.slate
          }}
        >
          04 · CERTIFICATIONS
        </span>


        <h2
          className="font-display"
          style={{
            fontSize:30,
            margin:"10px 0 36px"
          }}
        >
          Professional certifications.
        </h2>


      </Reveal>



      <div

        style={{

          display:"grid",

          gridTemplateColumns:
          "repeat(auto-fit,minmax(260px,1fr))",

          gap:20

        }}

      >


        {

        certificates.map((cert,index)=>(


          <Reveal
          key={cert.title}
          delay={index*80}
          >


            <div

            className="card"

            style={{

              padding:22,

              height:"100%"

            }}

            >


              <Award
              size={22}
              color={theme.signal}
              />


              <h3

              className="font-display"

              style={{

                fontSize:18,

                margin:"16px 0 8px"

              }}

              >

                {cert.title}

              </h3>



              <p

              style={{

                color:theme.mist,

                fontSize:14,

                marginBottom:8

              }}

              >

                {cert.issuer}

              </p>



              <span

              className="font-mono"

              style={{

                fontSize:11,

                color:theme.signalSoft

              }}

              >

                {cert.category}

              </span>



              {

              cert.link !== "#" && (

              <a

              href={cert.link}

              target="_blank"

              rel="noreferrer"

              style={{

                display:"flex",

                alignItems:"center",

                gap:5,

                marginTop:16,

                color:theme.signal,

                fontSize:13,

                textDecoration:"none"

              }}

              >

                View Certificate

                <ExternalLink size={14}/>

              </a>

              )

              }


            </div>


          </Reveal>


        ))

        }


      </div>


    </section>

  );

}