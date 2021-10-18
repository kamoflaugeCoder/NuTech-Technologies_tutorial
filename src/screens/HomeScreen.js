import React from 'react'
import Product from '../components/Product';
import Data from '../data';


export default function HomeScreen() {
    return (
        <div>
            <div className="row center">
          {Data.products.map((product) => (
            /*first element after map should have a key attribute*/
            /*Passing the product component to the product array here*/
            <Product roduct key={product._id} product={product}></Product>
            ))}
			</div>
        </div>
    )
}
