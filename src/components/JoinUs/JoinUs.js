import React from 'react';
import Visa from '../../images/visa.jpg';
import Master from '../../images/master.png';
import './JoinUs.css';
/* --------------------------------------------
 -----Showing joinus component------------
 ---------------------------------------------*/
const JoinUs = () => {
    return (
        /* --------------------------------------------
 -----Showing forms for joining------------
 ---------------------------------------------*/
        <div className="container">
            <h3 className="text-center m-5">Join us and experience our world class teaching methods and amazing skills</h3>
            <form>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input type="text" className="form-control" id="firstname" aria-describedby="emailHelp"/>
              <div id="emailHelp" className="form-text">This field is mandatory*</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input type="text" className="form-control" id="lastname" aria-describedby="emailHelp"/>
              <div id="emailHelp" className="form-text">This field is mandatory*</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
              <div id="emailHelp" className="form-text">This field is mandatory*</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Course Name</label>
              <input type="text" className="form-control" id="coursename" aria-describedby="emailHelp"/>
              <div id="emailHelp" className="form-text">This field is mandatory*</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
              <label className="form-label">Repeat Password</label>
              <input type="password" className="form-control" id="exampleInputPassword2"/>
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label">I have reference</label>
        
        </div>
        <div className="visa form-check">
           <img src={Visa} alt="..."/>
           <input type="checkbox" className="form-check-input" id="exampleCheck2"/>
        <label className="form-check-label"> Visa</label>
        <img src={Master} alt="..."/> 
        <input type="checkbox" className="form-check-input" id="exampleCheck3"/>
        <label className="form-check-label"> Master Card</label>
        </div>
        <div className="text-center">
            <button type="submit" className="btn btn-primary">Join Now</button>
        </div>
          
          </form>
        </div>
    );
};

export default JoinUs;