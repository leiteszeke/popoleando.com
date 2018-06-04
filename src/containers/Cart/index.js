import React, { Component } from 'react';
import Header from '../../components/Header';
import CartItem from '../../components/CartItem';

class Cart extends Component {
    constructor() {
        super();

        this.state = {
            opened: false
        }
    }

    componentDidMount() {
        let root = document.getElementById('root');
        
        root.classList.remove('start');
        root.classList.remove('middle');
        root.classList.add('finish');
    }

    render() {
        return (
            <div id="cart" className="wrapper">
                <Header backButton backUrl="/products" />   
                <div className="content">
                    <h1>Pizza</h1>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>   
                <div className={ (this.state.opened ? `` : `closed `) + `summary` }>
                    <h3>Shopping Cart Summary</h3>
                    <i onClick={ () => this.toggleSummary() } className={ `fa fa-chevron-` + (this.state.opened ? `down` : `up`) }></i>
                    <div className="summary-content">
                        <p className="title">Number of Items:</p>
                        <p className="value">3</p>
                        <p className="title">Subtotal:</p>
                        <p className="value">$ 25.75</p>
                        <p className="title">Tax:</p>
                        <p className="value">$ 1.00</p>
                        <p className="title">Total:</p>
                        <p className="value bold color">$ 26.75</p>
                    </div>
                    <div className="summary-footer">
                        <i className="fa fa-trash-o"></i>
                        <i className="fa fa-bookmark-o"></i>
                        <button>Checkout</button>
                    </div>
                </div>
            </div>
        );
    }

    toggleSummary() {
        let isOpened = this.state.opened;
        this.setState({ opened: !isOpened });
    }
}

export default Cart;