import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-left">
                    { this.props.backButton 
                        ? (
                            <Link to={ this.props.backUrl }> 
                                <i className="fa fa-chevron-left"></i>
                            </Link>
                        )
                        : (
                            <i className="fa fa-bars"></i>
                        )
                    }
                </div>
                <div className="header-right">
                    <Link to="/cart">
                        <i className="fa fa-shopping-basket"></i>
                    </Link>
                </div>
            </header>
        );
    }
}

export default Header;