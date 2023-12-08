import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <header>
            <div className='holder'>
                <img src='images/logo.png' alt='Transportes X' width="100"></img>
                <h1>Transportes X</h1>
            </div>
        </header>
    );
}

export default Header;