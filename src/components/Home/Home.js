import React, { useEffect, useState } from 'react';
import Instrument from '../instrument/Instrument';
import './Home.css';
/* --------------------------------------------
 -----Showing data for home component------------
 ---------------------------------------------*/
const Home = () => {
/* --------------------------------------------
 -----Instruments to be rendered on the UI------------
 ---------------------------------------------*/
    const [displayInstruments, setDisplayInstruments] = useState([]);
/* --------------------------------------------
 -----Fetching data from json fake data------------
 ---------------------------------------------*/
    useEffect(() => {
        fetch('./instruments.JSON')
            .then(res => res.json())
            .then(data => {
                setDisplayInstruments(data);
            });
    }, []);
    const newArray=displayInstruments.slice(0, 4)

/* --------------------------------------------
 -----Showing home elements------------
 ---------------------------------------------*/

    return (
      /* --------------------------------------------
 -----Showing carousel for upper section------------
 ---------------------------------------------*/
        <>
         <div className="my-3 text-center headings">
             <h1>Words From Our Customers</h1>
         </div>
        <div className="container">

         <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
           <div className="carousel-indicators">
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
           </div>
           <div className="carousel-inner">
             <div className="carousel-item active">
             <img src="https://cdn.pixabay.com/photo/2014/05/21/15/47/piano-349928__480.jpg" className="d-block w-100" alt="..."/>
               <div className="carousel-caption d-none d-md-block">
                 <h5>Jacob seed</h5>
                 <p>I had a feeling that this would be just another piano course. But man was I wrong! Everything from begining to end felt like I was feeling the music with my heart. Without a doubt this was by far the best learning experience I've ever had. I thank all the teachers of this academy from the bottom of my heart.</p>
               </div>
             </div>
             <div className="carousel-item">
             <img src="https://cdn.pixabay.com/photo/2015/08/29/14/18/bass-913092__340.jpg" className="d-block w-100" alt="..."/>
               <div className="carousel-caption d-none d-md-block">
                 <h5>Abdul Alim</h5>
                 <p>I had a dream of being a bass guitarist of a famous band. But I had no skills to match. Then I heard about this course from a friend of mine. I was quite skeptical at first. But decided to give it a try. That was the best decision of my life. Now I am the bass guitarist of Greenday.</p>
               </div>
             </div>
             <div className="carousel-item">
             <img src="https://cdn.pixabay.com/photo/2015/02/18/20/23/harmonica-641425__340.jpg" className="d-block w-100" alt="..."/>
               <div className="carousel-caption d-none d-md-block">
                 <h5>Diego Mclaren</h5>
                 <p>Since my childhood I saw a man play harmonica. He played really good and I really wanted to play like him. He told me I should do a online course recently. So I started and finished this course within 3 months. Now I am able to play like a pro. And as a bonus, I found my wife who fell in love after first hearing me play.</p>
               </div>
             </div>
           </div>
           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
             <span className="visually-hidden">Previous</span>
           </button>
           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
             <span className="carousel-control-next-icon" aria-hidden="true"></span>
             <span className="visually-hidden">Next</span>
           </button>
         </div>
         <div className="my-3 text-center headings">
             <h1>Most Popular Courses</h1>
         </div>
            <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 g-4">

                    {
                        newArray.map((instrument,index) =>  <Instrument
                            key={instrument.key}
                            instrument={instrument}
                            index={index}
                        >
                        </Instrument>)
                    }
            </div>
        </div>
        </>
    );
};

export default Home;