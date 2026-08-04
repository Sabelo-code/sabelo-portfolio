import Reveal from "./Reveal";
import { skills } from "../data/skills";
import { theme } from "../theme";

export default function Skills() {
  return (
    <section
      id="skills"
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
            margin: "10px 0 50px",
            color: theme.paper,
          }}
        >
          Skills
        </h2>

      </Reveal>


      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 35,
          alignItems: "center",
        }}
      >

        {skills.map((group, gi) => (

          <Reveal
            key={group.group}
            delay={gi * 100}
          >

            <div
              style={{
                width:"100%",
                textAlign:"center"
              }}
            >

              <h3
                className="font-mono"
                style={{
                  fontSize:12,
                  color:group.color,
                  marginBottom:20,
                  letterSpacing:"0.12em"
                }}
              >
                {group.group.toUpperCase()}
              </h3>


              <div
                style={{
                  display:"flex",
                  flexWrap:"wrap",
                  justifyContent:"center",
                  gap:25
                }}
              >

                {group.items.map((item)=>(

                  <div
                    key={item.name}
                    title={item.name}

                    style={{
                      display:"flex",
                      flexDirection:"column",
                      alignItems:"center",
                      gap:10,
                      width:75,
                      cursor:"pointer"
                    }}

                    className="skill-icon"
                  >


                    <div

                      style={{

                        width:58,
                        height:58,

                        display:"flex",

                        alignItems:"center",

                        justifyContent:"center",

                        borderRadius:16,

                        background:"#F8FAFC",

                        border:`1px solid ${theme.line}`,

                        transition:"all .3s ease",

                      }}

                    >

                      <img

                        src={item.icon}

                        alt={item.name}

                        style={{

                          width:32,

                          height:32,

                          objectFit:"contain",

                          transition:"transform .3s ease"

                        }}

                      />

                    </div>



                    <span

                      style={{

                        fontSize:11,

                        textAlign:"center",

                        color:theme.mist,

                        fontWeight:500

                      }}

                    >

                      {item.name}

                    </span>


                  </div>

                ))}

              </div>

            </div>

          </Reveal>

        ))}


      </div>


    </section>
  );
}