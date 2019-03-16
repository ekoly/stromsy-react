import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Blog from './Blog';
import Links from './Links';
import About from './About';
import Unfinished from './Unfinished';
import '../css/stromsy-style.css';

class Content extends Component {
    render() {
        return (
            <section id="main-content-area">
                    <Route exact path="/" component={Blog} />
                    <Route path="/links" component={Links} />
                    <Route path="/about" component={About} />
                    <Route path="/projects" component={Unfinished} />
                    <Route path="/login" component={Unfinished} />
            </section>
        );
    }
}

export default Content
