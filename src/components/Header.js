import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <header id="banner">
            <section id="main-logo" class="col col3">
                <h1>
                    <NavLink id="main-logo-title" to="/">
                        stromsy
                    </NavLink>
                </h1>
            </section>
            <nav>
                <ul>
                    <li class="col col2">
                        <h1>
                            <NavLink id="nav-main-logo-title" to="/">
                                stromsy
                            </NavLink>
                        </h1>
                    </li>
                    <li class="col col2">
                        <NavLink to="/projects" activeClassName="active">projects</NavLink>
                    </li>
                    <li class="col col2">
                        <NavLink to="/links" activeClassName="active">links</NavLink>
                    </li>
                    <li class="col col2">
                        <NavLink to="/about" activeClassName="active">about</NavLink>
                    </li>
                    <li class="col col2">
                        <NavLink to="/" activeClassName="active"></NavLink>
                    </li>
                    <li class="col2 col-last">
                        <NavLink to="/login" activeClassName="active" id="login">
                            login
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <section id="hamburger-menu">
                <i id="hamburger" class="fas fa-bars"></i>
                <ul id="hamburger-dropdown">
                    <li>
                        <NavLink to="/login">login</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/links">links</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">about</NavLink>
                    </li>
                </ul>
            </section>
        </header>
    );

}

export default Header
