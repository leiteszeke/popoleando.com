import React, { Component } from 'react';
import Pizza from '../../images/products/pizza.jpeg';
import Stars from '../../components/Stars';
import Counter from '../../components/Counter';
import axios from 'axios';
import { API_ROOT } from './../../env.js';

class CartItem extends Component {
    constructor() {
        super();
        
        this.state = {
            active: false,
            step: 1
        }

        this.setQuantity = this.setQuantity.bind(this);
    }

    componentDidMount() {
        if (this.props.active)
           this.setState({ active: this.props.active });

        if (this.props.fractionable === 1)
            this.setState({ step: 0.5 });
    }

    render() {
        return (
            <div className={ (this.state.active ? `active ` : ``) + `product` }>
                <img src={ Pizza } alt="Product" />      
                <h2>{ this.props.name }</h2>
                <Stars />
                <p className="unit">{ this.props.salesUnit }</p>
                <p className="price">$ { this.props.price }</p>
                <Counter parent={ this } fractionable={ this.props.fractionable } step={ this.state.step } value={ this.props.quantity } />
            </div>
        );
    }

    setQuantity(quantity) {
        let data = {
            user_id: localStorage.getItem('user_id'),
            items: [
                {
                    product_id: this.props.productId,
                    quantity: parseFloat(quantity),
                    unit_price: parseFloat(this.props.price)
                }
            ]
        }

        axios.put(`${API_ROOT}/orders/current`, data)
        .then( (res) => {
            this.props.parent.setOrder(res.data);
        })
        .catch( (err) => {
            console.log(err);
        });
    }

    toggleProduct() {
        let isActive = this.state.active;
        this.setState({ active: !isActive });
    }
}

export default CartItem;