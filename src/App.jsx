import React from 'react';
import Navbar from './Componet/Navbar/Navbar';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Product from './Product';
import { newProducts, products , responsive ,bestProducts} from './data';
import './App.css';



function App() {
  const product = products.map((item)=>(
    <Product
    key={item.id}
    name={item.name}
    image={item.image}
    price={item.price}
    discount={item.discount}
    weight={item.weight}
    ></Product>
  )) 
  
  const newProduct = newProducts.map((item)=>(
    <Product
    key={item.id}
    name={item.name}
    image={item.image}
    price={item.price}
    discount={item.discount}
    weight={item.weight}
    ></Product>
  )) 
 
  
  const bestProduct = bestProducts.map((item)=>(
    <Product
    key={item.id}
    name={item.name}
    image={item.image}
    price={item.price}
    discount={item.discount}
    weight={item.weight}
    ></Product>
  )) 

  return (
    <>
    <Navbar></Navbar>
    <div className="App">
      <h1>All Products</h1>
      <Carousel showDots={true} responsive={responsive}>{product}</Carousel>
      <h1>Best Products</h1>
      <Carousel showDots={true} responsive={responsive}>{newProduct}</Carousel>
      <h1>Bestseller Products</h1>
      <Carousel showDots={true} responsive={responsive}>{bestProduct}</Carousel>
    </div>
    </>
  );
}
export default App;
