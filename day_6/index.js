import React , {useState} from "react";

import ReactDOM from "react-dom/client";



function Counter (){
    let [count,setCount]=useState(0);
    function increment(){
        count=count+1;
       setCount(count);
        
    }
    function decrement(){
        count=count-1;
           setCount(count); 
    }
  
  return (
    <div className="first">
    <div>Count is: {count }</div>
    <button onClick={increment} >Increment</button>
    <button onClick={decrement}  >Decrement</button>

</div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>);
   