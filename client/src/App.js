// import React, { Component } from 'react';
// import {HashRouter as Router, Switch, Route} from 'react-router-dom';
// import HomeProducts from './pages/HomeProducts';
// import Cart from './pages/Cart'

// (function getData(){
//   let products=[];
//   const basePrice = 5;
//   for(var i=1;i<=10;i++){
//     products.push({
//       id:i,
//       name:`product ${i}`,
//       isAdded: false,
//       price: basePrice*i
//     });
//   }
//   window.localStorage.setItem("products",JSON.stringify(products));
// })()

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Switch>
//           <Route name="Product List" path="/" component={HomeProducts} exact></Route>
//           <Route name="Cart" path="/cart" component={Cart} exact ></Route>
//         </Switch>
//       </Router>
//     );
//   }
// }

// export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './products/products';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Products />
      </header>
    </div>
  );
}

export default App;
