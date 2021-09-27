import React from "react";
import summer from "../images/summerfield.webp";

const About = () => {
    return (
        <div className="container">
            <p className="hr"></p>
            <h1 id="aboutheading">About Us</h1>
            <div className="row">
                <img src={summer} className="img-thumbnail rounded mx-auto d-block" alt="summer" />
            </div>   
            <div className="row center">
                <p>
                    This Blog is a great place for those who like to work, travel and try delicious foods from different parts of the world. We are always ready with our bags pack and take on another exciting trip.
                    You can also join us in our adventure. This blog is a great place for you to tell your story and let the people know a little more about you.
                </p>
            </div>
        </div>
    );
}

export default About;