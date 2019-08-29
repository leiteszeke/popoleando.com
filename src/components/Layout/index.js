// Dependencies
import React, { useState } from 'react';
// Components
import Spinner from '../Spinner';
import Header from '../Header';
import Menu from '../Menu';

const Layout = ({ children, page, showCartBasket, showSpinner, spinnerText }) => {
    const [menuState, setMenuState] = useState(false);
    const toggleMenu = () => setMenuState(!menuState);

    return (
        <div id={ page } className="wrapper">
            <Spinner start={ showSpinner } title={ spinnerText || 'Cargando...' } />
            <Header onToggle={ toggleMenu } showCartBasket={ showCartBasket } />
            <Menu className={ menuState ? 'opened' : 'closed' } />
            <div className="content">
                { children }
            </div>
        </div>
    )
}

export default Layout;