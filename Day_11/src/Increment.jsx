import React from "react";
import ReactDOM from "react-dom/client"

function Increment({counts,setcounts}){
    return (
        <>
        <h2>Child Counter is: {counts}</h2>
<button onClick={()=>{setcounts(counts+1)}}>Increment</button>

</>
    )
}
export default Increment;
