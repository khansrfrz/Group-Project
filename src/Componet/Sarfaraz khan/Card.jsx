
import React from "react";
import "./Card.css";

const Card = ({ name, image, price }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{name}</h3>
        <p className="card-price">${price}</p>
        <button className="add-to-cart-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
