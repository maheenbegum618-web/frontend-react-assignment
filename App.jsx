import { useState } from "react";


function App() {


  const[username,setUsername]=useState ('Maheen');

  
  const [names,setNames]=useState(['Maheen','zeeniya','muneera'])
      
  function changeusername(){
      console.log("changeusername fun called");
      
      setUsername('muneera')
     
      console.log(username,'user updated');
  }
  return (
    <>
     
       <h1>Hello {username}

       </h1>
       
       <button onClick={ ()=>changeusername()}>change user</button>
      {

       names.map((ele,index)=>
       (<h2> 
        user is {ele}
        </h2> )
       )


      }
 
 
    </>
  )
}

export default App
