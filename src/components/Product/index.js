import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Pizza from '../../images/products/pizza.jpeg';
import Stars from '../../components/Stars';
import axios from 'axios';
import { API_ROOT } from './../../env.js';

class Product extends Component {
    constructor() {
        super();
        
        this.state = {
            product: {},
            redirect: false
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

                { this.state.redirect 
                    ? <Redirect to="/cart" />
                    : ''
                }
            </div>
        );
    }

    addProduct(e) {
        e.stopPropagation();

        let data = {
            user_id: localStorage.getItem('user_id'),
            items: [
                { product_id: this.props.id, unit_price: this.props.price, quantity: 1}
            ]
        }

        axios.put(`${API_ROOT}/orders/current`, data)
        .then( (res) => {
            this.setState({ redirect: true });
        })
        .catch( (err) => {
            console.log(err);
        });
    }
}

export default Product;