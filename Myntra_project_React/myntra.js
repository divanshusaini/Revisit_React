import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";


function Card(props) {
  return (
    <div className="card" style={{ border: "2px solid black", padding: "2px" }}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBNl0WX4Xn65RBm-GT48YBIvfBjOFAGoWP9g&s"
        height="200px"
        width="200px"
        alt=""
      />
      <div style={{ textAlign: "center" }}>
        <h2>{props.cloth}</h2>
        <h1>{props.offer} </h1>
        <h2>Price:{props.price } Rs</h2>
        <h2>Shop Now</h2>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="heading">
      <img className="images" src="https://logosandtypes.com/wp-content/uploads/2021/01/myntra.svg" alt="" width="100px" height="45px" />

      <div className="option">
        <button className="but">Men</button>
        <button className="but">Women</button>
        <button className="but">Kids</button>
        <button className="but">Home & Living</button>
        <button className="but">Beauty</button>
        <button className="but">Studio</button>
      </div>

      <input className="searchbar" type="text" placeholder="Search for products brands and more" />
      <div className="Profile">
        <button className="pro">Profiles</button>
        <button className="pro">Wishlist</button>
        <button className="pro">Bag</button>
      </div>
    </div>
  );
}

function Footer(){
  return(
    <div  className="img2">
<img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2026/MARCH/31/V5J9sXaN_fc170bb71d4e405b90410922a98b34a1.jpg" width="1500px" alt="" />
</div>
  )
}

const arr = [
  { cloth: "T-Shirts", offer: "20-80%off",price:200},
  { cloth: "Jeans", offer: "50-80%off",price:250 },
  { cloth: "Pants", offer: "30-80%off",price:500 },
  { cloth: "Tank-Shirts", offer: "70-80%off",price:250 },
  { cloth: "Kurta", offer: "20-30%off",price:500 },
  { cloth: "Trousers", offer: "20-50%off", price:800 },
  { cloth: "Cargos", offer: "50-80%off" ,price:250},
  { cloth: "Tank Tshirts", offer: "30-80%off", price:800 },
  { cloth: "Suits", offer: "70-80%off", price:800 },
  { cloth: "Kurta", offer: "20-30%off",price:500 },
  { cloth: "Pajama", offer: "20-50%off",price:250 },
  { cloth: "Polo T-Shirts", offer: "20-50%off", price:800 },
  { cloth: "Tank Tshirts", offer: "30-80%off",price:500 },
  { cloth: "Party Wear", offer: "70-80%off" ,price:250},
  { cloth: "Kurti", offer: "20-30%off", price:800 },
  { cloth: "Casuals", offer: "20-50%off", price:800 },
  { cloth: "Shorts", offer: "20-50%off",price:500 },
];



function App() {

  const [A,setA]=useState(arr);
function sort(){
  A.sort((a,b)=>a.price-b.price);
  setA([...A]); 
  
}
function filter(){
 setA( A.filter(el=>el.price>499));
 
}

  return (
    <>
      
      <Header />
  
  <button onClick={sort} className="sort">Sort By Price</button>
  <button onClick={filter} className="sort1"> Price above 499</button>
      <div className="middle"
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {A.map((value, index) => (
          <Card key={index} cloth={value.cloth} price={value.price} offer={value.offer} />
        ))}
      </div>
        <Footer/>
    </>
  );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);
