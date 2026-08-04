import { useEffect, useState } from "react";
import { theme } from "../theme";


const architectures = [

{
name:"PRODUCTION WEB SYSTEM",

description:
"Request flow through frontend, backend services, database and cloud infrastructure.",

stack:
"React • Node.js • REST API • MongoDB • AWS",

algorithm:
"Shortest Path Routing",

complexity:
"O((V+E)logV)",


nodes:[
{id:"USER",x:40,y:130,type:"Client"},
{id:"UI",x:130,y:70,type:"React"},
{id:"API",x:230,y:130,type:"API"},
{id:"DB",x:330,y:70,type:"Database"},
{id:"CLOUD",x:330,y:200,type:"AWS"},
],


flow:[
"USER",
"UI",
"API",
"DB",
"CLOUD"
]


},



{
name:"AI ENGINEERING PIPELINE",

description:
"Data processing pipeline from raw information to intelligent predictions.",

stack:
"Python • TensorFlow • Data Processing • ML API",

algorithm:
"Graph Traversal",

complexity:
"O(V+E)",


nodes:[
{id:"DATA",x:50,y:130,type:"Dataset"},
{id:"PROCESS",x:150,y:60,type:"Cleaning"},
{id:"MODEL",x:250,y:130,type:"Model"},
{id:"API",x:350,y:60,type:"Prediction"},
{id:"APP",x:250,y:210,type:"Application"}
],


flow:[
"DATA",
"PROCESS",
"MODEL",
"API",
"APP"
]

},



{
name:"CLOUD DEPLOYMENT",

description:
"Automated delivery pipeline from source code to production.",

stack:
"Git • CI/CD • Cloud • Monitoring",

algorithm:
"Pipeline Optimisation",

complexity:
"O(E)",


nodes:[
{id:"CODE",x:50,y:130,type:"Source"},
{id:"GIT",x:150,y:60,type:"Version"},
{id:"BUILD",x:250,y:130,type:"CI/CD"},
{id:"CLOUD",x:350,y:60,type:"Deploy"},
{id:"MON",x:250,y:210,type:"Monitor"}
],


flow:[
"CODE",
"GIT",
"BUILD",
"CLOUD",
"MON"
]

},



{
name:"ENTERPRISE SUPPORT PLATFORM",

description:
"Customer issue resolution workflow using automation and knowledge systems.",

stack:
"Zendesk • Automation • Reporting",

algorithm:
"Workflow Graph",

complexity:
"O(V+E)",


nodes:[
{id:"USER",x:50,y:130,type:"Customer"},
{id:"TICKET",x:150,y:60,type:"Ticket"},
{id:"AGENT",x:250,y:130,type:"Engineer"},
{id:"FIX",x:350,y:60,type:"Solution"},
{id:"DATA",x:250,y:210,type:"Analytics"}
],


flow:[
"USER",
"TICKET",
"AGENT",
"FIX",
"DATA"
]

}

];



function getNode(nodes,id){

return nodes.find(
node=>node.id===id
);

}




export function SignalPanel(){


const [index,setIndex]=useState(0);

const [step,setStep]=useState(0);


const system=architectures[index];



useEffect(()=>{


const change=setInterval(()=>{


setIndex(
prev=>(prev+1)%architectures.length
);


setStep(0);


},10000);



return()=>clearInterval(change);


},[]);



useEffect(()=>{


const animate=setInterval(()=>{


setStep(prev=>{


if(prev>=system.flow.length)
return 0;


return prev+1;


});


},1200);



return()=>clearInterval(animate);



},[system]);





return(

<div
  className="signal-card"
  style={{
    background: "#ffffff",
    border: `1px solid ${theme.line}`,
    borderRadius: 18,
    padding: 24,
    boxShadow: "0 20px 50px rgba(15,23,42,.08)",
  }}
>



<div

className="font-mono"

style={{

fontSize:11,

color:theme.signal

}}

>

SOFTWARE SYSTEM ANALYSER

</div>




<h2

className="font-display"

style={{

fontSize:22,

margin:"12px 0"

}}

>

{system.name}

</h2>




<p

style={{

fontSize:13,

lineHeight:1.6,

color:theme.mist

}}

>

{system.description}

</p>





<svg

width="100%"

height="260"

viewBox="0 0 430 260"

>



{


system.flow.map((item,i)=>{


if(i===system.flow.length-1)
return null;



const start=getNode(
system.nodes,
item
);


const end=getNode(
system.nodes,
system.flow[i+1]
);



return(

<line

key={i}

x1={start.x}

y1={start.y}

x2={end.x}

y2={end.y}

stroke={
i < step
? theme.signal
:"#CBD5E1"
}

strokeWidth="4"

/>


)


})


}





{


system.flow.map((item,i)=>{


if(i>=step)
return null;



const node=getNode(
system.nodes,
item
);



return(

<circle

key={item}

cx={node.x}

cy={node.y}

r="8"

fill={theme.signal}

>

<animate

attributeName="r"

values="6;14;6"

dur="1s"

repeatCount="indefinite"

/>


</circle>


)


})

}





{


system.nodes.map(node=>{


const active=
system.flow.includes(node.id);



return(

<g key={node.id}>


<circle

cx={node.x}

cy={node.y}

r="25"

fill={
active
?"#E0F7FF"
:"#fff"
}

stroke={
active
?theme.signal
:"#CBD5E1"
}

strokeWidth="3"

/>




<text

x={node.x}

y={node.y+4}

textAnchor="middle"

fontSize="10"

fontWeight="700"

>

{node.id}

</text>



<text

x={node.x}

y={node.y+42}

textAnchor="middle"

fontSize="9"

fill="#64748B"

>

{node.type}

</text>



</g>


)


})


}



</svg>






<div

style={{

display:"grid",

gridTemplateColumns:"1fr 1fr",

gap:12

}}

>


<div className="card"

style={{padding:14}}

>

<span

className="font-mono"

style={{fontSize:10,color:theme.slate}}

>

ALGORITHM

</span>


<div>

{system.algorithm}

</div>


</div>




<div className="card"

style={{padding:14}}

>

<span

className="font-mono"

style={{fontSize:10,color:theme.slate}}

>

COMPLEXITY

</span>


<div>

{system.complexity}

</div>


</div>



</div>





<div

style={{

marginTop:15,

padding:12,

background:"#F8FAFC",

borderRadius:10,

fontSize:12

}}

>


<strong>TECH STACK:</strong>

<br/>

{system.stack}


</div>





<div

style={{

marginTop:15,

display:"flex",

justifyContent:"space-between",

fontSize:12

}}

>

<span>

Nodes analysed: {system.nodes.length}

</span>


<span

style={{

color:theme.signal

}}

>

System stable ✓

</span>


</div>



</div>


)


}
export function TraceDivider() {
  return (
    <div
      style={{
        height: 1,
        width: "100%",
        margin: "50px 0",
        background:
          "linear-gradient(90deg, transparent, #CBD5E1, transparent)",
      }}
    />
  );
}