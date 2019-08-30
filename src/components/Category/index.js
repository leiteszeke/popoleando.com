// Dependencies
import React from 'react';
import { Link } from 'react-router-dom';

const basePath = 'https://s3-us-west-2.amazonaws.com/leites.dev/Popolo/';
const Popolo = `${ basePath }popolo.jpg`;

const onError = e => {
    e.target.src = Popolo;
}

const Category = ({ _id, name, photo, products, totalProducts }) => (
    <div className="category">
        <img src={ `${ basePath }${ photo }` } onError={ onError } alt={ name } />
        <h2>{ name }</h2>
        <p>{ totalProducts || 0 } items</p>
        <Link
            to={{
                pathname: `/category/${ _id }`,
                state: { category: { _id, name, products } }
            }}
        >
            <i className="fa fa-chevron-right" />
        </Link>
    </div>
);

export default Category;