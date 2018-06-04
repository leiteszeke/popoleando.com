import React, { Component } from 'react';
import Header from '../../components/Header';
import Category from '../../components/Category';
import axios from 'axios';
import { API_ROOT } from './../../env.js';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            categories: [],
            show: false
        }
    }

    componentDidMount() {
        this.manageUser();
        let root = document.getElementById('root');
        
        root.classList.remove('middle');
        root.classList.remove('finish');
        root.classList.add('start');

        axios.get(`${API_ROOT}/categories`)
        .then( (res) => {
            this.setState({ categories: res.data });
        })
        .catch( (err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div id="home" className="wrapper">
                <Header />   
                <div className="content">
                    { this.state.categories.map( (category) => {
                        return (
                            <Category key={ category.id } id={ category.id } title={ category.name } image={ category.image } total={ category.total_products } />
                        )
                    }) }
                </div>   
            </div>
        );
    }

    manageUser() {
        if (localStorage.getItem('user_id')) {
            this.setState({ show: true });
        } else {
            window.location.href = "/login";
        }
    }
}

export default Home;