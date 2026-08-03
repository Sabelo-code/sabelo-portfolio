const corsHeaders = {
  "Access-Control-Allow-Origin": "http://localhost:5173",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};


export default {

async fetch(request, env) {


if(request.method === "OPTIONS"){

return new Response(null,{
headers:corsHeaders
});

}



if(request.method !== "POST"){

return new Response(
"Sabelo AI Assistant Running",
{
headers:corsHeaders
}
);

}



try {


const {message} = await request.json();



const response = await fetch(

"https://api.groq.com/openai/v1/chat/completions",

{

method:"POST",

headers:{

"Content-Type":"application/json",

"Authorization":
`Bearer ${env.GROQ_API_KEY}`

},


body:JSON.stringify({

model:"llama-3.3-70b-versatile",

messages:[

{

role:"system",

content:`

You are Sabelo's portfolio AI assistant.

Only answer questions about Sabelo Shazi.

Profile:

Education:
BSc Computer Science and Mathematics graduate from University of Zululand.

Skills:
Python,
JavaScript,
React,
Node.js,
SQL,
MongoDB,
AWS,
Zendesk,
Cloudflare Workers,
TensorFlow,
Machine Learning,
IT Support.

Experience:

CAPACITI:
AI and Service Desk Bootcamp.

CX Expert:
Zendesk administration,
ticket forms,
macros,
automations,
Help Centre,
customer support workflows.

Projects:

AI Sentiment Analysis:
Machine learning sentiment analysis application.

FreshScan:
Computer vision grape quality inspection system.

Building Smart Varsity:
MERN stack university event management platform.

AI Support Portal:
AI-powered customer support platform.

ASERION:
Digital transformation platform.

Answer professionally and recruiter-friendly.

`

},

{

role:"user",

content:message

}

],

temperature:0.5

})

}

);



const data = await response.json();



if(!response.ok){

return Response.json(

{
reply:
"Groq Error: " + JSON.stringify(data)
},

{
status:500,
headers:corsHeaders
}

);

}



return Response.json(

{

reply:
data.choices[0].message.content

},

{

headers:corsHeaders

}

);



}

catch(error){


return Response.json(

{
reply:
"Server error: " + error.message
},

{
status:500,
headers:corsHeaders
}

);


}


}

};