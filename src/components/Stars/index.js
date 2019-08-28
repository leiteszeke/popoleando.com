// Dependencies
import React from 'react';

const manageStars = (value = 0) => {
    const emptyArray = [false, false, false, false, false];
    if (value === 0) return emptyArray;
    for (let i = 0; i < Math.ceil(parseFloat(value)); i++) emptyArray[i] = true;
    return emptyArray;
}

const Stars = ({ value }) => {
    const stars = manageStars(value);

    return (
        <div className="stars">
            <i className={ (stars[0] ? `active ` : '') + `fa fa-star` }></i>
            <i className={ (stars[1] ? `active ` : '') + `fa fa-star` }></i>
            <i className={ (stars[2] ? `active ` : '') + `fa fa-star` }></i>
            <i className={ (stars[3] ? `active ` : '') + `fa fa-star` }></i>
            <i className={ (stars[4] ? `active ` : '') + `fa fa-star` }></i>
        </div>
    );
}

export default Stars;