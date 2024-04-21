import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample card component, replace with your actual card component
const Card = ({ name, image, price }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h3 className="card-title">{name}</h3>
      <p className="card-price">${price}</p>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};

function Responsive() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://nice-pink-llama-cape.cyclic.app/all')
      .then(response => {
        console.log('API Response:', response.data);
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {products.map(product => (
          <div key={product.id}>
            <Card
              name={product.Name}
              image={`https://nice-pink-llama-cape.cyclic.app/${product.img1}`}
              price={product.prise}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Responsive;
