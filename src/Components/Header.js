import React from 'react';
import '../Styles/header.css'

function Header() {
    return (
        <div className="header">
            <div className="header-box">
            <h1>Blog Class Naming</h1>
                <ul className="header-list">
                    <li className="header-item">My Home</li>
                    <li className="header-item">Content</li>
                    <button className="toggle-btn">카테고리 Click
                    <div class="navicon"></div>
                    </button>
                </ul>
            </div>
        </div>
        
    );
}

export default Header;
