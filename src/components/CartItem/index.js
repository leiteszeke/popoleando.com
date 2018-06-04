import React, { Component } from 'react';
import Pizza from '../../images/products/pizza.jpeg';
import Stars from '../../components/Stars';
import Counter from '../../components/Counter';

class CartItem extends Component {
    constructor() {
        super();
        
        this.state = {
            active: false,
            step: 0.5
        }
    }

    componentDidMount() {
        if (this.props.active)
           this.setState({ active: this.props.active });
    }

    render() {
        return (
            <div className={ (this.state.active ? `active ` : ``) + `product` }>
                <img src={ Pizza } alt="Product" />      
                <h2>{ this.props.name }</h2>
                <Stars />
                <p className="unit">{ this.props.salesUnit }</p>
                <p className="price">$ { this.props.price }</p>
                <Counter step={ this.state.step } value={ this.props.quantity } />
            </div>
        );
    }

    toggleProduct() {
        let isActive = this.state.active;
        this.setState({ active: !isActive });
    }
}

export default CartItem;