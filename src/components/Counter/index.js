import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();

        this.state = {
            value: 0
        }
    }

    componentDidMount() {
        this.setState({ value: this.props.value });
    }

    render() {
        return (
            <div className="counter">
                <i onClick={ () => this.decrement() } className={ (this.state.value > 0 ? `` : `disabled `) + `buttons fa fa-minus` }></i>
                <input type="number" value={ this.state.value } />
                <i onClick={ () => this.increment() } className="buttons fa fa-plus"></i>
            </div>
        );
    }

    decrement() {
        if (this.state.value > 0) {
            let newValue = parseFloat(this.state.value) - parseFloat(this.props.step);
            newValue = newValue < 0 ? 0 : newValue;
            this.setState({ value: parseFloat(newValue).toFixed(2) });
        }
    }

    increment() {
        let newValue = parseFloat(this.state.value) + parseFloat(this.props.step);
        this.setState({ value: parseFloat(newValue).toFixed(2) });
    }
}

export default Counter;