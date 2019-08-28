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
    name,
    product_id,
    stars,
    sales_unit,
    unit_price,
    quantity,
    setOrder
}) => {
    const user_id = localStorage.getItem('user_id');
    const step = fractionable ? 0.5 : 1;

    const setQuantity = (value) => {
        const data = {
            user_id,
            items: [
                {
                    product_id,
                    quantity: parseFloat(value),
                    unit_price: parseFloat(unit_price)
                }
            ]
        }

        axios.put(`${ API_ROOT }/orders/current`, data)
            .then(res => setOrder(res.data));
    }

    return (
        <div className={ (active ? `active ` : ``) + `product` }>
            <img src={ Pizza } alt="Product" />
            <h2>{ name }</h2>
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