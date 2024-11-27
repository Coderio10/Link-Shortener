import { useState } from "react";
import Brandrecognition from '../assets/icon-brand-recognition.svg';
import Detailedrecords from '../assets/icon-detailed-records.svg';
import Fullycustomizable from '../assets/icon-fully-customizable.svg';
import '../css/navbar.css'


function Features () {

    return (
        <>
            <div className="features">
                <h2>Advanced Statistics</h2>
                <p>Track how your links are performing across the web with our</p> 
                <p>advanced statistics dashboard.</p>
                <div className="benefit-section">
                    <div className="benefit-container Brandrecognition">
                        <div className="benefit">
                            <span><img src={Brandrecognition} /></span>
                            <h3>Brand Recognition</h3>
                            <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                        </div>
                    </div>
                    <div className="Line"></div>
                    <div className="benefit-container Detailedrecords">
                        <div className="benefit">
                            <span><img src={Detailedrecords} /></span>
                            <h3>Detailed Records</h3>
                            <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                        </div>
                    </div>
                    <div className="Line"></div>
                    <div className="benefit-container Fullycustomizable">
                        <div className="benefit">
                            <span><img src={Fullycustomizable} /></span>
                            <h3>Fully Customizable</h3>
                            <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features