import React from 'react';
import Not from '../../images/404.png';
/* --------------------------------------------
 -----Showing 404 not found component------------
 ---------------------------------------------*/
const NotFound = () => {
    return (
        <div className="container text-center">
             <img src={Not} alt="..."/>

            <h1>Not Found</h1>
            <h3>The page you are looking for is not available</h3>
            <button
                    className="btn" onClick={event =>  window.location.href='/home'}
                > Homepage</button>
        </div>
    );
};

export default NotFound;