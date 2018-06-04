import React, { Component } from 'react';

class Stars extends Component {
    render() {
        return (
            <div className="stars">
                <i className="fa fa-star active"></i>
                <i className="fa fa-star active"></i>
                <i className="fa fa-star active"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
            </div>
        );
    }
}

export default Stars;