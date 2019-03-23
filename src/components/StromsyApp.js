import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import '../css/stromsy-style.css';

const StromsyApp = () => {

    return (
        <section id="main-section">
            <Header />
            <Content />
            <Footer />
        </section>
    );

}

export default StromsyApp
