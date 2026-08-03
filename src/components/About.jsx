import { Briefcase, Cpu, Award } from "lucide-react";
import Reveal from "./Reveal";
import { theme } from "../theme";

const stats = [
  { label: "Years Experience", value: "1+", icon: Briefcase },
  { label: "Projects Built", value: "10+", icon: Cpu },
  { label: "Certifications", value: "20+", icon: Award },
];

export default function About() {
  return (
    <section
      id="about"
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
    marginBottom: 36,
    textAlign: "center",
  }}
>
  About
</h2>

      </Reveal>


      <div
        className="about-grid"
        style={{
          display:"grid",
          gridTemplateColumns:"1.4fr 1fr",
          gap:48,
          alignItems:"start"
        }}
      >


        {/* Description */}

        <Reveal delay={80}>

          <p
            style={{
              fontSize:18,
              lineHeight:1.8,
              color:theme.paper
            }}
          >
            I'm a <strong>BSc Computer Science and Mathematics graduate</strong>{" "}
            focused on building practical technology solutions through software
            development, IT support, cloud computing, and artificial intelligence.
          </p>


          <p
            style={{
              fontSize:15,
              lineHeight:1.8,
              color:theme.mist,
              marginTop:16
            }}
          >
            Through the <strong>CAPACITI Digital Associate Programme</strong>,
            I gained hands-on experience in IT service desk operations,
            Zendesk administration, AWS Cloud Foundations, cybersecurity
            fundamentals, and AI technologies. I have worked on customer
            support platforms, workflow improvements, web applications,
            and data-driven solutions.
          </p>


          <p
            style={{
              fontSize:15,
              lineHeight:1.8,
              color:theme.mist,
              marginTop:16
            }}
          >
            I enjoy solving technical challenges and creating reliable,
            user-focused systems. My goal is to bridge the gap between
            technology and people by building solutions that are efficient,
            scalable, and easy to use.
          </p>


        </Reveal>




        {/* Stats */}


        <Reveal delay={160}>

          <div
            style={{
              display:"flex",
              flexDirection:"column",
              gap:14
            }}
          >

          {stats.map((stat)=>(

            <div

              key={stat.label}

              className="card"

              style={{

                padding:"18px",

                display:"flex",

                alignItems:"center",

                justifyContent:"space-between"

              }}

            >

              <div

                style={{

                  display:"flex",

                  alignItems:"center",

                  gap:12

                }}

              >

                <stat.icon
                  size={20}
                  color={theme.signal}
                />


                <span

                  style={{

                    fontSize:13,

                    color:theme.mist

                  }}

                >

                  {stat.label}

                </span>


              </div>



              <span

                className="font-display"

                style={{

                  fontSize:24,

                  fontWeight:700,

                  background:theme.primaryGradient,

                  WebkitBackgroundClip:"text",

                  color:"transparent"

                }}

              >

                {stat.value}

              </span>


            </div>

          ))}


          </div>

        </Reveal>


      </div>

    </section>
  );
}