import React from 'react'
import Rating from './Rating';

export default function Product(props) {
    const {product} = props; /* fetching product from props here*/
    return (
        <div key={product._id} className="card">
						<a href={`/product/${product._id}`}>
							{/* <!-- image size: 680px by 830px --> */}
							<img className="medium" 
              src={product.image}
              alt={product.name} 
              />
						</a>
						<div className="card-body">
            <a href={`/product/${product._id}`}>
								<h2>{product.name}</h2>
							</a>
							<Rating rating={product.rating} numReviews={product.numReviews}></Rating>
							<div className="price">${product.price}</div>
					</div>
          </div>
    )
}
