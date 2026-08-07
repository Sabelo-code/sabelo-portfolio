import { useEffect, useState } from "react";
import { theme } from "../theme";


const profileTrace = [

  {
    command: "profile.load('Sabelo Tshazi')",
    result: "BSc Computer Science & Mathematics"
  },

  {
    command: "engineering.initialize()",
    result: "Software Engineering | System Design | Problem Solving"
  },

  {
    command: "stack.detect()",
    result: "React • Node.js • Python • JavaScript • SQL"
  },

  {
    command: "cloud.connect()",
    result: "AWS Cloud • REST APIs • Deployment Workflows"
  },

  {
    command: "projects.scan()",
    result: "AI Sentiment Analysis • MERN Applications • ASERION"
  },

  {
    command: "experience.load()",
    result: "Zendesk Administration • IT Support • Automation"
  },

  {
    command: "algorithms.load()",
    result: "Graph Theory • Data Structures • Algorithms"
  },

  {
    command: "career.status()",
    result: "AVAILABLE FOR SOFTWARE ENGINEERING OPPORTUNITIES"
  }

];



export function SignalPanel(){

const [active,setActive] = useState(0);
const [typed,setTyped] = useState("");
const [showResult,setShowResult] = useState(false);



const current = profileTrace[active];



/*
 Type command animation
*/

useEffect(()=>{


let index = 0;


setTyped("");

setShowResult(false);



const typing = setInterval(()=>{


setTyped(
current.command.substring(0,index)
);


index++;



if(index > current.command.length){


clearInterval(typing);


setTimeout(()=>{

setShowResult(true);


},300);


}



},45);



return()=>clearInterval(typing);



},[active]);





/*
 Move to next system step
*/


useEffect(()=>{


if(!showResult)
return;



const timer=setTimeout(()=>{


setActive(prev=>{


if(prev >= profileTrace.length-1){

return 0;

}


return prev+1;


});


},1500);



return()=>clearTimeout(timer);



},[showResult]);





return (

<div

style={{

background:"#020617",

borderRadius:18,

border:"1px solid rgba(148,163,184,.25)",

padding:24,

boxShadow:
"0 25px 70px rgba(2,6,23,.35)",

fontFamily:"JetBrains Mono, monospace"

}}

>



{/* Terminal Header */}


<div

style={{

display:"flex",

alignItems:"center",

gap:8,

marginBottom:22

}}

>


<span

style={{

width:11,

height:11,

borderRadius:"50%",

background:"#EF4444"

}}

/>


<span

style={{

width:11,

height:11,

borderRadius:"50%",

background:"#EAB308"

}}

/>


<span

style={{

width:11,

height:11,

borderRadius:"50%",

background:"#22C55E"

}}

/>


<span

style={{

marginLeft:12,

fontSize:11,

color:"#94A3B8"

}}

>

sabelo@portfolio:~$

</span>


</div>





{/* Terminal Body */}


<div>


<div

style={{

fontSize:12,

color:"#38BDF8",

marginBottom:25

}}

>

SABELO.SYSTEM 

</div>





{


profileTrace
.slice(0,active)
.map((item,index)=>(


<div

key={index}

style={{

marginBottom:18

}}

>


<div

style={{

fontSize:13,

color:"#E2E8F0"

}}

>

<span style={{color:"#38BDF8"}}>

$

</span>

{" "}

{item.command}

</div>


<div

style={{

fontSize:12,

color:"#22C55E",

marginTop:5

}}

>

✓ {item.result}

</div>



</div>


))


}







{/* Current command */}


<div

style={{

marginBottom:18

}}

>


<div

style={{

fontSize:13,

color:"#E2E8F0"

}}

>

<span style={{color:"#38BDF8"}}>

$

</span>

{" "}

{typed}

<span

style={{

animation:"blink 1s infinite"

}}

>

_

</span>


</div>



{


showResult &&

<div

style={{

fontSize:12,

color:"#22C55E",

marginTop:5

}}

>

✓ {current.result}

</div>


}



</div>






</div>







{/* Footer */}


<div

style={{

marginTop:25,

paddingTop:15,

borderTop:"1px solid rgba(148,163,184,.2)"

}}

>


<div

style={{

fontSize:11,

color:"#22C55E"

}}

>

● SYSTEM ONLINE

</div>


<div

style={{

fontSize:11,

color:"#94A3B8",

marginTop:8

}}

>

Building scalable software through code, mathematics and systems thinking.

</div>


</div>




</div>


)

}





export function TraceDivider(){

return (

<div

style={{

height:1,

width:"100%",

margin:"50px 0",

background:
"linear-gradient(90deg, transparent,#CBD5E1,transparent)"

}}

/>

)

}