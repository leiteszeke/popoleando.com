// Dependencis
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
// Components
import Spinner from '../../components/Spinner';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Category from '../../components/Category';
// Config
import { API_ROOT } from './../../env.js';

const Home = () => {
    const [categories, setCategories] = useState([]);
    const [isLogged, setIsLogged] = useState(true);
    const [showSpinner, setShowSpinner] = useState(true);
    const [show, setShow] = useState(false);
    const [menuState, setMenuState] = useState(false);
    const toggleMenu = () => setMenuState(!menuState);

    const manageUser = () => {
        if (localStorage.getItem('user_id') !== null) {
            setIsLogged(true);
            setShow(true);
            return;
        }
    }

    useEffect(() => {
        manageUser();

        axios.get(`${API_ROOT}/categories`)
            .then(res => setCategories(res.data))
            .finally(() => setShowSpinner(false));
    }, []);

    if (!isLogged) return <Redirect to="/login" />;

    if (!show) return <Spinner start={ showSpinner } title="Cargando categorias..." />;

    return (
        <div id="home" className="wrapper">
            <Spinner start={ showSpinner } title="Cargando categorias..." />
            <Header onToggle={ toggleMenu } showCartBasket />
            <Menu className={ menuState ? `opened` : `closed` } />
            <div className="content">
                { categories.map(category => <Category key={ category.id } { ...category } />) }
            </div>
        </div>
    );
}

export default Home;