import React, { useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { IconContext } from "react-icons";
import { RiVisaFill } from "react-icons/ri";
import "./Basket.css"

//click ov minusn ashxtuma plusy che ...//

const Basket = ({ basket, orderUp, orderDown, total, cardPriceChanger}) => {
  const [title, setTitle] = useState(20)
  const [description, setDescription] = useState(40)

  const pricechanger = (card)=>{
      cardPriceChanger(card)
  }
  return (
    <div className="basketbox">
      <p className="total">{basket.length === 0 ? `Basket is Empty` : `Total price of your basket is ${total}$`}</p>
        <div className="baskets">
      {basket.map((card) => {
        return (
          <div className="basketitem" key={card.id}>
            <h4>{card.title < title ? card.title : `${card.title.slice(0,title)}...`}</h4>
            <h5>{card.category}</h5>
            <h6 className="h11">{card.price}$ </h6>
                <div className="stardiv"> 
                    <div className="ratingh1"><h1 className="h11">Rating{card.rating.rate}</h1></div>
                  <div className="ratingbox">
              <IconContext.Provider value={{ color: "orange", className: "star" }}>
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
             </IconContext.Provider>
                </div>            
            </div>
            <div className="ordercount"><h1>Order Count</h1><h6 className="h11">{card.orderCount}</h6></div> 
            <p>{card.description < description ? card.description : `${card.description.slice(0, description)}...`}</p>
            <div>
              <img className="basketimg" src={card.image} />
            </div>
            <div onClick={()=> orderDown(card)} className="plusminus">
              <button className="btnminus">-</button>
                                                        {/* sa anumei funkcyaov cher linum plusne chi ashxatum */}
              <p className="totalitem"><br /> Price <br/>{Math.floor(card.price)*card.orderCount}$</p>
              <button onClick={()=> orderUp(card)} className="btnplus">+</button>
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
