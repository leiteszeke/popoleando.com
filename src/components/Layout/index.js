// Dependencies
import React, { useState } from 'react';
// Components
import Spinner from '../Spinner';
import Header from '../Header';
import Menu from '../Menu';

const Layout = ({
    action,
    backUrl,
    children,
    outerContent,
    page,
    showBackButton,
    showCartBasket,
    showSpinner,
    spinnerText,
}) => {
    const [menuState, setMenuState] = useState(false);
    const toggleMenu = () => setMenuState(!menuState);

    return (
        <div id={ page } className="wrapper">
            <Spinner start={ showSpinner } title={ spinnerText || 'Cargando...' } />
            <Header
                action={ action }
                backUrl={ backUrl }
                onToggle={ toggleMenu }
                showBackButton={ showBackButton }
                showCartBasket={ showCartBasket }
            />
            <Menu className={ menuState ? 'opened' : 'closed' } />
            <div className="content">
                { children }
            </div>
            { outerContent }
        </div>
    )
}

export default Layout;