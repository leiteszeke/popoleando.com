import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import axios from 'axios';
import { API_ROOT } from './../../env.js'; 

class Order extends Component {
    constructor() {
        super();

        this.state = {
            order: []
        }
    }

    componentDidMount() {
        this.refs.spinner.start();
        let userId = localStorage.getItem('user_id');

        axios.get(`${API_ROOT}/orders/${this.props.match.params.orderId}?user_id=${userId}`)
        .then( (res) => {
            this.setState({ order: res.data }, () => {
                this.refs.spinner.finish();
            });
        })
        .catch( (err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <div id="order" className="wrapper">
                <Header parent={ this } backUrl="/" showCartBasket />   
                <Spinner ref="spinner" title="Cargando pedido..." />
                <Menu className={ this.state.menuState ? `opened` : `closed` } />   
                <div className="content">
                    <h1>Pedido #{ this.props.match.params.orderId }</h1>
                    
                </div>   
            </div>
        );
    }

    toggleMenu() {
        let menuState = this.state.menuState;
        this.setState({ menuState: !menuState });
    }
}

export default Order;