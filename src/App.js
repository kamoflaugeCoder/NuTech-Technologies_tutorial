import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
// import Data from './data';

// import Product from './components/Product';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
<BrowserRouter>
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
      {/* Routes are create in the main section */}
			<main> 
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
        
			</main>
			<footer className="row center">All right reserved</footer>
		</div>
    </BrowserRouter>
  );
}

export default App;
