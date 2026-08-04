import { useEffect, useState } from "react";


export default function TypingRoles(){

  const text = 
    "Software engineer building scalable digital systems.";


  const [display,setDisplay] = useState("");

  const [finished,setFinished] = useState(false);



  useEffect(()=>{

    let index = 0;


    const timer = setInterval(()=>{


      setDisplay(
        text.substring(0,index + 1)
      );


      index++;



      if(index === text.length){

        clearInterval(timer);

        setFinished(true);

      }


    },35);



    return ()=>clearInterval(timer);



  },[]);




  return (

    <span>

      {display}


      {!finished && (

        <span className="typing-cursor">
          |
        </span>

      )}


    </span>

  );

}