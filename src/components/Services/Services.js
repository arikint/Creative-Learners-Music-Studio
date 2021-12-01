import React, { useEffect, useState } from 'react';
import Instrument from '../instrument/Instrument';
/* --------------------------------------------
 -----Showing services component------------
 ---------------------------------------------*/
const Services = (props) => {
    /* --------------------------------------------
 -----Instruments to be rendered on the UI------------
 ---------------------------------------------*/
    const [displayInstruments, setDisplayInstruments] = useState([]);

    useEffect(() => {
        fetch('./instruments.JSON')
            .then(res => res.json())
            .then(data => {
                setDisplayInstruments(data);
            });
    }, []);


    return (
        <>
        <div className="container">
            <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 g-4">

                    {
                        displayInstruments.map(instrument => <Instrument
                            key={instrument.key}
                            instrument={instrument}
                        >
                        </Instrument>)
                    }

            </div>
        </div>
        </>
    );
};

export default Services;