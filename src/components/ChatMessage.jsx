export default function ChatMessage({ message, role }) {


return (

<div

style={{

display:"flex",

justifyContent:
role==="user"
?
"flex-end"
:
"flex-start",

marginBottom:12

}}

>


<div

style={{

maxWidth:"85%",

padding:"12px 14px",

borderRadius:14,

background:
role==="user"
?
"#2563eb"
:
"#1e293b",

color:"#fff",

fontSize:13,

lineHeight:1.6,

whiteSpace:"pre-line"

}}

>

{message}

</div>


</div>

);

}