import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { projects } from "../data/projects";
import { theme } from "../theme";

export default function Projects() {

  return (

    <section
      id="projects"
      style={{
        maxWidth:1100,
        margin:"0 auto",
        padding:"20px 24px 60px"
      }}
    >


      <Reveal>

        <h2
          className="font-display"
          style={{
            fontSize:30,
            fontWeight:700,
            textAlign:"center",
            margin:"10px 0 40px",
            color:theme.paper
          }}
        >
          Projects
        </h2>

      </Reveal>



      <div
        style={{
          display:"flex",
          flexDirection:"column",
          gap:24
        }}
      >

        {projects.map((p,i)=>(

          <Reveal
            key={p.title}
            delay={i*90}
          >


            <div
              className="card project-card"
              style={{
                display:"grid",
                gridTemplateColumns:"340px 1fr",
                overflow:"hidden"
              }}
            >


              {/* Image */}

              <div
                style={{
                  position:"relative"
                }}
              >

                <img
                  src={p.img}
                  alt={p.title}
                  style={{
                    width:"100%",
                    height:"100%",
                    objectFit:"cover",
                    minHeight:220
                  }}
                />


                <span
                  className="font-mono"
                  style={{
                    position:"absolute",
                    top:12,
                    left:12,
                    fontSize:10,
                    background:"#ffffff",
                    color:p.color,
                    padding:"5px 10px",
                    borderRadius:20,
                    border:`1px solid ${p.color}`
                  }}
                >
                  {p.tag}
                </span>

              </div>




              {/* Content */}

              <div
                style={{
                  padding:"24px 26px",
                  display:"flex",
                  flexDirection:"column",
                  justifyContent:"center"
                }}
              >


                <h3
                  className="font-display"
                  style={{
                    fontSize:20,
                    marginBottom:10
                  }}
                >
                  {p.title}
                </h3>



                <p
                  style={{
                    color:theme.mist,
                    fontSize:14,
                    lineHeight:1.7,
                    marginBottom:18
                  }}
                >
                  {p.desc}
                </p>




                {/* Tech Icons */}

                <div
                  style={{
                    display:"flex",
                    gap:14,
                    flexWrap:"wrap",
                    marginBottom:20
                  }}
                >

                  {p.tech.map((tech)=>(

                    <div
                      key={tech.name}
                      title={tech.name}
                      style={{
                        width:36,
                        height:36,
                        borderRadius:10,
                        background:"#F8FAFC",
                        border:`1px solid ${theme.line}`,
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center",
                        transition:".3s"
                      }}

                      className="project-tech"
                    >

                      <img
                        src={tech.icon}
                        alt={tech.name}
                        style={{
                          width:22,
                          height:22
                        }}
                      />

                    </div>

                  ))}

                </div>




                {/* Links */}

                <div
                  style={{
                    display:"flex",
                    gap:18
                  }}
                >

                  {p.links.map((l)=>(

                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono"
                      style={{
                        fontSize:12,
                        color:p.color,
                        textDecoration:"none",
                        display:"flex",
                        alignItems:"center",
                        gap:5
                      }}
                    >

                      {l.label}

                      <ArrowUpRight size={12}/>

                    </a>

                  ))}

                </div>


              </div>


            </div>


          </Reveal>

        ))}

      </div>


    </section>

  );
}