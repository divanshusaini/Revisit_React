import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Stores from "./Stores";
import Counting from "./Counting"
import CustomCOunter from "./CustomCOunter";
function App(){
    return (
    <Provider store={Stores}>
      <Counting></Counting>
      <br></br>
      <br></br>
      <CustomCOunter></CustomCOunter>
    </Provider>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);