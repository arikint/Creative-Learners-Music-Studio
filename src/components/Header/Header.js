import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/learnmusic.png';
import './Header.css';
/* --------------------------------------------
 -----Showing data for header component------------
 ---------------------------------------------*/
const Header = () => {
    return (
        <div className="header">
            <h1>Creative Learners Music Studio</h1>
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/joinus">Join Us</NavLink>
                <NavLink to="/about">About Us</NavLink>
            </nav>
        </div>
    );
};

export default Header;