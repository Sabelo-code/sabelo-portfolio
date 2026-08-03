const API_URL =
  " https://proud-hall-3256.sabelo-tshazi-digifycx.workers.dev";


export async function askAI(message) {

  try {

    const response = await fetch(
      API_URL,
      {
        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify({
          message
        })
      }
    );


    const data = await response.json();


    return data.reply;


  } catch(error){

    console.error(error);

    return "Sorry, I am currently unavailable.";

  }

}