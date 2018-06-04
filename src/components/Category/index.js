import React, { Component } from 'react';
import Pizza from '../../images/products/pizza.jpeg';
import { Link } from 'react-router-dom';

class Category extends Component {
    render() {
        return (
            <div className="category">
                <img src={ Pizza } alt={ this.props.title } />      
                <h2>{ this.props.title }</h2>
                <p>{ this.props.total } items</p> 
                <Link to={ `/category/` + this.props.id + `/products`}>
                    <i className="fa fa-chevron-right"></i>
                </Link>        
            </div>
        );
    }
}

export default Category;