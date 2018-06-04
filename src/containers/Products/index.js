import React, { Component } from 'react';
import Header from '../../components/Header';
import Product from '../../components/Product';

class Products extends Component {
    componentDidMount() {
        let root = document.getElementById('root');
        
        root.classList.remove('start');
        root.classList.remove('finish');
        root.classList.add('middle');
    }

    render() {
        return (
            <div id="products" className="wrapper">
                <Header backButton backUrl="/" />   
                <div className="content">
                    <h1>Pizza</h1>
                    <Product />
                    <Product active />
                    <Product />
                </div>   
            </div>
        );
    }
}

export default Products;