import React, { Component } from 'react';
import Header from '../../components/Header';
import Category from '../../components/Category';

class Home extends Component {
    componentDidMount() {
        let root = document.getElementById('root');
        
        root.classList.remove('middle');
        root.classList.remove('finish');
        root.classList.add('start');
    }

    render() {
        return (
            <div id="home" className="wrapper">
                <Header />   
                <div className="content">
                    <Category />
                    <Category />
                    <Category />
                </div>   
            </div>
        );
    }
}

export default Home;