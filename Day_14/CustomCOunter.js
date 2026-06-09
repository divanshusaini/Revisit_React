import { useState } from "react"
import { useDispatch } from "react-redux";
import {customIncreaser} from "./Slicer1"

export default function customCOunter(){
const [number,setNumber]=useState("");

const Dispatch= useDispatch();
function handle(){

    Dispatch(customIncreaser(Number(number)));
    setNumber("");
}

    return (
    <>
      <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
      <button onClick={handle}>Submit</button>
    </>)
}