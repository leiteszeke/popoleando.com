// Dependencies
import React, { useEffect, useState } from 'react';

const Counter = ({ defaultValue, onChange, step }) => {
    const [value, setValue] = useState(defaultValue);

    const add = () => setValue(value + step);

    const remove = () => {
        if (value === 0) return;
        if (step === 0.5 && value === 0.5) return;
        return setValue(value - step);
    }

    const setQuantity = e => {
        const { value } = e.target;
        setValue(value);
    }

    useEffect(() => {
        if (value !== defaultValue) {
            if (typeof onChange === 'function') return onChange(value);
        }
    }, [value]); // eslint-disable-line

    return (
        <div className="counter">
            <i onClick={ remove } className={ (value > 0 ? `` : `disabled `) + `buttons fa fa-minus` } />
            <input
                onChange={ setQuantity }
                step={ step }
                type="number"
                value={ value }
            />
            <i onClick={ add } className="buttons fa fa-plus"></i>
        </div>
    );
}

export default Counter;