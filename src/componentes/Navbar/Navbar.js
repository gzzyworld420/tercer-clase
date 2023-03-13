import React from 'react';

function Navbar() {
    return (
        <nav>
        <ul className="main-nav">
            <li>home</li>
            <li>productos</li>
            <li>about us</li>
            <li>contact</li>
        </ul>
        <ul className='user'>
            <li>Ignacio Aracena <img src="./img/user.jpg" alt=""/></li>
        </ul>
    </nav>
    );
}

export default Navbar;