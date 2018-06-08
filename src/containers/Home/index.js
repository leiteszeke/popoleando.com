import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Category from '../../components/Category';
import axios from 'axios';
import { API_ROOT } from './../../env.js';

class Home extends Component {
    constructor() {
        super();

        this.state = {
            categories: [],
            isLogged: true,
            show: false,
            menuState: false
        }
        
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    componentDidMount() {
        this.manageUser();
        
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
            !this.state.isLogged 
                ? <Redirect to="/login" />
                : (
                    this.state.show 
                        ? (
                            <div id="home" className="wrapper">
                                <Header parent={ this } showCartBasket />   
                                <Menu className={ this.state.menuState ? `opened` : `closed` } />   
                                <div className="content">
                                    { this.state.categories.map( (category) => {
                                        return (
                                            <Category key={ category.id } id={ category.id } title={ category.name } image={ category.image } total={ category.total_products } />
                                        )
                                    }) }
                                </div>  
                            </div>
                        ) : ''
                )

        );
    }

    manageUser() {
        if (localStorage.getItem('user_id') != null) {
            this.setState({ isLogged: true, show: true });
        } else {
            this.setState({ isLogged: false });
        }
    }

    toggleMenu() {
        let menuState = this.state.menuState;
        this.setState({ menuState: !menuState });
    }
}

export default Home;