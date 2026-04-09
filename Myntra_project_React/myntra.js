import React from "react";
import ReactDOM from "react-dom/client";

//header
// body
function Card(props) {
  return (
    <div style={{ border: "2px solid black", padding: "2px" }}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBNl0WX4Xn65RBm-GT48YBIvfBjOFAGoWP9g&s"
        height="200px"
        width="200px"
        alt=""
      />
      <div style={{ textAlign: "center" }}>
        <h2>{props.cloth}</h2>
        <h1>{props.offer} </h1>
        <h2>Shop Now</h2>
      </div>
    </div>
  );
}
// Footer

const arr = [
  { cloth: "T-Shirts", offer: "20-80%off" },
  { cloth: "Jeans", offer: "50-80%off" },
  { cloth: "Pants", offer: "30-80%off" },
  { cloth: "T-Shirts", offer: "70-80%off" },
  { cloth: "Kurta", offer: "20-30%off" },
  { cloth: "Trousers", offer: "20-50%off" },
  { cloth: "Cargos", offer: "50-80%off" },
  { cloth: "Tank Tshirts", offer: "30-80%off" },
  { cloth: "Suits", offer: "70-80%off" },
  { cloth: "Kurta", offer: "20-30%off" },
  { cloth: "Pajama", offer: "20-50%off" },
  { cloth: "Polo T-Shirts", offer: "20-50%off" },
  { cloth: "Tank Tshirts", offer: "30-80%off" },
  { cloth: "Party Wear", offer: "70-80%off" },
  { cloth: "Kurti", offer: "20-30%off" },
  { cloth: "Casuals", offer: "20-50%off" },
  { cloth: "Shorts", offer: "20-50%off" },
];
function App() {
  return (
    //header
    // bodyKurta
    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
        {
            arr.map((value,index)=>{
                <Card key={index} cloth={value.cloth} offer={value.offer}/>
            })
        }
   
     
    
    </div>
    // Footer
  );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);
