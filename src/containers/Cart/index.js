// Dependencies
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
// Components
import Header from '../../components/Header';
import CartItem from '../../components/CartItem';
// Config
import { API_ROOT } from './../../env.js';

const Cart = ({ history }) => {
    const user_id = localStorage.getItem('user_id');
    const [opened, setOpened] = useState(false);
    const [order, setOrder] = useState([{ items: [], user_items: [] }]);

    useEffect(() => {
        axios.get(`${ API_ROOT }orders/current`)
            .then(res => setOrder(res.data))
    }, []);


    const cancelOrder = () => {
        if (window.confirm("Estas seguro que quieres eliminar tu pedido?")) {
            axios.delete(`${ API_ROOT }orders/current`, { data: { user_id } })
                .then(() => history.push('/'));
        }
    }

    const toggleSummary = () => setOpened(!opened)

    return (
        <div id="cart" className="wrapper">
            <Header backButton action="back" />
            <div className="content">
                <h1>Carrito de Compras</h1>
                { order.user_items && order.user_items.map(item => <CartItem key={ item.id } { ...item } />) }
            </div>
            <div className={ (opened ? `` : `closed `) + `summary` }>
                <h3 onClick={ toggleSummary }>Resumen del Carrito</h3>
                <i onClick={ toggleSummary } className={ `fa fa-chevron-` + (opened ? `down` : `up`) } />
                <div className="summary-content">
                    <p className="title">Tus Items:</p>
                    <p className="value">{ order.total_user_items || 0 }</p>
                    <p className="title">Tu total:</p>
                    <p className="value">$ { order.total_user_price || 0 }</p>
                    <p className="title">Cantidad de Items:</p>
                    <p className="value">{ order.total_items || 0 }</p>
                    <p className="title">Total:</p>
                    <p className="value bold color">$ { order.total_price || 0 }</p>
                </div>
                { order.total_items > 0 && (
                    <div className="summary-footer">
                        <i onClick={ cancelOrder } className="fa fa-trash-o" />
                        <button type="button">Confirmar</button>
                    </div>
                ) }
            </div>
        </div>
    );
}

export default withRouter(Cart);