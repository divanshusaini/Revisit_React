import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route,Link} from "react-router";
import Home from "./src/home";
import Contact from "./src/contact";
import Dashboard from "./src/dashboard";
 
function App(){
    return (
              <BrowserRouter>
              <nav>
                <Link to ="/">Home</Link>
                 <Link to ="/contact">Contact</Link>
                  <Link to ="/dashboard">Dashboard</Link>
              </nav>
              <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Contact" element={<Contact/>}></Route>
                <Route path="/Dashboard" element={<Dashboard/>}></Route>

              </Routes>
              </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);