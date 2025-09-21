import React from 'react';
import './header.scss';
import { FaGlobeAmericas } from "react-icons/fa";


const Header = () => {
    return (
        <div className='header'>
            <p>World Time</p>
            <p>Sotpwatch</p>
            <p><FaGlobeAmericas /></p>
            <p>Time Zone Converter</p>
            <p>Time Zone Map</p>
        </div>
    );
}

export default Header;
