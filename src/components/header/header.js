import React from 'react';
import './header.css';
const Header = () => {
    return (
        <div className='header-container'>
            <div className='header'>
                <div className='header-logo'>
                    Xpenser <i className="fi fi-br-credit-card"></i>
                </div>
                <div className='header-button'>
                    <a href='https://github.com' rel='noopener noreferrer' target='_blank'>
                        <i className="devicon-github-original colored"></i> Star
                    </a>
                </div>
            </div>

        </div>
    );
}

export default Header;
