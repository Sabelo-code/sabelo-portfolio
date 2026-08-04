import { Briefcase, Cpu, Award, Code2 } from "lucide-react";
import Reveal from "./Reveal";
import { theme } from "../theme";

const stats = [
  {
    label: "Professional Experience",
    value: "1+ Year",
    icon: Briefcase,
  },
  {
    label: "Projects Delivered",
    value: "10+",
    icon: Cpu,
  },
  {
    label: "Technical Certifications",
    value: "6+",
    icon: Award,
  },
  {
    label: "Technologies",
    value: "15+",
    icon: Code2,
  },
];

export default function About() {
  return (
    <section
      id="about"
      style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "40px 24px 80px",
      }}
    >

      <Reveal>

        <h2
          className="font-display"
          style={{
            fontSize: 34,
            fontWeight: 700,
            textAlign: "center",
            marginBottom: 50,
          }}
        >
          About Me
        </h2>

      </Reveal>


      <div
        className="about-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.3fr 1fr",
          gap: 55,
          alignItems: "center",
        }}
      >


        {/* About Text */}

        <Reveal delay={80}>

          <p
            style={{
              fontSize: 19,
              lineHeight: 1.8,
              color: theme.paper,
            }}
          >
            I'm a{" "}
            <strong>
              BSc Computer Science and Mathematics graduate
            </strong>{" "}
            passionate about building reliable technology solutions that solve
            real-world problems.
          </p>


          <p
            style={{
              fontSize: 15,
              lineHeight: 1.9,
              color: theme.mist,
              marginTop: 18,
            }}
          >
            My experience combines{" "}
            <strong>
              software development, IT support, cloud technologies, and
              customer experience systems.
            </strong>{" "}
            Through the CAPACITI Digital Associate Programme, I gained
            practical experience in IT service operations, Zendesk
            administration, AWS Cloud Foundations, cybersecurity fundamentals,
            and AI-driven solutions.
          </p>


          <p
            style={{
              fontSize: 15,
              lineHeight: 1.9,
              color: theme.mist,
              marginTop:18,
            }}
          >
            I have built web applications, implemented support workflows,
            developed data-driven solutions, and supported business users with
            technical challenges. I enjoy transforming complex problems into
            simple, scalable, and user-friendly solutions.
          </p>


          <p
            style={{
              fontSize:15,
              lineHeight:1.9,
              color:theme.mist,
              marginTop:18
            }}
          >
            Currently seeking opportunities in{" "}
            <strong>
              IT Support, Systems Support, Cloud, and Software Development
              roles
            </strong>{" "}
            where I can contribute technical skills while continuing to grow.
          </p>


        </Reveal>




        {/* Stats */}

        <Reveal delay={150}>


          <div
            style={{
              display:"grid",
              gridTemplateColumns:"1fr",
              gap:16
            }}
          >


            {stats.map((stat)=>(

              <div
                key={stat.label}
                className="card"
                style={{
                  padding:"20px",
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"space-between",
                  transition:"all .3s ease",
                }}

              >


                <div
                  style={{
                    display:"flex",
                    alignItems:"center",
                    gap:15
                  }}
                >

                  <div
                    style={{
                      width:45,
                      height:45,
                      borderRadius:12,
                      display:"flex",
                      alignItems:"center",
                      justifyContent:"center",
                      background:
                      "linear-gradient(135deg,#03A9F4,#9C27B0)"
                    }}
                  >

                    <stat.icon
                      size={22}
                      color="white"
                    />

                  </div>


                  <span
                    style={{
                      fontSize:14,
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
                    background:
                    "linear-gradient(135deg,#03A9F4,#9C27B0)",
                    WebkitBackgroundClip:"text",
                    WebkitTextFillColor:"transparent",
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