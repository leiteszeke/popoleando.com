import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class Menu extends Component {
    constructor() {
        super();

        this.state = {
            redirect: false
        }
    }
    render() {
        return (
            ( this.state.redirect 
                ? <Redirect to="/login" />
                : (
                    <nav className={ this.props.className + ` menu` }>
                        <ul className="top-menu">
                            <Link to="/">Home</Link>
                            <Link to="/orders">Mis Pedidos</Link>
                        </ul>
                        <ul className="bottom-menu">
                            <a onClick={ () => this.logout() }>Salir</a>
                        </ul>
                    </nav>
                )
            )
        );
    }

    logout() {
        localStorage.removeItem('user_id');
        
        this.setState({ redirect: true });
    }
}

export default Menu;