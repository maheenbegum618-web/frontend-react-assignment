import {useEffect, useState} from "react";

 function Todos() {
    const[todos, setTodos]=useState([])

     async function fetchtodos() {
        let res=await fetch("https://jsonplaceholder.typicode.com/todos")
        console.log(res, "res");
        let data = await res.json();
        console.log(data.slice(0,5),'data');
       setTodos(data.slice(0,5))
    
    
    }
  useEffect(()=>{
  fetchtodos();
},[]);

  return (
    <div>
      <h2>Todos </h2>
    {
    todos.map((ele, index)=> (  
        <h1>
            {ele.title}
        </h1>

    ))
}
    
    </div>
  );
}
export default Todos