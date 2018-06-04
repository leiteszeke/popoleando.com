import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <div className="counter">
                <i onClick={ () => this.decrement() } className="buttons disabled fa fa-minus"></i>
                <input type="number" value="1" />
                <i onClick={ () => this.increment() } className="buttons fa fa-plus"></i>
            </div>
        );
    }

    decrement() {

    }

    increment() {

    }
}

export default Counter;