import React, { useEffect, useState } from 'react';
import axios from "axios";

const Home1 = () => {

  const [nameVal, setNameVal] = useState("");

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