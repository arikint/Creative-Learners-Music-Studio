import React from 'react';
import Creative from '../../images/creative.png';
import App from '../../images/app.png';
import Android from '../../images/android2.png';
/* --------------------------------------------
 -----Showing data for about component------------
 ---------------------------------------------*/
const About = () => {
    return (
        <div className="container text-center">
             <img src={Creative} alt="..."/>

            <h1>We are Creative Learners Music Studio</h1>
            <h3>We started our academy because of the passion we have for music and musical instruments. We wanted everyone to be able to find the pleasure that is within music. So we though about a way of teaching people how to play different instruments. Our goal is to to make as mush as people find the beauty of music.</h3>
            <h1>Download our Android App</h1>
            <h3>The App features a lot of opportunity to discover different styles of musical instruments and also newr electronic musical devices. Download it for free to get the most of our offerings.</h3>
            <img src={App} alt="..."/>
            <img src={Android} alt="..."/>
        </div>
    );
};

export default About;