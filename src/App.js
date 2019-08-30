// Dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import 'material-design-icons/iconfont/material-icons.css';
// Pages
import Home from './containers/Home';
import Login from './containers/Login';
import Products from './containers/Products';
import Cart from './containers/Cart';
import Orders from './containers/Orders';
import Order from './containers/Order';
// Styles
import './App.scss';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/login" component={ Login } />
      <Route path="/category/:categoryId" component={ Products } />
      <Route exact path="/products" component={ Products } />
      <Route exact path="/cart" component={ Cart } />
      <Route exact path="/orders" component={ Orders } />
      <Route exact path="/orders/:orderId" component={ Order } />
    </div>
  </Router>
)

export default App