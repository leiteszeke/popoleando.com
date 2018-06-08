import React, { Component } from 'react';

class Spinner extends Component {
    constructor() {
        super();

        this.state = {
            container: 'body',
            toggle: "toggle",
            title: "",
            singleton: true,
            baseClass: "loading-spinner",
            class: "",
            horizontal: false,
            start: false
        };

        this.start = this.start.bind(this);
        this.finish = this.finish.bind(this);
    }

    render() {
        return (
            <div className={ (this.state.start === true ? 'loading-spinner' : '') }>
                { this.state.start === true 
                    ? (
                        <div className="loading-spinner__wrapper">
                            <div className="loading-spinner__spinner-wrapper">
                                <svg className="loading-spinner__spinner" viewBox="25 25 50 50">
                                    <circle className="loading-spinner__wheel" cx="50" cy="50" r="20"/>
                                    <circle className="loading-spinner__arc" cx="50" cy="50" r="20" fill="none" strokeWidth="4px" strokeMiterlimit="10" />
                                </svg>
                            </div>
                            <span className="loading-spinner__message">{ this.props.title }</span>
                        </div>
                    )
                    : ''
                }
            </div>
        );
    }

    start() {
        this.setState({ start: true });
    }

    finish() {
        this.setState({ start: false });
    }
}

export default Spinner;