import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body"

function GithubProfile(){
//Header
//Body :10 cards show karenge


    return (
        <>
            <Header/>
            <Body/>
        </> 
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<GithubProfile/>);