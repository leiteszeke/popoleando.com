// Dependencies
import React from 'react';

const Spinner = ({ start, title }) => {
    const Container = ({ children }) => (
        <div className={ start ? 'loading-spinner' : '' }>
            { children }
        </div>
    )

    const Component = () => (
        <div className="loading-spinner__wrapper">
            <div className="loading-spinner__spinner-wrapper">
                <svg className="loading-spinner__spinner" viewBox="25 25 50 50">
                    <circle className="loading-spinner__wheel" cx="50" cy="50" r="20"/>
                    <circle className="loading-spinner__arc" cx="50" cy="50" r="20" fill="none" strokeWidth="4px" strokeMiterlimit="10" />
                </svg>
            </div>
            <span className="loading-spinner__message">{ title }</span>
        </div>
    )

    return (
        <Container>
            { start && <Component /> }
        </Container>
    );
}

export default Spinner;