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
        let root = document.getElementById('root');
        
        root.classList.remove('start');
        root.classList.remove('finish');
        root.classList.add('middle');

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
                <Header backButton backUrl="/" />   
                <div className="content">
                    <h1>{ this.state.category.name }</h1>
                    { this.state.category.products.map( (product) => {
                        return <Product key={ product.id } id={ product.id } name={ product.name } description={ product.description } price={ product.unit_price } salesUnit={ product.sales_unit } />
                    }) }
                </div>   
            </div>
        );
    }
}

export default Products;