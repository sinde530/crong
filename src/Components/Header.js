import React from 'react';
import '../Styles/header.css'
import { Route, Link } from 'react-router-dom';
import Home from '../Pages/Home';
import Content from '../Pages/Content';

function Header() {

    return (
        <div className="header">
            <div className="header-box">
                <h1>Blog Class Naming</h1>
                <div className="openMenu"><i class="fas fa-bars"></i></div>
                <ul className="header-list">
                    <li className="header-item">
                        <Link to="/">My Home</Link>
                    </li>
                    <li className="header-item">
                        <Link to="/Content">Content</Link>
                    </li>
                    <Route path="/" exact = {true} component={Home} />
                    <Route path="/Content" component={Content} />
                    <div className="closeMenu"><i className="fa fa-times"></i></div>
                    <span className="icons">
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-github"></i>
                    </span>
                </ul>
            </div>
        </div>

    );
}

export default Header;
