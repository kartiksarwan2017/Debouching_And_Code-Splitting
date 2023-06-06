import React, { useEffect, useState } from 'react';
import axios from "axios";

/* Debouncing in ReactJS */
const Home1 = () => {

  const [nameVal, setNameVal] = useState("");


  /* The useEffect is getting called when the value of state variable nameVal get changes. This state variable is assignmed to value in input
     if we type a in input then the useEffect gets called with the setTimeout of 1sec of fetching the email from API for nameVal= a then if we again append b to a i.e ab then the useEffect() will return the callback function which clears the timeout and then again renders the useEffect()  after 1sec shows the results for the input ab
  */
  useEffect(() => {

     const timeOutId =  setTimeout(async () => {
          
          try {

            const {data} = await axios.get(`https://randomuser.me/api/?name=${nameVal}`);

            console.log(data.results[0].email);
          }catch(error){
            console.log(error);
          } 
      }, 1000);

      // console.log("useEffect working here");

      return () => {
        // console.log("useEffect clean up here");
        clearTimeout(timeOutId);
      }

  }, [nameVal]);

  return (
    <>
     <div>
        <h1>Home</h1>
        <input 
          type="text" 
          value={nameVal} 
          onChange={(e) => setNameVal(e.target.value)} 
        />
     </div>
    </>  
  )
}

export default Home1;