// Dependencies
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// Components
import Spinner from '../../components/Spinner';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
// Images
import extendealTipo from '../../images/favicon.svg';
// Config
import { API_ROOT } from './../../env.js';

const Orders = () => {
    const userId = localStorage.getItem('user_id');
    const [orders, setOrders] = useState([]);
    const [menuState, setMenuState] = useState(false);
    const [showSpinner, setShowSpinner] = useState(true);

    const toggleMenu = () => setMenuState(!menuState);

    useEffect(() => {
        axios.get(`${ API_ROOT }orders`)
            .then(res => setOrders(res.data))
            .finally(() => setShowSpinner(false));
    }, []);

    const Order = ({ date, quantity, total_quantity, total_price, id }) => (
        <div className="order">
            <div className="image" style={ { backgroundImage: `url(${ extendealTipo })` } } />
            <h2>{ date }</h2>
            <p className="unit">Items: { quantity } / { total_quantity }</p>
            <p className="price">$ { total_price }</p>
            <Link to={ `/orders/${ id }` }>
                <i className="button fa fa-shopping-cart"></i>
            </Link>
        </div>
    )

    return (
        <div id="orders" className="wrapper">
            <Header onToggle={ toggleMenu } backUrl="/" showCartBasket />
            <Spinner start={ showSpinner } title="Cargando pedidos..." />
            <Menu className={ menuState ? `opened` : `closed` } />
            <div className="content">
                <h1>Mis Pedidos</h1>
                { orders.map(order => <Order key={ order.id } { ...order } />) }
            </div>
        </div>
    );
}

export default Orders;