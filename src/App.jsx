import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Products from "./pages/Products/Products";
import Error from "./pages/error/Error";
import Prod from "/home/armen/Desktop/lessonreact/src/pages/Prod/Prod.jsx"

function App({products}) {
  return (
    <div className="myapp">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products products={products}/>} />
          <Route path="/products/:id" element={<Prod products={products}/>}/>
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
