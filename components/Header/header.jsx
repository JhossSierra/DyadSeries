'use client'

import './header.css';
import {BsStars} from "react-icons/bs";
//import {FaBars} from "react-icons/fa"

import {IconContext} from 'react-icons';
import ToggleComp from '../toggleComp/toggleComp';
import { useState } from 'react';


const Header = () => {
const [toggle,setToggle]=useState('false')

    const sendToggle=(toggle)=>{
     toggle===true? setToggle('true'):setToggle('false')
    }

 

    return (
        <header>
        <div className='headerContainer'>
        <div><a className='LOGO' href="">Dyad <span className='icon'><BsStars/></span></a></div>

        <nav>
            
            
            <ul className={toggle}>
                <li><a className='links' href="">Home</a></li>
                <li><a className='links' href="">About</a></li>
                <li><a className='links' href="">Characters</a></li>
                <li><a className='links' href="">Forum</a></li>
                
            </ul>
        <div className='barsIcon'><ToggleComp sendToggle={sendToggle}/></div>   
        </nav>

        </div>
        </header>
    );
};

export default Header;