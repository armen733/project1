import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { IconContext } from "react-icons";
import { RiVisaFill } from "react-icons/ri";

import "./Basket.css"

const Basket = ({ basket }) => {
  // console.log(cards);
  return (
    <div className="basketbox">
        <div className="baskets">
      {basket.map((card) => {
        return (
          <div className="basketitem" key={card.id}>
            <h4>{card.title}</h4>
            <h5>{card.category}</h5>
            <h6>{card.price}$ </h6>
                <div className="stardiv"> 
                    <div className="ratingh1"><h1>Rating{card.rating.rate}</h1></div>
                  <div className="ratingbox">
              <IconContext.Provider value={{ color: "orange", className: "star" }}>
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
             </IconContext.Provider>
                </div>            
            </div>
            <div className="ordercount"><h1>Order Count</h1><h6>{card.orderCount}</h6></div> 
            <p>{card.description}</p>
            <div>
              <img className="basketimg" src={card.image} />
            </div>
            <button className="buy">
              30% Sale $   
            </button>
          </div>
        );
      })}</div>
      
    </div>

  );
};

export default Basket;
