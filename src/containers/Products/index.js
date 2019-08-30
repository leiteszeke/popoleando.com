// Dependencies
import React from 'react';
// Components
import Layout from '../../components/Layout';
import Product from '../../components/Product';

const Products = ({ location: { state: { category } } }) => (
    <Layout
        backUrl="/"
        id="products"
        showBackButton={ true }
        showCartBasket={ true }
    >
        <h3>{ category.name }</h3>
        { category.products &&
            category.products.map(product => <Product key={ product.id } { ...product } />)
        }
    </Layout>
);

export default Products;