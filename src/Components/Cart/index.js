import React from 'react';
import {useCart} from 'react-use-cart';
import './index.css'
const Cart=()=>{
  const {
    isEmpty,totalUniqueItems,
    items,totalItems,cartTotal,updateItemQuantity,removeItem,emptyCart
  }=useCart();
  if (isEmpty)return <h1 className='text-center'>Your Cart is Empty</h1>
  return(
    <section className='="py-4 container'>
      <div className='row justify-content-center'>
        <div className='col-12'>
          {/* Displaying  unique items and total items in the cart */}
          <h5>Cart ({totalUniqueItems}) total Items:({totalItems})</h5>
          <table className='table table-light table-hover m-0 image'>
            <tbody>
              {items.map((item,index)=>{
                return (
                  <tr key={index}>
                  <td  className='image'>
                    <img src={item.image} alt="img" id='image' />

                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>Quantity ({item.quantity})</td>
                  <td>
                    {/* adding and removing items in the cart */}
                    <button className='btn btn-info ms-2'
                    onClick={()=> updateItemQuantity(item.id,item.quantity -1)}>-</button>
                    <button className='btn btn-info ms-2'
                    onClick={ () => updateItemQuantity(item.id,item.quantity+1)}>+</button>
                    <button className='btn btn-danger ms-2'
                    onClick={ ()=> removeItem(item.id)}>Remove</button>
                  </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        <div className='"col-auto ms-auto'>
          <h2>Total price: Rs {cartTotal}</h2>
        </div>
        <div className='col-auto'>
          <button className='btn btn-danger m-2' onClick={()=> emptyCart()}>clear Cart</button>
          <button className='btn btn-primary m-2'>Buy Now</button>

        </div>
      </div>

    </section>
  )
}

export default Cart