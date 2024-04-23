// import { useState } from 'react'
// import Card from './Componet/Sarfaraz khan/Card1'
import SliderComponent from './Componet/Sarfaraz khan/Slider'
import product1 from "./assets/products/1.png";
import product2 from "./assets/products/2.png";
import product3 from "./assets/products/3.png";
import product4 from "./assets/products/4.png";
import product5 from "./assets/products/5.png";
import product6 from "./assets/products/6.png";
import product7 from "./assets/products/7.png";
import product8 from "./assets/products/8.png";
import product9 from "./assets/products/9.png";
import product10 from "./assets/products/10.png";



const products = [
  {
    id: 1,
    name: "Rabadi",
    image: product1,
    price: 250,
  },
  {
    id: 2,
    name: "Gulab Jamun",
    image: product2,
    price: 450,
  },
  {
    id: 3,
    name: "Samosa",
    image: product3,
    price: 10,
  },
  {
    id: 4,
    name: "Dairy Milk",
    image: product4,
    price: 25,
  },
  {
    id: 5,
    name: "Namkeen",
    image: product5,
    price: 40,
  },
  {
    id: 6,
    name: "Dairy Milk",
    image: product6,
    price: 80,
  },
  {
    id: 7,
    name: "Cold Drinks 500ml",
    image: product7,
    price: 40,
  },
  {
    id: 8,
    name: "Cold Drinks 1L",
    image: product8,
    price: 60,
  },
  {
    id: 9,
    name: "Dairy Milk Silk",
    image: product9,
    price: 100,
  },
  {
    id: 10,
    name: "Kitkat",
    image: product10,
    price: 30,
  }

];

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <h1> Hello WelCome EveryOne </h1>
     {/* navbar */}
     {/* caraousel */}
     {/* <Card></Card> */}
     <h1>Product Slider</h1>
      <SliderComponent products={products} />
    </>
  )
}

export default App
