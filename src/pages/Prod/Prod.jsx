import React from "react";
import { useParams } from "react-router-dom";
import { MdMoneyOffCsred } from "react-icons/md";
import "./prod.css";
const Prod = ({ products }) => {
  const { id } = useParams();

  const card = products.filter((prod) => prod.id === +id);
  console.log(card);

  return (
    <div className="buybox1">
      {card.map((card) => {
        return (
          <div className="buybox">
            <h1>{card.title}</h1>
            <h2>{card.category}</h2>
            <h3>{card.price}$</h3>
            <p>{card.description}</p>
            <div>
              <img className="buyimg" src={card.image} />
            </div>
            <button className="buy">
              30% Sale
              <MdMoneyOffCsred />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Prod;
