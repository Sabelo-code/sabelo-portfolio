import { ArrowUpRight, Download } from "lucide-react";
import Reveal from "./Reveal";
import { SignalPanel } from "./SignalReadout";
import TypingRoles from "./TypingRoles";
import { theme } from "../theme";


export default function Hero() {


return (

<section
id="hero"
style={{
maxWidth:1100,
margin:"0 auto",
padding:"90px 24px 70px"
}}
>


<div

className="hero-grid"

style={{

display:"grid",

gridTemplateColumns:"1.25fr 1fr",

gap:60,

alignItems:"center"

}}

>


<div>


<Reveal>

<span

className="font-mono"

style={{

fontSize:12,

color:theme.signalSoft,

display:"flex",

alignItems:"center",

gap:10

}}

>


<span

style={{

width:8,

height:8,

borderRadius:"50%",

background:theme.signal,

animation:"blink 1.5s infinite"

}}

/>


AVAILABLE FOR SOFTWARE ENGINEERING OPPORTUNITIES


</span>


</Reveal>





<Reveal delay={80}>


<h1

className="font-display"

style={{

fontSize:"clamp(42px,6vw,72px)",

lineHeight:1.05,

fontWeight:700,

margin:"25px 0"

}}

>


<span className="gradient-text">

I'm Sabelo Tshazi

</span>


<br/>


<TypingRoles/>


</h1>


</Reveal>





<Reveal delay={150}>


<p

style={{

fontSize:17,

lineHeight:1.8,

color:theme.mist,

maxWidth:560

}}

>


Software engineer focused on building reliable digital systems
using modern software engineering practices. I combine computer
science fundamentals, algorithms, cloud technologies, and
full-stack development to design scalable solutions.


</p>


</Reveal>





<Reveal delay={220}>


<div

style={{

display:"flex",

gap:14,

marginTop:32,

flexWrap:"wrap"

}}

>


<a

href="#contact"

className="btn-primary"

>

Let's build together

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





<Reveal delay={300}>


<div

style={{

display:"flex",

gap:12,

marginTop:40,

flexWrap:"wrap"

}}

>


{[

"Software Engineering",

"System Design",

"Algorithms",

"Cloud Architecture",

"AI Engineering"

].map(item=>(


<span

key={item}

className="font-mono"

style={{

fontSize:11,

padding:"8px 12px",

border:`1px solid ${theme.line}`,

borderRadius:20,

color:theme.slate

}}

>


{item}


</span>


))}


</div>


</Reveal>




</div>






<Reveal delay={200}>

<SignalPanel/>

</Reveal>




</div>


</section>

);


}