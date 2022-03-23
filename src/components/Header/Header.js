import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <img src={logo} alt="" />
                <ul>
                    <li><a href="#">Order</a></li>
                    <li><a href="#">Order</a></li>
                    <li><a href="#">Inventory</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;