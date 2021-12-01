import React from 'react';
import './Footer.css';
import Facebook from '../../images/download1.png';
/* --------------------------------------------
 -----Showing data for footer component------------
 ---------------------------------------------*/
const Footer = () => {
    return (
        <footer className="footer">
            <h2>Creative Learners Incorporation</h2>
        <p>Feel the music, feel the spirit</p>
        <img className="social" src={Facebook} alt="..."/>
        <p>© 2021 All Rights Reserved</p>
        </footer>
    );
};

export default Footer;