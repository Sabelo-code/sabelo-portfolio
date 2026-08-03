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
        padding: "20px 24px 60px"
      }}
    >

      <Reveal>

        <h2
          className="font-display"
          style={{
            fontSize: 30,
            fontWeight: 700,
            margin: "10px 0 36px"
          }}
        >
          Skills
        </h2>

      </Reveal>


      <div
        style={{
          display:"flex",
          flexDirection:"column",
          gap:35
        }}
      >

        {skills.map((group, gi) => (

          <Reveal
            key={group.group}
            delay={gi * 100}
          >

            <div>

              <h3
                className="font-mono"
                style={{
                  fontSize:12,
                  color:group.color,
                  marginBottom:18
                }}
              >
                {group.group}
              </h3>


              <div

                style={{

                  display:"flex",

                  flexWrap:"wrap",

                  gap:22

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

                      gap:8,

                      width:70

                    }}

                  >

                    <div

                      style={{

                        width:52,

                        height:52,

                        display:"flex",

                        alignItems:"center",

                        justifyContent:"center",

                        borderRadius:12,

                        background:"#F8FAFC",

                        border:`1px solid ${theme.line}`,

                        transition:"0.2s"

                      }}

                    >

                      <img

                        src={item.icon}

                        alt={item.name}

                        style={{

                          width:28,

                          height:28

                        }}

                      />

                    </div>


                    <span

                      style={{

                        fontSize:11,

                        textAlign:"center",

                        color:theme.mist

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