import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import ChatMessage from "./ChatMessage";
import { askAI } from "../services/chatbot";


const quickQuestions = [
  {
    label: " Why should I hire Sabelo?",
    message: "Why should a company hire Sabelo?"
  },
  {
    label: " Technical skills",
    message: "What technical skills does Sabelo have?"
  },
  {
    label: "AI projects",
    message: "Explain Sabelo's AI projects"
  },
  {
    label: "Certifications",
    message: "What certifications does Sabelo have?"
  },
  {
    label: "Education",
    message: "Tell me about Sabelo's education"
  },
  {
    label: "Experience",
    message: "Give me a recruiter summary of Sabelo's experience"
  }
];


export default function AIChat() {


  const [open, setOpen] = useState(false);

  const [showGreeting, setShowGreeting] = useState(true);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);


  const [messages, setMessages] = useState([

    {
      role: "assistant",
      message:
        "Hi 👋 I'm Sabelo's AI career assistant.\n\nI can help recruiters quickly understand his skills, projects, certifications, and experience.\n\nChoose a question below or ask me anything."
    }

  ]);



  async function sendMessage(text) {


    if (!text.trim()) return;


    setMessages(prev => [

      ...prev,

      {
        role: "user",
        message: text
      }

    ]);


    setInput("");

    setLoading(true);



    const answer = await askAI(text);



    setMessages(prev => [

      ...prev,

      {
        role: "assistant",
        message: answer
      }

    ]);


    setLoading(false);

  }




  return (

    <>


      {/* Greeting Bubble Before Opening */}

      {

      showGreeting && !open && (

        <div

        style={{

          position: "fixed",

          bottom: 105,

          right: 30,

          width: 270,

          background: "#020617",

          border: "1px solid #334155",

          borderRadius: 16,

          padding: "16px",

          color: "#fff",

          zIndex: 9998,

          boxShadow: "0 15px 40px rgba(0,0,0,.35)"

        }}

        >


          <button

          onClick={() => setShowGreeting(false)}

          style={{

            position:"absolute",

            top:6,

            right:10,

            border:"none",

            background:"transparent",

            color:"#94a3b8",

            cursor:"pointer",

            fontSize:18

          }}

          >

            ×

          </button>



          <div

          style={{

            fontWeight:700,

            fontSize:14,

            marginBottom:8

          }}

          >

            Hi 👋 I'm Sabelo's AI career assistant.

          </div>



          <div

          style={{

            color:"#94a3b8",

            fontSize:12,

            lineHeight:1.5

          }}

          >

            Ask me about his skills, projects, experience, and certifications.

          </div>



        </div>

      )

      }





      {/* Floating Chat Button */}


      <button

      onClick={() => {

        setOpen(!open);

        setShowGreeting(false);

      }}

      style={{

        position:"fixed",

        bottom:30,

        right:30,

        width:60,

        height:60,

        borderRadius:"50%",

        border:"none",

        background:"#2563eb",

        color:"#fff",

        cursor:"pointer",

        display:"flex",

        justifyContent:"center",

        alignItems:"center",

        zIndex:9999,

        boxShadow:"0 10px 30px rgba(0,0,0,.3)"

      }}

      >

        {

        open

        ?

        <X size={24}/>

        :

        <MessageCircle size={24}/>

        }


      </button>





      {/* Chat Window */}


      {

      open && (


      <div

      style={{

        position:"fixed",

        bottom:105,

        right:30,

        width:380,

        height:560,

        background:"#020617",

        border:"1px solid #334155",

        borderRadius:18,

        padding:18,

        display:"flex",

        flexDirection:"column",

        zIndex:9999,

        boxShadow:"0 20px 50px rgba(0,0,0,.4)"

      }}

      >



        {/* Header */}


        <div

        style={{

          paddingBottom:12,

          borderBottom:"1px solid #334155",

          marginBottom:12

        }}

        >

          <div

          style={{

            color:"#fff",

            fontWeight:700,

            fontSize:16

          }}

          >

             Sabelo Recruiter Assistant

          </div>


          <div

          style={{

            color:"#94a3b8",

            fontSize:12,

            marginTop:4

          }}

          >

            AI-powered portfolio assistant

          </div>


        </div>





        {/* Messages */}


        <div

        style={{

          flex:1,

          overflowY:"auto"

        }}

        >


          {

          messages.map((msg,index)=>(

            <ChatMessage

            key={index}

            role={msg.role}

            message={msg.message}

            />

          ))

          }



          {

          loading && (

            <ChatMessage

            role="assistant"

            message="Thinking..."

            />

          )

          }


        </div>





        {/* Quick Questions */}


        <div

        style={{

          display:"flex",

          flexWrap:"wrap",

          gap:8,

          marginBottom:12

        }}

        >


          {

          quickQuestions.map((q)=>(


            <button

            key={q.label}

            onClick={() => sendMessage(q.message)}

            style={{

              background:"#0f172a",

              border:"1px solid #334155",

              color:"#fff",

              padding:"7px 10px",

              borderRadius:20,

              fontSize:11,

              cursor:"pointer"

            }}

            >

              {q.label}

            </button>


          ))

          }


        </div>





        {/* Input */}



        <div

        style={{

          display:"flex",

          gap:8

        }}

        >


          <input

          value={input}

          onChange={(e)=>setInput(e.target.value)}

          onKeyDown={(e)=>{

            if(e.key==="Enter"){

              sendMessage(input);

            }

          }}

          placeholder="Ask about Sabelo..."

          style={{

            flex:1,

            padding:"10px",

            borderRadius:10,

            border:"1px solid #334155",

            background:"#0f172a",

            color:"#fff",

            outline:"none"

          }}

          />



          <button

          onClick={()=>sendMessage(input)}

          style={{

            width:45,

            borderRadius:10,

            border:"none",

            background:"#2563eb",

            color:"#fff",

            cursor:"pointer"

          }}

          >

            <Send size={18}/>

          </button>


        </div>



      </div>


      )

      }


    </>

  );

}