//project stopwatch

import React, { useMemo, useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function Stopwatch(){
const [time,setTime]=useState(0);
const intervalRef=useRef(null);
function start(){
   intervalRef.current=setInterval(()=>{
    setTime((preTime)=>(preTime+1));
   },1000);
}

function stop(){
  clearInterval(intervalRef.current);
  intervalRef.current=null;
}

function reset(){
    clearInterval(intervalRef.current);
  intervalRef.current=null;
  setTime(0);
}
     return (
        <>
          <h1>Stopwatch is: {time}</h1>
          <button onClick={start}>Start</button>
          <button onClick={stop}>Stop</button>
          <button onClick={reset}>Reset</button>
        </>
     )

}

// function App() {
//   const [count, setCount] = useState(0);
//   let money = useRef(0);
//   return (
//     <>
//       <h1>Counter is:{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>

//       <h1>Money is:{money.current}</h1>
//       <button
//         onClick={() => { 
//         money.current=  money.current + 1;
//           console.log(money.current);
//         }}
//       >
//         Increment
//       </button>
//     </>
//   );
// }

ReactDOM.createRoot(document.getElementById("root")).render(<Stopwatch />);
