import React, { Component } from 'react';
import Employee from '../../components/Employee';
import Spinner from '../../components/Spinner';
import axios from 'axios';
import { API_ROOT } from './../../env.js';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            users: [],
            actualDeparment: 0
        }
    }

    componentDidMount() {
        if (this.refs.spinner)
            this.refs.spinner.start();

        axios.get(`${API_ROOT}/users`)
        .then( (res) => {
            this.setState({ users: res.data });
            this.refs.spinner.finish();
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
                        <Spinner ref="spinner" title="Cargando empleados..." />
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
                        <i onClick={ () => this.removeDeparment() } className="fa fa-chevron-left"></i>
                    </div>
                )
                : (
                    <div id="login" className="departments">
                        <Spinner ref="spinner" title="Cargando departamentos..." />
                        <div onClick={ () => this.selectDeparment(1) } className="department">Desarrollo</div>
                        <div onClick={ () => this.selectDeparment(7) } className="department">Soporte & QA</div>
                        <div onClick={ () => this.selectDeparment(5) } className="department">Dise&ntilde;o</div>
                    </div>
                )
                
        );
    }

    selectDeparment(departmentId) {
        this.setState({ actualDeparment: departmentId });
    }

    removeDeparment() {
        this.setState({ actualDeparment: 0 });
    }
}

export default Login;