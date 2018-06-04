import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home';
import Products from './containers/Products';
import Cart from './containers/Cart';
import 'font-awesome/css/font-awesome.min.css';
import 'material-design-icons/iconfont/material-icons.css';

const App = () => (
  /*
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/products" component={ Products } />
      <Route path="/products/:productId" component={ Product } />
      <Route exact path="/contact" component={ Contact } />
      <Route exact path="/success" component={ Success } />
    </div>
  </Router>
  */
  <Router>
    <div>
      <Route exact path="/" component={ Home } />
      <Route exact path="/products" component={ Products } />
      <Route exact path="/cart" component={ Cart } />
      <div className="background"></div>
    </div>
  </Router>  
)

export default App