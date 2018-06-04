import React, { Component } from 'react';
import Pizza from '../../images/products/pizza.jpeg';
import Stars from '../../components/Stars';
import axios from 'axios';
import { API_ROOT } from './../../env.js';

class Product extends Component {
    constructor() {
        super();
        
        this.state = {
            active: false,
            product: {}
        }
    }

    componentDidMount() {
        if (this.props.active)
           this.setState({ active: this.props.active });
    }

    render() {
        return (
            <div onClick={ () => this.toggleProduct() } className={ (this.state.active ? `active ` : ``) + `product` }>
                <img src={ Pizza } alt={ this.props.name } />      
                <h2>{ this.props.name }</h2>
                <p className="text">{ this.props.description }</p>
                <Stars />
                <p className="unit">{ this.props.salesUnit }</p>
                <p className="price">$ { this.props.price }</p>
                <i onClick={ (e) => this.addProduct(e) } className="button fa fa-plus"></i>
            </div>
        );
    }

    toggleProduct() {
        let isActive = this.state.active;
        this.setState({ active: !isActive });
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