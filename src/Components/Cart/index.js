import Header from '../Header'
import './index.css'

const Cart = props => {
  const {cartItems} = props
  console.log({cartItems})
  
  
  return(
   
    <>
    <Header />
    <h1>Cart Items</h1>
   
   
  </>

  )
     
}
export default Cart
