// Dependencies
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Components
import Header from '../../components/Header';
import Product from '../../components/Product';
// Config
import { API_ROOT } from './../../env.js';

const Products = ({ match: { params: { categoryId } } }) => {
    const [category, setCategory] = useState({});

    useEffect(() => {
        axios.get(`${ API_ROOT }/categories/${ categoryId }`)
            .then(res => setCategory(res.data));
    }, []);

    return (
        <div id="products" className="wrapper">
            <Header backButton backUrl="/" showCartBasket />
            <div className="content">
                <h1>{ category.name }</h1>
                { category.products.map(product => <Product key={ product.id } { ...product } />) }
            </div>
        </div>
    );
}

export default Products;