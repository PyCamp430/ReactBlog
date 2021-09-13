import React from "react";
import summer from "../images/summerfield.webp";

const About = () => {
    return (
        <div className="container">
            <p className="hr"></p>
            <h1 id="aboutheading">About Me</h1>
            <div className="row">
                <img src={summer} className="img-thumbnail rounded mx-auto d-block" alt="summer" />
            </div>   
            <div className="row center">
                <p>
                    I like to work, travel and try delicious foods from different parts of the world. I am always ready with my bags pack and take on another exciting adventure.
                    You can also join me in my adventure. This blog is a great place for you to tell a story and let your users know a little more about you.
                </p>
            </div>
        </div>
    );
}

export default About;