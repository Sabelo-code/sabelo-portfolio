import { theme } from "../theme";

const nodes = [
  { x: 80, y: 70 },
  { x: 180, y: 40 },
  { x: 280, y: 90 },
  { x: 130, y: 180 },
  { x: 240, y: 190 },
];

const connections = [
  [0,1],
  [1,2],
  [0,3],
  [3,4],
  [2,4],
  [1,4],
];


export function SignalPanel() {

  return (

    <div

      style={{

        width:"100%",

        height:360,

        borderRadius:20,

        background:
        "linear-gradient(145deg,#ffffff,#f8fafc)",

        border:`1px solid ${theme.line}`,

        boxShadow:
        "0 20px 50px rgba(15,23,42,.08)",

        position:"relative",

        overflow:"hidden",

      }}

    >


      {/* Title */}

      <div

        style={{

          position:"absolute",

          top:20,

          left:24,

          fontFamily:"JetBrains Mono",

          fontSize:11,

          color:theme.slate

        }}

      >

        SYSTEM GRAPH / ARCHITECTURE MODEL

      </div>




      <svg

        width="100%"

        height="100%"

        viewBox="0 0 360 260"

        style={{

          marginTop:45

        }}

      >


        {/* Connections */}

        {connections.map((line,index)=>{

          const start = nodes[line[0]];
          const end = nodes[line[1]];


          return (

            <line

              key={index}

              x1={start.x}

              y1={start.y}

              x2={end.x}

              y2={end.y}

              stroke="#CBD5E1"

              strokeWidth="2"

            />

          )

        })}




        {/* Data flow */}

        {connections.map((line,index)=>{

          const start = nodes[line[0]];
          const end = nodes[line[1]];


          return (

            <circle

              key={"pulse-"+index}

              r="4"

              fill="#03A9F4"

            >

              <animateMotion

                dur={`${2 + index * .3}s`}

                repeatCount="indefinite"

                path={`M${start.x},${start.y} L${end.x},${end.y}`}

              />

            </circle>


          )

        })}





        {/* Nodes */}

        {nodes.map((node,index)=>(


          <g key={index}>


            <circle

              cx={node.x}

              cy={node.y}

              r="18"

              fill="white"

              stroke="#03A9F4"

              strokeWidth="3"

            />


            <circle

              cx={node.x}

              cy={node.y}

              r="7"

              fill="#9C27B0"

            />


          </g>


        ))}



      </svg>




      <div

        style={{

          position:"absolute",

          bottom:20,

          left:24,

          right:24,

          display:"flex",

          justifyContent:"space-between",

          fontSize:12,

          color:theme.mist,

          fontFamily:"JetBrains Mono"

        }}

      >

        <span>
          Algorithms
        </span>


        <span>
          Cloud Systems
        </span>


        <span>
          Data Flow
        </span>


      </div>



    </div>


  );

}
export function TraceDivider() {
  return (
    <div
      style={{
        width: "100%",
        height: 1,
        margin: "40px 0",
        background:
          "linear-gradient(90deg, transparent, #03A9F4, #9C27B0, transparent)",
        opacity: 0.5,
      }}
    />
  );
}