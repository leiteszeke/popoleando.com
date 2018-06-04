import React, { Component } from 'react';
import Header from '../../components/Header';
import CartItem from '../../components/CartItem';
import axios from 'axios';
import { API_ROOT } from './../../env.js';

class Cart extends Component {
    constructor() {
        super();

        this.state = {
            opened: false,
            order: {
                items: []
            },
        }
    }

    componentDidMount() {
        let root = document.getElementById('root');
        let userId = 12;

        root.classList.remove('start');
        root.classList.remove('middle');
        root.classList.add('finish');

        axios.get(`${API_ROOT}/orders/current?user_id=${userId}`)
        .then( (res) => {
            this.setState({ order: res.data });
        })
        .catch( (err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div id="cart" className="wrapper">
                <Header backButton backUrl="/products" />   
                <div className="content">
                    <h1>Carrito de Compras</h1>
                    { this.state.order.items.map( (item) => {
                        return <CartItem id={ item.id } key={ item.id } name={ item.product.name } price={ item.unit_price } quantity={ item.quantity } salesUnit={ item.product.sales_unit } /> 
                    }) }
                </div>   
                <div className={ (this.state.opened ? `` : `closed `) + `summary` }>
                    <h3>Resumen del Carrito</h3>
                    <i onClick={ () => this.toggleSummary() } className={ `fa fa-chevron-` + (this.state.opened ? `down` : `up`) }></i>
                    <div className="summary-content">
                        <p className="title">Cantidad de Items:</p>
                        <p className="value">{ this.state.order.total_items }</p>
                        <p className="title">Tus Items:</p>
                        <p className="value">{ this.state.order.total_user_items }</p>
                        <p className="title">Tu total:</p>
                        <p className="value">$ { this.state.order.total_user_price }</p>
                        <p className="title">Total:</p>
                        <p className="value bold color">$ { this.state.order.total_price }</p>
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