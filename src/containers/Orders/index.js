import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import extendealTipo from '../../images/favicon.svg';
import axios from 'axios';
import { API_ROOT } from './../../env.js';

class Orders extends Component {
    constructor() {
        super();

        this.state = {
            orders: [],
            menuState: false
        }
    }

    componentDidMount() {
        this.refs.spinner.start();
        let userId = localStorage.getItem('user_id');

        axios.get(`${API_ROOT}/orders?user_id=${userId}`)
        .then( (res) => {
            this.setState({ orders: res.data }, () => {
                this.refs.spinner.finish();
            });
        })
        .catch( (err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <div id="orders" className="wrapper">
                <Header parent={ this } backUrl="/" showCartBasket />   
                <Spinner ref="spinner" title="Cargando pedidos..." />
                <Menu className={ this.state.menuState ? `opened` : `closed` } />   
                <div className="content">
                    <h1>Mis Pedidos</h1>
                    { this.state.orders.map( (order) => {
                        return (
                            <div key={ order.id } className="order">
                                <div className="image" style={ { backgroundImage: `url(` + extendealTipo + `)` } }></div>      
                                <h2>{ order.date }</h2>
                                <p className="unit">Items: { order.quantity } / { order.total_quantity }</p>
                                <p className="price">$ { order.total_price }</p>
                                <Link to={ `/orders/${order.id}` }>
                                    <i className="button fa fa-shopping-cart"></i>
                                </Link>
                            </div>
                        )
                    })}
                    
                </div>   
            </div>
        );
    }

    toggleMenu() {
        let menuState = this.state.menuState;
        this.setState({ menuState: !menuState });
    }
}

export default Orders;