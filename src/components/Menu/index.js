// Dependencies
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Menu = ({ className, history }) => {
    const logout = () => {
        localStorage.removeItem('user_id');
        history.push('/login');
    }

    return (
        <nav className={ `${ className } menu` }>
            <ul className="top-menu">
                <Link to="/">Home</Link>
                <Link to="/orders">Mis Pedidos</Link>
            </ul>
            <ul className="bottom-menu">
                <div onClick={ logout }>Salir</div>
            </ul>
        </nav>
    );
}

export default withRouter(Menu);