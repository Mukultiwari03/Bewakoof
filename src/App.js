import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Men from "./Views/Men";
import Addtocart from "./Components/Addtocart"; 
import { Route, Routes } from "react-router-dom";
function App() {
  const [cart,setcart] = useState([])
  const [warning,setwarning] = useState(false);

  const handleClick=(item)=>{
    // console.log(item)
    let isPresent = false;
    cart.forEach((product)=>{
      if(item.id===product.id)
      isPresent = true;
    })
    if(isPresent){
      setwarning(true);
      setTimeout(()=>{
        setwarning(false)
      },2000)
      return;
    }
  setcart([...cart,item])
  }
  return (
    <div>
      <Navbar size={cart.length} />
      {/* <Men/> */}
      <Routes>
        <Route path="/" element={<Men handleClick={handleClick}/>}></Route>
        <Route path="/addtocart" element={<Addtocart cart={cart} setcart={setcart}/>}></Route>
      </Routes>
      {
        warning && <div className="warning d-flex flex-wrap">Item is already added to <br/>your cart </div>

      }
    </div>
  );
}

export default App;
