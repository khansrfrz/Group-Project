import React from "react";

export default function Product({ name, image, price, discount,weight}) {

    return (
        <div className="card">
            <img className="product--image" src={image} alt={name} />
            <h2>{name}</h2>
            <p>
                <button>Add to cart</button>
            </p>
            <p className="weight">Weight:{weight}</p>
            <p className="price">₹{price}</p>
            <p className="discount">{discount}</p>
        </div>
    )
}