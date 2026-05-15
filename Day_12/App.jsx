import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route,Link} from "react-router";
import Home from "./src/home";
import Contact from "./src/contact";
import Dashboard from "./src/dashboard";
import Details from "./src/Details";
import Zero from "./src/Zero";
import Hi  from "./src/Hi";
import Hello  from "./src/Hello";

 
function App(){
    return (
              <BrowserRouter>
              <nav>
                <Link to ="/">Home</Link>
                 <Link to ="/contact">Contact</Link>
                  <Link to ="/dashboard">Dashboard</Link>
                  <Link to ="/Details">Details</Link>

              </nav>
              <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Contact" element={<Contact/>}></Route>
                <Route path="/Dashboard" element={<Dashboard/>}></Route>
                <Route path="/Details" element={<Details/>}>

                <Route index element={<Zero/>}></Route>
                <Route path="hello" element={<Hello/>}></Route>
                <Route path="hi" element={<Hi/>}></Route>

                </Route>

              </Routes>
              </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);