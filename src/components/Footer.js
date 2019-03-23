import React from 'react';
import { Link } from 'react-router-dom';
import '../css/stromsy-style.css';

const Footer = () => {

    return (
        <footer>
            <section><Link to="/about">About</Link> | <Link to="/blog">Blog</Link></section>
        </footer>
    );

}

export default Footer
