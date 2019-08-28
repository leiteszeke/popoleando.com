// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
// Images
import Pizza from '../../images/products/pizza.jpeg';

const Category = ({ id, title, total_products }) => (
    <div className="category">
        <img src={ Pizza } alt={ title } />
        <h2>{ title }</h2>
        <p>{ total_products } items</p>
        <Link to={ `/category/${ id }/products`}>
            <i className="fa fa-chevron-right" />
        </Link>
    </div>
);

export default Category;