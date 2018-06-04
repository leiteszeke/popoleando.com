import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();

        this.state = {
            value: 0
        }

        this.changeQuantity = this.changeQuantity.bind(this);   
    }

    componentDidMount() {
        let itemValue = this.props.fractionable === 1 ? parseFloat(this.props.value) : parseInt(this.props.value, 10);
        this.setState({ value: itemValue });
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
            newValue = newValue < 0 ? 0 : (this.props.fractionable === 1 ? parseFloat(newValue) : parseInt(newValue, 10));

            this.setState({ value: newValue }, () => {
                this.changeQuantity();
            });
        }
    }

    changeQuantity() {
        this.props.parent.setQuantity(this.state.value);
    }

    increment() {
        let newValue = parseFloat(this.state.value) + parseFloat(this.props.step);
        newValue = this.props.fractionable === 1 ? parseFloat(newValue) : parseInt(newValue, 10);

        this.setState({ value: newValue }, () => {
            this.changeQuantity();
        });
    }
}

export default Counter;