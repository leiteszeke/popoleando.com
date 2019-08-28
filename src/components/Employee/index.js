// Dependencies
import React from 'react';
import { withRouter } from 'react-router-dom';

const Employee = ({ history, ...employee }) => {
    const imageUrl = `https://s3-us-west-2.amazonaws.com/extendeal/secret/employees/${ employee.nick }.jpg`;

    const setUser = () => {
        localStorage.setItem('user_id', employee.id);
        history.push('/');
    }

    return (
        <div onClick={ setUser }
            className={ employee.className + ` employee` }
            style={ {
                backgroundImage: `url(${ imageUrl })`
            } }
        />
    )
}

export default withRouter(Employee);