import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";

function App(){
  const [count,setCount] =useState(0);
  const [number,setNumber]=useState(0);
  function Fibonacci(n){
    if(n<=1) return n;
    return Fibonacci(n-1)+Fibonacci(n-2);
  }

//   const result =Fibonacci(number);
  const result =useMemo(()=>(Fibonacci(number)),[number]);
    return (
        <>
        <h1>Counter is: {count}</h1>
        <button onClick={()=>(setCount(count+1))}>Increment</button>
        <button onClick={()=>(setCount(count-1))}>Decrement</button>

        <div>
           <h1>Fibonacci number is: {result}</h1>
            <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
        </div>

        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)