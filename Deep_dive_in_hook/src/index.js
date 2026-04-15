import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Main() {
    const [Rang,setRang]=useState("black");
document.body.style.backgroundColor=Rang;
    function func(color){

        setRang(color);
    }
  return (
    <>
      <h1>Background Color Changer</h1>
      <div className="but">
        <button onClick={()=>(func("red"))} style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=>(func("pink"))} style={{backgroundColor:"pink"}}>Pink</button>
        <button onClick={()=>(func("blue"))} style={{backgroundColor:"blue" ,color:"white"}}>Blue</button>
        <button onClick={()=>(func("orange"))} style={{backgroundColor:"orange"}}>Orange</button>
        <button onClick={()=>(func("green"))} style={{backgroundColor:"green"}}>Green</button>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
