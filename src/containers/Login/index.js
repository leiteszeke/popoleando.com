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
    const [departments, setDepartments] = useState(0);
    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(() => {
        axios.get(`${ API_ROOT }departments`)
            .then(res => setDepartments(res.data.data))
            .finally(() => setShowSpinner(false));

        axios.get(`${ API_ROOT }users`)
            .then(res => setUsers(res.data.data));
    }, []);

    if (departments.length > 0 && department === 0) {
        return (
            <div id="login" className="departments">
                <Spinner start={ showSpinner } title="Cargando departamentos..." />
                { departments.map(department => (
                    <div
                        key={ department._id }
                        onClick={ () => setDepartment(department._id) }
                        className="department"
                    >
                        { department.name }
                    </div>
                )) }
            </div>
        )
    }

    const User = ({ department, _id, name, photo }) => (
        <Employee
            className={ `department-${ department._id }` }
            department={ department._id }
            id={ _id }
            nick={ name }
            photo={ photo }
        />
    )

    return (
        <div id="login" className="selected">
            <Spinner start={ showSpinner } title="Cargando empleados..." />
            <h2>Dime que empanada quieres y te dire quien eres</h2>
            <div className="employees">
                { users
                    .filter(user => user.department._id === department)
                    .map(user => <User key={ user.id } { ...user } />) }
            </div>
            <i onClick={ () => setDepartment(0) } className="fa fa-chevron-left" />
        </div>
    );
}

export default Login;