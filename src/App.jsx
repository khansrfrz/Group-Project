// import { useState } from 'react'
// import Card from './Componet/Sarfaraz khan/Card1'
import SliderComponent from './Componet/Sarfaraz khan/Slider'


const products = [
  {
    id: 1,
    name: "Product 1",
    image: "https://via.placeholder.com/150",
    price: 10,
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://via.placeholder.com/150",
    price: 15,
  },
  {
    id: 3,
    name: "Product 3",
    image: "https://via.placeholder.com/150",
    price: 20,
  },
  {
    id: 4,
    name: "Product 4",
    image: "https://via.placeholder.com/150",
    price: 25,
  },
  {
    id: 5,
    name: "Product 5",
    image: "https://via.placeholder.com/150",
    price: 30,
  },
  {
    id: 6,
    name: "Product 6",
    image: "https://via.placeholder.com/150",
    price: 35,
  },
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
