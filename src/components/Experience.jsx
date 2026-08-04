import Reveal from "./Reveal";
import { experience, education } from "../data/timeline";
import { theme } from "../theme";


function TimelineItem({item}) {

  return (

    <div
      style={{
        display:"flex",
        gap:20,
        alignItems:"flex-start",
        maxWidth:700,
        margin:"0 auto 35px",
        textAlign:"left"
      }}
    >

      <div
        style={{
          width:50,
          height:50,
          borderRadius:14,
          background:"#F8FAFC",
          border:`1px solid ${theme.line}`,
          display:"flex",
          alignItems:"center",
          justifyContent:"center",
          flexShrink:0
        }}
      >

        <item.icon
          size={24}
          color={item.color}
        />

      </div>


      <div>

        <h3
          className="font-display"
          style={{
            margin:0,
            fontSize:20
          }}
        >
          {item.title}
        </h3>


        <p
          className="font-mono"
          style={{
            color:item.color,
            fontSize:12,
            margin:"6px 0"
          }}
        >
          {item.company} · {item.meta}
        </p>


        <p
          style={{
            color:theme.mist,
            fontSize:14,
            lineHeight:1.7
          }}
        >
          {item.desc}
        </p>


      </div>

    </div>

  );
}



export default function Experience(){

return (

<section
id="experience"
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
marginBottom:45
}}
>
Experience
</h2>

</Reveal>


{experience.map((item,index)=>(

<Reveal key={item.title} delay={index*100}>

<TimelineItem item={item}/>

</Reveal>

))}



<Reveal>

<h2
className="font-display"
style={{
fontSize:30,
fontWeight:700,
textAlign:"center",
margin:"60px 0 45px"
}}
>
Education and Professional Training
</h2>

</Reveal>



{education.map((item,index)=>(

<Reveal key={item.title} delay={index*100}>

<TimelineItem item={item}/>

</Reveal>

))}



</section>

);

}