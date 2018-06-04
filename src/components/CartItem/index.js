import React, { Component } from 'react';
import Pizza from '../../images/products/pizza.jpeg';
import Stars from '../../components/Stars';
import Counter from '../../components/Counter';

class CartItem extends Component {
    constructor() {
        super();
        
        this.state = {
            active: false
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
                <h2>Pizza de Muzzarela con Peperoni</h2>
                <p className="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Stars />
                <p className="unit">1 u</p>
                <p className="price">$ 25</p>
                <Counter />
            </div>
        );
    }

    toggleProduct() {
        let isActive = this.state.active;
        this.setState({ active: !isActive });
    }
}

export default CartItem;