import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

    render() {

        return (
			<header id="banner">
				<section id="main-logo" class="col col3">
					<h1>
						<Link id="main-logo-title" to="/">
							stromsy
						</Link>
					</h1>
				</section>
                <nav>
					<ul>
                        <li class="col col2">
                            <h1>
                                <Link id="nav-main-logo-title" to="/">
                                    stromsy
                                </Link>
                            </h1>
                        </li>
                        <li class="col col2">
                            <Link to="/projects">projects</Link>
                        </li>
                        <li class="col col2">
                            <Link to="/links">links</Link>
                        </li>
                        <li class="col col2">
                            <Link to="/about">about</Link>
                        </li>
                        <li class="col col2">
                            <Link to="/"></Link>
                        </li>
                        <li class="col2 col-last">
                            <Link to="/login" id="login">
                                login
                            </Link>
                        </li>
					</ul>
				</nav>
				<section id="hamburger-menu">
					<i id="hamburger" class="fas fa-bars"></i>
					<ul id="hamburger-dropdown">
						<li>
							<Link to="/login">login</Link>
						</li>
						<li>
							<Link to="/blog">blog</Link>
						</li>
						<li>
							<Link to="/projects">projects</Link>
						</li>
						<li>
							<Link to="/links">links</Link>
						</li>
						<li>
							<Link to="/about">about</Link>
						</li>
					</ul>
				</section>
			</header>
        );

    }

}

export default Header
