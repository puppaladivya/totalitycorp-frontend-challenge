import React from 'react';
import Products from '../Products/index';
import './index.css'

const Home=(props)=>{
    const {ProductData}=props
    return (
        <>
        <h1>All Items</h1>
        <section>
            <div className='container-main'>
                {/*  sending list of products to product component */}
                {ProductData.map((item,index)=>{
                    return (
                        <Products product={item} key={item.id}/>
                    )

                })}
            </div>
        </section>
        </>
    )
}
export default Home