// Dependencies
import React from 'react';
import { withRouter } from 'react-router-dom';

const Employee = ({ history, ...employee }) => {
    const pathUrl = 'https://s3-us-west-2.amazonaws.com/leites.dev/ExtendealTeam/';
    const imageUrl = `${ pathUrl }${ employee.photo }`;
    const defaultUrl = `${ pathUrl }default.jpeg`;

    const setUser = () => {
        localStorage.setItem('user_id', employee.id);
        history.push('/');
    }

    return (
        <div
            className={ employee.className + ` employee` }
            onClick={ setUser }
            style={ {
                backgroundImage: `url(${ imageUrl }), url(${ defaultUrl })`
            } }
        />
    )
}

export default withRouter(Employee);