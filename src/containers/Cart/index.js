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
                items: [],
                user_items: []
            },
            userId: localStorage.getItem('user_id')
        }
    }

    componentDidMount() {
        let root = document.getElementById('root');
        
        root.classList.remove('start');
        root.classList.remove('middle');
        root.classList.add('finish');

        axios.get(`${API_ROOT}/orders/current?user_id=${this.state.userId}`)
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
                    { this.state.order.user_items.map( (item) => {
                        return <CartItem 
                            id={ item.id } 
                            key={ item.id } 
                            name={ item.product.name } 
                            fractionable={ item.product.fractionable } 
                            price={ item.unit_price } 
                            parent={ this }
                            productId={ item.product_id }
                            quantity={ item.quantity } 
                            salesUnit={ item.product.sales_unit } 
                        /> 
                    }) }
                </div>   
                <div className={ (this.state.opened ? `` : `closed `) + `summary` }>
                    <h3 onClick={ () => this.toggleSummary() }>Resumen del Carrito</h3>
                    <i onClick={ () => this.toggleSummary() } className={ `fa fa-chevron-` + (this.state.opened ? `down` : `up`) }></i>
                    <div className="summary-content">
                        <p className="title">Tus Items:</p>
                        <p className="value">{ this.state.order.total_user_items }</p>
                        <p className="title">Tu total:</p>
                        <p className="value">$ { this.state.order.total_user_price }</p>
                        <p className="title">Cantidad de Items:</p>
                        <p className="value">{ this.state.order.total_items }</p>
                        <p className="title">Total:</p>
                        <p className="value bold color">$ { this.state.order.total_price }</p>
                    </div>
                    <div className="summary-footer">
                        <i onClick={ () => this.cancelOrder() } className="fa fa-trash-o"></i>
                        <button type="button">Confirmar</button>
                    </div>
                </div>
            </div>
        );
    }

    cancelOrder() {
        if (window.confirm("Estas seguro que quieres eliminar tu pedido?")) {
            axios.delete(`${API_ROOT}/orders/current`, { user_id: localStorage.getItem('user_id') })
            .then( (res) => {
                window.location.href = "/";
            })
            .catch( (err) => {
                console.log(err);
            });
        }
    }

    setOrder(order) {
        this.setState({ order: order });
    }

    toggleSummary() {
        let isOpened = this.state.opened;
        this.setState({ opened: !isOpened });
    }
}

export default Cart;