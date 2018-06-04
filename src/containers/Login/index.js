import React, { Component } from 'react';
import Employee from '../../components/Employee';
import axios from 'axios';
import { API_ROOT } from './../../env.js';

class Login extends Component {
    constructor() {
        super();

        this.manageUser();

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get(`${API_ROOT}/users`)
        .then( (res) => {
            this.setState({ users: res.data });
        })
        .catch( (err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div id="login">
                <h2>Dime que empanada quieres y te dire quien eres</h2>
                { this.state.users.map( (user) => {
                    return (
                        <Employee key={ user.id_user } id={ user.id_user } nick={ user.nick_user } />
                    )
                }) }
            </div>
        );
    }

    manageUser() {
        if (localStorage.getItem('user_id')) {
            window.location.href = "/"
        }
    }
}

export default Login;