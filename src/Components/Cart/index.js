import Header from '../Header'
import './index.css'

const Cart = props => {
  const {quantity} = props
  console.log({quantity})
  
  return(
    <>
    <Header />
    <div className="cart-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        alt="cart"
        className="cart-img"
        />
      <h1>{quantity}hghg</h1>
    </div>
  </>

  )
     
}
export default Cart
