import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useCart} from 'react-use-cart';
import './index.css';

const Products = (props) => {
  const {product}=props;
  const {addItem}=useCart();

  return(
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4 container">
      {/* displaying each product on the UI */}
    <div className="card p-0 overflow-hidden h-100 shadow m-3">
      <img src={product.image} alt="img" className="card-img-top"/>
      <div className="card-body text-center">
        <h5 className="card-title">{product.title}</h5>
        <h5 className="card-title">{product.brand}</h5>
        <p className='card-text'>Rs {product.price}</p>
        {/* Adding products to cart */}
        <button className='btn btn-success' onClick={()=> addItem(props.product)}>Add to Cart</button>
      </div>
    </div>


    </div>
  )
}

export default Products
