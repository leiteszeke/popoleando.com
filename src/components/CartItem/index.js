// Dependencies
import React from 'react';
import axios from 'axios';
// Components
import Stars from '../../components/Stars';
import Counter from '../../components/Counter';
// Images
import Pizza from '../../images/products/pizza.jpeg';
// Config
import { API_ROOT } from './../../env.js';

const CartItem = ({
    active,
    fractionable,
    _id,
    name,
    stars,
    sales_unit,
    unit_price,
    orderId,
    quantity,
    setOrder
}) => {
    const user_id = localStorage.getItem('user_id');
    const step = fractionable ? 0.5 : 1;

    const setQuantity = (value) => {
        axios.post(`${ API_ROOT }items`, {
            orderId,
            ordererId: user_id,
            productId: _id,
            quantity: value,
        })
            .then(res => setOrder(res.data.data));
    }

    return (
        <div className={ (active ? `active ` : ``) + `product` }>
            <img src={ Pizza } alt="Product" />
            <h4>{ name }</h4>
            <Stars value={ stars } />
            <p className="unit">{ sales_unit }</p>
            <p className="price">$ { unit_price }</p>
            <Counter
                defaultValue={ quantity }
                step={ step }
                onChange={ setQuantity }
            />
        </div>
    );
}

export default CartItem;