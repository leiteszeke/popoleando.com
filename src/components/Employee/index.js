import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Employee extends Component {
    constructor() {
        super();

        this.state = {
            redirect: false
        }
    }
    render() {
        return this.state.redirect 
        ? <Redirect to="/" />
        : <div onClick={ () => this.setUser() } className={ this.props.className + ` employee` } style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/extendeal/secret/employees/` + this.props.nick + `.jpg)` } }></div>
    }

    setUser() {
        localStorage.setItem('user_id', this.props.id);
        this.setState({ redirect: true });
    }
}

export default Employee;