// Dependencies
import React, { useEffect, useState } from 'react';

const Counter = ({ defaultValue, onChange, step }) => {
    const [value, setValue] = useState(defaultValue);

    const add = () => setValue(value + step);

    const remove = () => {
        if (value === 0) return;
        if (step >= 0.5 && step === 1) return;
        return setValue(value - step);
    }

    useEffect(() => {
        if (typeof onChange === 'function') return onChange(value);
    }, [value]);

    return (
        <div className="counter">
            <i onClick={ remove } className={ (value > 0 ? `` : `disabled `) + `buttons fa fa-minus` } />
            <input type="number" value={ value } step={ step } />
            <i onClick={ add } className="buttons fa fa-plus"></i>
        </div>
    );
}

export default Counter;