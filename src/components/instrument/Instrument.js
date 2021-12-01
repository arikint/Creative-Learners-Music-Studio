import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import './Instrument.css';
import Rating from 'react-rating';
/* --------------------------------------------
 -----Showing instrument component------------
 ---------------------------------------------*/
const Instrument = (props) => {
/* --------------------------------------------
 -----destructuring from objects in props------------
 ---------------------------------------------*/
    const { name, img, course_duration, no_of_teachers, price, course_rating } = props.instrument;

    return (
        <div className="col">
        <div className="card">
            <div>
                <img className="card-img-top" src={img} alt="" />
            </div>
            <div className="card-body">
                <h4>{name}</h4>
                <p><small>Couse Duration: {course_duration} weeks</small></p>
                <p><small>No. of Teachers: {no_of_teachers}</small></p>
                <p><small>Course Price: ${price}</small></p>
                <Rating
                    initialRating={course_rating}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly></Rating>
              <div className="btnPosition">
                  <button
                    className="btn"
                ><FontAwesomeIcon icon={faMusic} /> Join Course</button>
              </div>
                
            </div>
        </div>
        </div>
    );
};

export default Instrument;