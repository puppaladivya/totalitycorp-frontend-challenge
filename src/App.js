import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home/index.js";
import Cart from './Components/Cart/index'
import {CartProvider} from 'react-use-cart';
const ProductData=[
  {title: 'Front Load Machine', brand: 'Samsung', price: 22490, id: 24, image: 'https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-washing-machine.png'},
  {title: "Collider Black Dial Men's Watch", brand: 'Fossil', price: 14995, id: 33, image: 'https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-simple-belt-watch.png'},
  {title: 'True Wireless Earbuds', brand: 'LG', price: 13499, id: 18, image: 'https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-ear-buds.png'},
  {title: "Maritime Men's Watch", brand: 'Titan', price: 11999, id: 35, image: 'https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-tatar-watch.png'},
  {title: "Neutra Analog Men's Watch", brand: 'Fossil', price: 10995, id: 34, image: 'https://assets.ccbp.in/frontend/react-js/ecommerce/electronics-simple-watch.png'},
  {title: 'Podcast Microphone', brand: 'MAONO', price: 5555, id: 22, image: 'https://assets.ccbp.in/frontend/react-js/ecommerce/appliances-singing-mike.png'},
  {title: 'Virgin Avocado Oil', brand: 'ProV', price: 4144, id: 42, image: 'https://assets.ccbp.in/frontend/react-js/ecommerce/grocery-oil.png'},
  {title: 'Slim Fit Blazer', brand: 'LEVIS', price: 2599, id: 8, image: 'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-purple-jacket.png'},
  {title: 'Zari Design Kurta', brand: 'Libas', price: 1869, id: 7, image: 'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-punjabi.png'},
  {title: 'Slim Fit Jeans', brand: 'LEVIS', price: 1469, id: 5, image: 'https://assets.ccbp.in/frontend/react-js/ecommerce/clothes-jeans-pants.png'},
]


function App(){
  return (
    <>
    <CartProvider>
    <Home ProductData={ProductData}/>
    < Cart/>
    </CartProvider>
    </>
    
  )
}
export default App