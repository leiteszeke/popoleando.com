// Dependencies
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
// Components
import Layout from '../../components/Layout';
import CartItem from '../../components/CartItem';
// Config
import { API_ROOT } from './../../env.js';

const Cart = ({ history }) => {
  const user_id = localStorage.getItem('user_id');
  const [opened, setOpened] = useState(false);
  const [order, setOrder] = useState(null);
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    axios.get(`${ API_ROOT }orders/current`)
      .then(res => {
        if (!res.data.error) {
          setOrder(res.data.data);
        }
      })
      .finally(() => setShowSpinner(false));
  }, []);


  const cancelOrder = () => {
    if (window.confirm("Estas seguro que quieres eliminar tu pedido?")) {
      axios.delete(`${ API_ROOT }orders/current`, { data: { user_id } })
        .then(() => history.push('/'));
    }
  }

  const createOrder = () => {
    setShowSpinner(true);
    axios.post(`${ API_ROOT }orders`, {
      ordererId: user_id,
    })
      .then(res => setOrder(res.data.data))
      .finally(() => setShowSpinner(false));
  }

  const toggleSummary = () => setOpened(!opened)

  const OrderSummary = () => (
    order ? (
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
    ) : null
  )

  const Order = () => (
    <>
      <h2>Carrito de Compras</h2>
      { order.items && order.items.map(item =>
        <CartItem
          key={ item._id }
          orderId={ order._id }
          quantity={ item.quantity }
          setOrder={ setOrder }
          { ...item.product }
        />)
      }
    </>
  )

  const OrderNotExists = () => (
    <>
      <h2 className="not-exists">No hay ningun pedido abierto.</h2>
      <button onClick={ createOrder }>Abrir Pedido</button>
    </>
  )

  return (
    <Layout
      action="back"
      outerContent={ <OrderSummary /> }
      page="cart"
      showBackButton={ true }
      showSpinner={ showSpinner }
    >
      { order !== null && <Order /> }
      { order === null && <OrderNotExists /> }
    </Layout>
  );
}

export default withRouter(Cart);