import React from "react";
import "./Products.css";
import { TfiMoney } from "react-icons/tfi";
import { BiSolidCategory } from "react-icons/bi";
import { IoShirt } from "react-icons/io5";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const Products = ({ products }) => {
  return (
    <div className="prod">
      <h1>Products</h1>
      <div className="allprod">
        {products.map((prod) => {
          return (
            <div key={prod.id} className="prodbox">
              <h2>
                {prod.title}
                <IoShirt />
              </h2>
              <h3>
                {prod.category}
                <BiSolidCategory />
              </h3>
              <p>
                {prod.price}
                <TfiMoney />
              </p>
              <div>
                <NavLink to={`/products/${prod.id}`}><img className="prodimg" src={prod.image} alt="" /></NavLink>
              </div>
              <button>
                <PiShoppingCartSimpleLight />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
