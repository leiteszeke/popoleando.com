import React, { Component } from 'react';
import Header from '../../components/Header';
import Product from '../../components/Product';
import axios from 'axios';
import { API_ROOT } from './../../env.js';

class Products extends Component {
    constructor() {
        super();

        this.state = {
            category: {
                products: []
            }
        }
    }
    componentDidMount() {
        axios.get(`${API_ROOT}/categories/${this.props.match.params.categoryId}`)
        .then( (res) => {
            this.setState({ category: res.data });
        })
        .catch( (err) => {
            console.log(err);
        });
    }

    render() {
        return (
            <div id="products" className="wrapper">
                <Header backButton backUrl="/" showCartBasket />   
                <div className="content">
                    <h1>{ this.state.category.name }</h1>
                    { this.state.category.products.map( (product) => {
                        return <Product key={ product.id } id={ product.id } name={ product.name } description={ product.description } price={ product.unit_price } salesUnit={ product.sales_unit } />
                    }) }
                    <i onClick={ () => this.goUp() } className="goUp fa fa-chevron-up"></i>
                </div>   
            </div>
        );
    }

    goUp() {

    }
}

export default Products;