import React, { use, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator() {
    
    const [Password,setPassword]=useState("");
    const [Length,setLength]=useState(5); 
    const [NumberChange,setNumberChange]=useState(false); 
    const [CharChange,setCharChange]=useState(false); 

    function generate(){
      let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if(NumberChange){
        str+="0123456789";
      }
      if(CharChange){
        str+="-+/*!@#$%^&*(){}[]<>/'`~"
      }
      let pass="";
      for(let i=0;i<Length;i++){
        pass+=str[Math.floor(Math.random()*str.length)]
      }
      setPassword(pass);
    }
useEffect(generate,[Length]);
    // generate();

  return (
    <>
      <h1>Password is : "{Password}"</h1>
      <div className="second">
        <input type="range" min={5} max={25}  value={Length} onChange={(e)=>{setLength(e.target.value)}}  />
        <label htmlFor="">Length is : {Length}</label>
        <input type="checkbox" defaultChecked={NumberChange} id="num" onChange={(e)=>{setNumberChange(!NumberChange)}} />
        <label htmlFor="num">Number</label>
        <input type="checkbox" defaultChecked={CharChange} id="char" onChange={(e)=>{setCharChange(!CharChange)}} />
        <label htmlFor="char">Character</label>

      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <PasswordGenerator />,
);
