import React, { useState } from "react";
import ReactDOM from  "react-dom/client";
import Increment from "./Increment";
import Decrement from "./Decrement";

function App(){
    const [count,setCount]=useState(0);
      return (
        <>
        <h1>Parent Counter is: {count}</h1>
        <Increment counts={count} setcounts={setCount} />
        <Decrement counts={count} setcounts={setCount} />

        </>

      )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)