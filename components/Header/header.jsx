import './header.css';
import {BsStars} from "react-icons/bs";
import React from 'react';
const Header = () => {
    return (
        <header>
        <div className='headerContainer'>
        <div><a className='LOGO' href="">Dyad <BsStars className='icon'/></a></div>

        <nav>
            <ul>
                <li><a className='links' href="">Home</a></li>
                <li><a className='links' href="">About</a></li>
                <li><a className='links' href="">Characters</a></li>
                <li><a className='links' href="">Forum</a></li>
                
            </ul>
        </nav>

        </div>
        </header>
    );
};

export default Header;