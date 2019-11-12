import React, { Component } from 'react'
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
// import {BrowserRouter as Router,Route} from 'react-router-dom'
import HomeProducts from '../pages/HomeProducts';
import ListChangeProducts from '../pages/ListChangeProducts';
import Cart from '../pages/Cart'

export default class RouterDOM extends Component {
    render() {
        return (
          <Router>
            <Switch>
              <Route name="Product List" path="/" component={HomeProducts} exact></Route>
              <Route name="Cart" path="/cart" component={Cart} exact ></Route>
              <Route name="Add and edit Product" path="/add-product" component={ListChangeProducts} exact ></Route>
            </Switch>
          </Router>
        )
    }
}