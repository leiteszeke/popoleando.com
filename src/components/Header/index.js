// Dependencies
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// Images
import logoExtendeal from '../../images/logo-horizontal.svg';

const Header = ({ action, backUrl, history, onToggle, showBackButton, showCartBasket }) => {
    const renderBackButton = () => {
        if (action === 'back') {
            return (
                <div onClick={ () => history.goBack() }>
                    <i className="fa fa-chevron-left"></i>
                </div>
            )
        }

        return (
            <Link to={ backUrl }>
                <i className="fa fa-chevron-left"></i>
            </Link>
        );
    }

    return (
        <header>
            <div className="header-left">
                { showBackButton && renderBackButton() }
                { !showBackButton && <i className="fa fa-bars" onClick={ onToggle } /> }
            </div>

            <img src={ logoExtendeal } alt="Popoleando" />

            <div className="header-right">
                { showCartBasket && <Link to="/cart"><i className="fa fa-shopping-basket"></i></Link> }
            </div>
        </header>
    )
}

export default withRouter(Header);