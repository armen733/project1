import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Products from "./pages/Products/Products";
import Error from "./pages/error/Error";
import Prod from "./pages/Prod/Prod.jsx"
import { useMemo, useState } from "react";
import Basket from "./pages/Products/Basket/Basket";
import Signin from "./pages/register/signin/Signin.jsx";
import Signup from "./pages/register/signup/Signup.jsx";
import Profile from "./pages/profile/Profile.jsx";

function App({products}) {
  const [cards, setCards] = useState([]) 

  const calculateTotal = (cards) => {
     let b = cards.reduce((counter, item) => counter + item.price * item.orderCount,0)
     return Math.floor(b)
  } 
  const total = useMemo(()=> calculateTotal(cards), [cards])
  const orderUp = (product) =>{
    product.orderCount++

    // console.log(product);
    setCards([...cards])
  }
  const orderDown = (product) =>{
    product.orderCount--
    if (product.orderCount === 0) {
      cards.splice(cards.indexOf(product),1)
    }
    setCards([...cards])
  }
  const cardPriceChanger = (prod) =>{
    Math.floor(prod.price) * prod.orderCount
    setCards([...cards])

  }
  const addToCard = (item)=>{ 

    if(!cards.includes(item)){
      item.orderCount = 1
      cards.push(item)
    } else{
      item.orderCount++
    }
    setCards([...cards])
  }
  const [users, setUsers] = useState([{
    id: 1, username : "Armen", password : "1234"
  }])

  // console.log(cards);
  return (
    <div className="myapp">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home products={products}/>} />
          <Route path="/products" element={<Products products={products} addToCard={addToCard}/>} />
          <Route path="/products/:id" element={<Prod products={products}/>}/>
          <Route path="/basket" element={<Basket basket={cards} orderUp={orderUp} orderDown={orderDown} total={total} cardPriceChanger={cardPriceChanger}/>}/>
          <Route path="/signin" element={<Signin users={users}/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="*" element={<Error/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
