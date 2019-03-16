import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/stromsy-style.css';

class Footer extends Component {
    render() {
        return (
            <footer>
                <section><Link to="/about">About</Link></section>
            </footer>
        );
    }
}

export default Footer
