import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home';
import Login from './containers/Login';
import Products from './containers/Products';
import Cart from './containers/Cart';
import Orders from './containers/Orders';
import 'font-awesome/css/font-awesome.min.css';
import 'material-design-icons/iconfont/material-icons.css';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/login" component={ Login } />
      <Route path="/category/:categoryId/products" component={ Products } />
      <Route exact path="/products" component={ Products } />
      <Route exact path="/cart" component={ Cart } />
      <Route exact path="/orders" component={ Orders } />
    </div>
  </Router>  
)

export default App