// Dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Components
import Employee from '../../components/Employee';
import Spinner from '../../components/Spinner';
// Config
import { API_ROOT } from './../../env.js';

const Login = () => {
    const [users, setUsers] = useState([]);
    const [department, setDepartment] = useState(0);
    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(() => {
        axios.get(`${ API_ROOT }users`)
        .then(res => setUsers(res.data))
        .finally(() => setShowSpinner(false));
    });

    if (department === 0) {
        return (
            <div id="login" className="departments">
                <Spinner start={ showSpinner } title="Cargando departamentos..." />
                <div onClick={ () => setDepartment(1) } className="department">Desarrollo</div>
                <div onClick={ () => setDepartment(7) } className="department">Soporte & QA</div>
                <div onClick={ () => setDepartment(5) } className="department">Dise&ntilde;o</div>
            </div>
        )
    }

    const User = ({ id_department, id_user, nick_user }) => (
        <Employee
            className={ `department-${ id_department }` }
            department={ id_department }
            id={ id_user }
            nick={ nick_user }
        />
    )

    return (
        <div id="login" className="selected">
            <Spinner start={ showSpinner } title="Cargando empleados..." />
            <h2>Dime que empanada quieres y te dire quien eres</h2>
            <div className="employees">
                { users
                    .filter(user => user.id_department === department)
                    .map(user => <User key={ user.id } { ...user } />) }
            </div>
            <i onClick={ () => setDepartment(0) } className="fa fa-chevron-left" />
        </div>
    );
}

export default Login;