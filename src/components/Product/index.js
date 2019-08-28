// Dependencies
import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
// Components
import Stars from '../../components/Stars';
// Images
import Pizza from '../../images/products/pizza.jpeg';
// Config
import { API_ROOT } from './../../env.js';

const Product = ({ id, name, history, unit_price, sales_unit }) => {
    const user_id = localStorage.getItem('user_id');
    const addProduct = () => {
        const item = {
            product_id: id,
            unit_price,
            quantity: 1,
        };

        axios.put(`${ API_ROOT }/orders/current`, { user_id, items: [item] })
            .then(() => history.push('/cart'));
    };

    return (
        <div className="product">
            <img src={ Pizza } alt={ name } />
            <h2>{ name }</h2>
            <Stars />
            <p className="unit">{ sales_unit }</p>
            <p className="price">$ { unit_price }</p>
            <i onClick={ addProduct } className="button fa fa-plus" />
        </div>
    );
}

export default withRouter(Product);