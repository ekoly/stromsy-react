import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Blog from './Blog';
import Links from './Links';
import Loading from './Loading';
import NotFound from './NotFound';
import Unfinished from './Unfinished';
import '../css/stromsy-style.css';

class Content extends Component {
    render() {
        return (
            <section id="main-content-area">
                <Suspense fallback={<Loading />}>
                    <Switch>
                        <Route exact path="/" component={Blog} />
                        <Route path="/blog" component={Blog} />
                        <Route path="/loading" component={Loading} />
                        <Route path="/links" component={Links} />
                        <Route path="/about" component={About} />
                        <Route path="/projects" component={Unfinished} />
                        <Route path="/login" component={Unfinished} />
                        <Route path="/" component={NotFound} />
                    </Switch>
                </Suspense>
            </section>
        );
    }
}

export default Content
