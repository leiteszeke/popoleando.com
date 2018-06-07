import React, { Component } from 'react';
import Employee from '../../components/Employee';
import axios from 'axios';
import { API_ROOT } from './../../env.js';

class Login extends Component {
    constructor() {
        super();

        this.manageUser();

        this.state = {
            users: [],
            actualDeparment: 0
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
            this.state.actualDeparment > 0 
                ? (
                    <div id="login" className="selected">
                        <h2>Dime que empanada quieres y te dire quien eres</h2>
                        <div className="employees">
                            { this.state.users.map( (user) => {
                                return (
                                    this.state.actualDeparment === user.id_department 
                                        ? <Employee className={ `department-` + user.id_department } department={ user.id_department } key={ user.id_user } id={ user.id_user } nick={ user.nick_user } />
                                        : ''
                                )
                            }) } 
                        </div>
                    </div>
                )
                : (
                    <div id="login">
                        <div onClick={ () => this.selectDeparment(1) } className="department">Desarrollo</div>
                        <div onClick={ () => this.selectDeparment(7) } className="department">Soporte & QA</div>
                        <div onClick={ () => this.selectDeparment(5) } className="department">Arte</div>
                    </div>
                )
                
        );
    }

    selectDeparment(departmentId) {
        this.setState({ actualDeparment: departmentId }, () => {
            let departments = document.getElementsByClassName('deparment');
            
        });
    }

    manageUser() {
        if (localStorage.getItem('user_id')) {
            window.location.href = "/"
        }
    }
}

export default Login;