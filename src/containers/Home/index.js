// Dependencis
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
// Components
import Spinner from '../../components/Spinner';
import Layout from '../../components/Layout';
import Category from '../../components/Category';
// Config
import { API_ROOT } from './../../env.js';

const Home = () => {
    const isLogged = localStorage.getItem('user_id') !== null;
    const show = isLogged;
    const [categories, setCategories] = useState([]);
    const [showSpinner, setShowSpinner] = useState(true);

    useEffect(() => {
        axios.get(`${ API_ROOT }categories`)
            .then(res => setCategories(res.data.data))
            .finally(() => setShowSpinner(false));
    }, []);

    if (!isLogged) return <Redirect to="/login" />;

    if (!show) return <Spinner start={ showSpinner } title="Cargando categorias..." />;

    return (
        <Layout
            page="home"
            showCartBasket={ true }
            showSpinner={ showSpinner }
            spinnerText="Cargando categorias..."
        >
            { categories.map(category => <Category key={ category._id } { ...category } />) }
        </Layout>
    );
}

export default Home;