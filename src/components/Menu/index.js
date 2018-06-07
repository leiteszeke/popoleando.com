import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <nav className={ this.props.className + ` menu` }>
                <ul className="top-menu">
                    <Link to="/">Home</Link>
                    <Link to="/orders">Mis Pedidos</Link>
                </ul>
                <ul className="bottom-menu">
                    <a onClick={ () => this.logout() }>Salir</a>
                </ul>
            </nav>
        );
    }

    logout() {
        localStorage.removeItem('user_id');
        window.location.href = '/login';
    }
}

export default Menu;