// Dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Components
import Spinner from '../../components/Spinner';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
// Config
import { API_ROOT } from './../../env.js';

const Order = ({ match: { params: { orderId } } }) => {
    const userId = localStorage.getItem('user_id');
    const [order, setOrder] = useState([]);
    const [showSpinner, setShowSpinner] = useState(true);
    const [menuState, setMenuState] = useState(false);

    useEffect(() => {
        axios.get(`${ API_ROOT }orders/${ orderId }`)
            .then(res => setOrder(res.data))
            .finally(() => setShowSpinner(false));
    }, [])

    const toggleMenu = () => setMenuState(!menuState);

    return (
        <div id="order" className="wrapper">
            <Header onToggle={ toggleMenu } backUrl="/" showCartBasket />
            <Spinner start={ showSpinner } title="Cargando pedido..." />
            <Menu className={ menuState ? `opened` : `closed` } />
            <div className="content">
                <h1>Pedido #{ orderId }</h1>

            </div>
        </div>
    );
}

export default Order;