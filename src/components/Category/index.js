import React, { Component } from 'react';
import Pizza from '../../images/products/pizza.jpeg';
import { Link } from 'react-router-dom';

class Category extends Component {
    render() {
        return (
            <div className="category">
                <img src={ Pizza } alt="Product" />      
                <h2>Pizza</h2>
                <p>25 items</p> 
                <Link to="/products">
                    <i className="fa fa-chevron-right"></i>
                </Link>        
            </div>
        );
    }
}

export default Category;