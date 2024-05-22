import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Products from "./pages/Products/Products";
import Error from "./pages/error/Error";
import Prod from "/home/armen/Desktop/lessonreact/src/pages/Prod/Prod.jsx"
import { useState } from "react";
import Basket from "./pages/Products/Basket/Basket";

function App({products}) {
  const [cards, setCards] = useState([]) 
  
 

  const addToCard = (item)=>{ 

    if(!cards.includes(item)){
      item.orderCount = 1
      cards.push(item)
    } else{
      item.orderCount++
    }
    setCards([...cards])
  }
  // console.log(cards);
  return (
    <div className="myapp">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home products={products}/>} />
          <Route path="/products" element={<Products products={products} addToCard={addToCard}/>} />
          <Route path="/products/:id" element={<Prod products={products}/>}/>
          <Route path="/basket" element={<Basket basket={cards}/>}/>
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
