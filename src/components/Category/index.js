// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
// Images
import Pizza from '../../images/products/pizza.jpeg';

const Category = ({ _id, name, photo, totalProducts }) => (
    <div className="category">
        <img src={ photo || Pizza } alt={ name } />
        <h2>{ name }</h2>
        <p>{ totalProducts } items</p>
        <Link to={ `/category/${ _id }/products`}>
            <i className="fa fa-chevron-right" />
        </Link>
    </div>
);

export default Category;