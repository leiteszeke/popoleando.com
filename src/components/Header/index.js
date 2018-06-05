import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-left">
                    { this.props.backButton 
                        ? [
                            (this.props.action === 'back'
                                ? (
                                    <a key="1" onClick={ () => this.goBack() }> 
                                        <i className="fa fa-chevron-left"></i>
                                    </a>
                                )
                                : (
                                    <Link key="2" to={ this.props.backUrl }> 
                                        <i className="fa fa-chevron-left"></i>
                                    </Link>
                                )
                            )
                        ]
                        : (
                            <i onClick={ () => this.props.parent.toggleMenu() } className="fa fa-bars"></i>
                        )
                    }
                </div>
                <div className="header-right">
                    { this.props.showCartBasket 
                        ? (
                            <Link to="/cart">
                                <i className="fa fa-shopping-basket"></i>
                            </Link>
                        )
                        : ''
                    }
                </div>
            </header>
        );
    }

    goBack() {
        window.history.back();
    }
}

export default Header;