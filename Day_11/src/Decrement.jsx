import React from "react";
import ReactDOM from "react-dom/client";

export default function Decrement({setcounts,counts}) {
  return <>
  <button onClick={()=>setcounts(counts-1)}>Decrement</button>

  </>;
}
