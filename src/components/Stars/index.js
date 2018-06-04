import React, { Component } from 'react';

class Stars extends Component {
    constructor() {
        super();
        
        this.state = {
            active: [false, false, false, false, false]
        }
    }

    componentDidMount() {
        this.manageStars();
    }

    render() {
        return (
            <div className="stars">
                <i className={ (this.state.active[0] ? `active ` : '') + `fa fa-star` }></i>
                <i className={ (this.state.active[1] ? `active ` : '') + `fa fa-star` }></i>
                <i className={ (this.state.active[2] ? `active ` : '') + `fa fa-star` }></i>
                <i className={ (this.state.active[3] ? `active ` : '') + `fa fa-star` }></i>
                <i className={ (this.state.active[4] ? `active ` : '') + `fa fa-star` }></i>
            </div>
        );
    }

    manageStars() {
        if (this.props.value !== null) {
            let value = Math.ceil(parseFloat(this.props.value));
            let actives = this.state.active;

            for (let i = 0; i < value; i++) {
                actives[i] = true;
            }

            this.setState({ active: actives });
        }
    }
}

export default Stars;