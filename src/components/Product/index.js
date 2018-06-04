import React, { Component } from 'react';
import Pizza from '../../images/products/pizza.jpeg';
import Stars from '../../components/Stars';
import axios from 'axios';
import { API_ROOT } from './../../env.js';

class Product extends Component {
    constructor() {
        super();
        
        this.state = {
            product: {}
        }
    }

    render() {
        return (
            <div className="product">
                <img src={ Pizza } alt={ this.props.name } />      
                <h2>{ this.props.name }</h2>
                <Stars />
                <p className="unit">{ this.props.salesUnit }</p>
                <p className="price">$ { this.props.price }</p>
                <i onClick={ (e) => this.addProduct(e) } className="button fa fa-plus"></i>
            </div>
        );
    }

    addProduct(e) {
        e.stopPropagation();

        let data = {
            user_id: 1,
            items: [
                { product_id: this.props.id, unit_price: this.props.price, quantity: 1}
            ]
        }

        axios.put(`${API_ROOT}/orders/current`, data)
        .then( (res) => {
            window.location.href = '/cart';
        })
        .catch( (err) => {
            console.log(err);
        });
    }
}

export default Product;