import { configureStore } from "@reduxjs/toolkit";
import slice1Reducer from "./Slicer1"

const Stores =configureStore({
    reducer:{
       slice1:slice1Reducer,
    }
})

export default Stores;