import React from 'react';
import Data from './data'
import Product from './components/Product'

function App() {
  return (
    <div className="grid-container">
			<header className="row">
				<div>
					<a className="brand" href="/"
						><span> Nutech </span> Technologies, LLC</a
					>
				</div>
				<div>
					<a href="/cart">Cart</a>
					<a href="/signin">Sign In</a>
				</div>
			</header>
			<main>
				<div className="row center">
          {Data.products.map((product) => (
            /*first element after map should have a key attribute*/
            /*Passing the product component to the product array here*/
            <Product roduct key={product._id} product={product}></Product>
            ))}
				</div>
			</main>
			<footer className="row center">All right reserved</footer>
		</div>
  );
}

export default App;
