import React, { Component } from 'react';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import axios from 'axios';
import { API_ROOT } from './../../env.js';

class Orders extends Component {
    constructor() {
        super();

        this.state = {
            menuState: false
        }
    }
    render() {
        return (
            <div id="orders" className="wrapper">
                <Header parent={ this } backUrl="/" showCartBasket />   
                <Menu className={ this.state.menuState ? `opened` : `closed` } />   
                <div className="content">
                    <h1>Mis Pedidos</h1>
                    
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