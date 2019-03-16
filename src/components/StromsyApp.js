import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import '../css/stromsy-style.css';

class StromsyApp extends Component {
  render() {
    return (
        <section id="main-section">
            <Header />
            <Content />
            <Footer />
        </section>
    );
  }
}

export default StromsyApp
