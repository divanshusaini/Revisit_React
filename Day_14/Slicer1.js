import { createSlice } from "@reduxjs/toolkit";

const reactSlicer = createSlice({
  name:"slice1",
  initialState:{count:0},
  reducers:{
   //state means initial state , i mean state ke ander initial state chanli jayegi jo ki object h or jiske andr count variable h 
    Increment:(state)=>{state.count=state.count+1},
    Decrement:(state)=>{state.count=state.count-1},
    reset:(state)=>{state.count=0},
    customIncreaser:(state,action)=>{ state.count+=action.payload}
  }
})
  export const {Increment,Decrement,reset,customIncreaser} = reactSlicer.actions;
export default reactSlicer.reducer;