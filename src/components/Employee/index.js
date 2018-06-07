import React, { Component } from 'react';

class Employee extends Component {
    render() {
        return (
            <div onClick={ () => this.setUser() } className={ this.props.className + ` employee` } style={ { backgroundImage: `url(https://s3-us-west-2.amazonaws.com/extendeal/secret/employees/` + this.props.nick + `.jpg)` } }></div>
        );
    }

    setUser() {
        localStorage.setItem('user_id', this.props.id);
        window.location.href = "/";
    }
}

export default Employee;